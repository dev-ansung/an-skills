# Case study: three bugs from porting a protocol to a Worker

Worked examples from building `tts-flared`, a Cloudflare Worker that ports
a Python WebSocket-based TTS protocol client (`rany2/edge-tts`) to
TypeScript. Each bug below is a specific, repeatable shape - read these
before writing binary parsing code or templating user input into a
structured format.

## Bug 1: the byte offset that broke every output file

**Symptom:** output files were the right size but wouldn't play/parse -
`file` on the output reported `data` instead of the correct format.

**Protocol shape:** the server sent binary frames like
`[2 bytes: header length, big-endian][header text][\r\n][payload bytes]`.
`header_length` is measured from byte 0 of the *entire* message, prefix
included.

**The bug**, in essence:

```ts
// WRONG: prefix stripped before calling the parser, but header_length
// still measured from the original message including that prefix
const data = new Uint8Array(event.data);
const headerLength = (data[0] << 8) | data[1];
const { headers, body } = parseHeadersAndData(data.slice(2), headerLength);
// parseHeadersAndData internally does data.slice(headerLength + 2) -
// which now double-subtracts the 2-byte prefix
```

**The fix:** pass the untouched message into the parser, exactly matching
the reference implementation's indexing convention:

```ts
// RIGHT
const data = new Uint8Array(event.data);
const headerLength = (data[0] << 8) | data[1];
const { headers, body } = parseHeadersAndData(data, headerLength);
```

**The regression test** that actually catches this - captured one real
frame from the live service, and asserts on the *meaning* of the decoded
bytes, not just their presence:

```ts
const RAW_AUDIO_FRAME = new Uint8Array([ /* ...real captured bytes... */ ]);

it("extracts a body starting at the correct frame sync", () => {
  const headerLength = (RAW_AUDIO_FRAME[0] << 8) | RAW_AUDIO_FRAME[1];
  const { body } = parseHeadersAndData(RAW_AUDIO_FRAME, headerLength);
  expect(body[0]).toBe(0xff);
  expect(body[1]).toBe(0xf3); // MPEG frame sync - proves the bytes are valid
});
```

A test that only checks `body.length > 0` or "the file downloaded" would
never have caught this - the bug preserved size and produced
audio-shaped noise, just not valid audio.

## Bug 2: the safety check that silently ate ~12% of the input

**Symptom:** no crash, no error - just a fraction of input text silently
missing from the output, with nothing in the response indicating anything
was wrong.

**Setup:** text was chunked into ≤4096-byte pieces before being sent,
preferring to split on whitespace, falling back to a UTF-8-safe boundary,
then nudging the split point backward if it would land inside an XML
entity like `&amp;`.

**The bug:** if a long run of text had no whitespace *and* contained many
escaped `&` entities (every literal `&` becomes `&amp;` before chunking),
the entity-safety adjustment could walk its candidate split index all the
way back to 0. The caller's fallback logic for "no split point found"
(`splitAt > 0 ? splitAt : 1`) treated that 0 exactly the same as "give up,
drop one byte and retry" - which happened silently, every iteration, for
the whole problematic run:

```ts
// WRONG
splitAt = adjustSplitPointForXmlEntity(bytes, splitAt); // can degrade to 0
const chunk = bytes.slice(0, splitAt).trim();
if (chunk) chunks.push(chunk); // empty chunk silently discarded
bytes = bytes.slice(splitAt > 0 ? splitAt : 1); // silently drops 1 byte
```

**The fix:** only accept the adjustment if it doesn't degrade to a
degenerate value; otherwise keep the split point you already had
(splitting through the middle of an entity is harmless - it's just read as
literal text on both sides - but silently dropping data is not):

```ts
// RIGHT
const entityAdjusted = adjustSplitPointForXmlEntity(bytes, splitAt);
if (entityAdjusted > 0) {
  splitAt = entityAdjusted;
}
```

**The test that caught it** - the simplest, most literal check available,
and the one that's easy to skip because it feels too basic:

```ts
it("never drops characters, even with a long run of unterminated entities", () => {
  const text = "A".repeat(10) + "&amp".repeat(2000); // no closing ';', no spaces
  const chunks = splitTextByByteLength(text, 4096);
  expect(chunks.join("")).toBe(text); // literal round-trip check
});
```

The existing test suite already checked "no chunk exceeds the byte limit"
and "no chunk contains a dangling `&`" - both true, both passing, neither
one capable of catching data loss. The round-trip assertion is what
actually exposed the bug.

## Bug 3: the one escape() call we forgot

**Symptom:** an attacker-controlled field could break out of a templated
XML attribute and inject extra markup into a request forwarded to a
third-party service.

**The bug:** in a function building an SSML (XML) document, one
interpolated value was correctly escaped, and three others sitting right
next to it were not:

```ts
// WRONG - `text` escaped, `voice`/`pitch`/`rate`/`volume` are not
function buildSsml(text, opts) {
  return (
    `<speak ...>` +
    `<voice name='${opts.voice}'>` +               // unescaped
    `<prosody pitch='${opts.pitch}' rate='${opts.rate}' volume='${opts.volume}'>` + // unescaped
    text +                                          // already escaped upstream
    `</prosody></voice></speak>`
  );
}
```

A `voice` value like `en-US-AvaNeural'><voice name='other-voice` would
close the attribute early and inject a second `<voice>` element - the same
category of bug as SQL injection, just in XML instead of SQL.

**The fix** - apply the escaping helper that was already three lines away,
consistently, to every interpolation site in the function, not just the
one that was currently reachable by user input:

```ts
// RIGHT
function buildSsml(text, opts) {
  return (
    `<speak ...>` +
    `<voice name='${escapeXml(opts.voice)}'>` +
    `<prosody pitch='${escapeXml(opts.pitch)}' rate='${escapeXml(opts.rate)}' volume='${escapeXml(opts.volume)}'>` +
    text +
    `</prosody></voice></speak>`
  );
}
```

**The test:**

```ts
it("escapes attacker-controlled voice names so they cannot break out of the attribute", () => {
  const malicious = "en-US-AvaNeural'><voice name='en-US-GuyNeural";
  const ssml = buildSsml("hello", { voice: malicious, rate: "+0%", volume: "+0%", pitch: "+0Hz" });
  expect(ssml).not.toContain(`name='${malicious}'`);
  expect(ssml.match(/<voice /g)?.length).toBe(1); // only one real <voice> tag
});
```

Note two of the four fields (`pitch`, `rate`, `volume`) weren't actually
attacker-controlled at the time this was found - they were computed
internally. Escaping them anyway cost nothing and removed a landmine for
whoever wires up a "custom pitch" feature later and doesn't stop to check
which of the four sibling fields is the safe one.

## The pattern across all three

Each bug came from **locally-correct reasoning that was wrong in
combination**: two functions each correctly handling "the prefix" while
each assuming the other already had; a safety adjustment and its caller's
fallback each reasonable in isolation but mismatched at the degenerate
case; one interpolation site escaped while its identical neighbors weren't.
The fix in every case was to make the invariant impossible to violate by
accident (a guard, a shared helper applied uniformly, passing the
untouched buffer) rather than something a future reader has to remember.
