---
name: cloudflare-quickstart
description: Personal end-to-end playbook for scaffolding, testing, and shipping a Cloudflare Worker project (TypeScript) from scratch through to a custom domain in production. Use whenever starting a new Worker project, wiring up @cloudflare/vitest-pool-workers tests, adding a static demo page alongside an API Worker, binding a custom domain, or porting an external protocol/service into a Worker. Distilled from actually building and deploying a production Worker (tts-flared) - captures the specific gotchas hit along the way (workers.dev silently disabling itself, vitest-pool-workers API churn, binary protocol off-by-N bugs) that the general cloudflare skill doesn't call out as lessons.
---

# Cloudflare Worker Playbook

A fast-start path for building a real Cloudflare Worker project - not a
reference of every Workers feature (see the `cloudflare` skill for that),
but the specific sequence of decisions and gotchas that came up building
and shipping one end to end.

Use this alongside the `cloudflare` skill: reach for `cloudflare` when you
need API/config reference detail, reach for this when you're deciding
*what to actually do next* in a real project.

## The shape of a project

```
my-worker/
├── wrangler.jsonc       # name, main, compatibility_date, assets, routes
├── package.json         # scripts: dev, deploy, typecheck, test
├── tsconfig.json
├── src/
│   ├── index.ts         # fetch handler, routing, auth
│   └── *.ts             # core logic, kept separate from the HTTP layer
├── test/
│   ├── *.test.ts        # unit tests for pure functions
│   └── integration.test.ts  # end-to-end tests via SELF.fetch()
├── public/              # optional: static assets (demo page, etc.)
│   └── index.html
├── .dev.vars.example    # documents required local secrets
└── .gitignore           # .dev.vars, .wrangler/, node_modules/, *.mp3 etc.
```

Keep the core logic (protocol/business logic) in its own module, separate
from the HTTP routing module. This mattered in practice: it let unit tests
call internal functions directly (`parseHeadersAndData`, `splitTextByByteLength`)
without going through a full HTTP round-trip, which is what actually caught
the bugs described below.

## Scaffolding decisions

- **TypeScript over other options by default.** It's the lowest-risk,
  best-supported path for Workers, has full type coverage via
  `@cloudflare/workers-types`, and matches the runtime APIs directly (no
  extra binding layer to reason about).
- **Pin `@cloudflare/workers-types` to the version wrangler actually wants.**
  Newer wrangler versions can require a workers-types major version bump
  (e.g. v4 -> v5). If `npm install` throws an `ERESOLVE` peer dependency
  conflict, check what version wrangler's `package.json` declares as its
  peer dependency and match it - don't just force-install with
  `--legacy-peer-deps`.
- **`tsconfig.json`**: target/lib `ES2022`, `moduleResolution: "Bundler"`,
  `types: ["@cloudflare/workers-types"]`, `noUncheckedIndexedAccess: true`
  (Workers code touches raw bytes and arrays constantly - this catches a
  real class of bugs at compile time).

## Testing with @cloudflare/vitest-pool-workers

This package's config API has changed shape across versions - don't trust
older tutorials or your own training data on the exact config shape.
**Check the installed version's actual exports before writing config**:

```bash
grep -A5 '"exports"' node_modules/@cloudflare/vitest-pool-workers/package.json
```

At the time this was learned, the config helper had moved from a
`defineWorkersConfig` export under a `/config` subpath to a `cloudflareTest`
Vite plugin exported from the package root:

```ts
// vitest.config.ts
import { defineConfig } from "vitest/config";
import { cloudflareTest } from "@cloudflare/vitest-pool-workers";

export default defineConfig({
  plugins: [
    cloudflareTest({
      wrangler: { configPath: "./wrangler.jsonc" },
      miniflare: { bindings: { API_KEY: "test-api-key" } },
    }),
  ],
});
```

If that exact shape has drifted again by the time you read this, that's
the point of the lesson: **read `node_modules/<package>/package.json`'s
`exports` field and the type definitions directly, rather than assuming a
config shape from memory or an old tutorial.**

Also: Vitest 4 changed the `it()`/`test()` signature. Options now go as the
**second** argument, not the third:

```ts
// Vitest 4+
it("name", { timeout: 20000 }, async () => { ... });
// not: it("name", async () => {...}, { timeout: 20000 })
```

**Write both unit tests and integration tests.** Unit tests call internal
functions directly and are what actually catch subtle logic bugs (see
below). Integration tests use `SELF.fetch()` from `cloudflare:test` to hit
the real `fetch` handler end-to-end, including real outbound network calls
if the Worker makes any - this is the only way to verify the whole request
lifecycle (auth, routing, error responses) actually works together.

```ts
import { SELF } from "cloudflare:test";

const res = await SELF.fetch("https://example.com/v1/whatever", {
  method: "POST",
  headers: { Authorization: "Bearer test-api-key" },
  body: JSON.stringify({ ... }),
});
expect(res.status).toBe(200);
```

## Serving a static page alongside an API Worker

To serve a static HTML/JS page from the same Worker that also handles an
authenticated API, use Cloudflare's native Assets binding with
`run_worker_first` scoped to only the API paths:

```jsonc
// wrangler.jsonc
"assets": {
  "directory": "./public",
  "run_worker_first": ["/v1/*"],
  "not_found_handling": "none"
}
```

This routes `/v1/*` through your `fetch()` handler (so auth logic there
still applies), while everything else - `/`, static assets - is served
directly by the Asset Worker, **completely bypassing your `fetch()` handler
and its auth checks**. This is the correct behavior for "public demo page,
gated API," but confirm that's actually what you want: anything not
matched by `run_worker_first` gets no auth at all, by design.

## Custom domains

Binding a domain you own to a Worker is a `routes` entry in `wrangler.jsonc`,
not a manual DNS record you create separately (Cloudflare manages the DNS +
SSL automatically when the zone is on the same account):

```jsonc
"routes": [
  { "pattern": "your-subdomain.yourdomain.com", "custom_domain": true }
]
```

**Gotcha: adding any `routes` entry disables the `workers.dev` subdomain by
default.** If you had `my-worker.your-account.workers.dev` working before,
it silently stops resolving (404) the moment you deploy with a custom
domain route, unless you explicitly re-add `"workers_dev": true` (and
usually you don't want both - just update any docs/scripts that reference
the old URL).

**Gotcha: a 403 with `cf-mitigated: challenge` right after wiring a custom
domain onto a zone that previously hosted something else** is very likely
a leftover zone-level security setting (Bot Fight Mode, Security Level,
or a WAF rule) from whatever was there before - not a problem with the
Worker or the route config. Test with a real browser (or at least a
browser-like `User-Agent` header) before concluding the deploy is broken;
plain `curl` with no user agent is exactly the kind of request bot-fight
rules are designed to block.

## The deploy/verify loop

Don't just deploy and assume it worked - the specific verification pattern
that caught real issues in practice:

1. `wrangler dev` locally first. Confirm the specific behavior you changed
   (a new route, an auth change, a bug fix) actually works locally - it's
   much faster to iterate here than on every deploy.
2. `wrangler deploy`.
3. **Immediately re-test against the live URL** with the same request you
   tested locally - don't assume "it worked locally" transfers automatically.
   A fresh deploy can take a few seconds to propagate; a transient error
   right after deploying is often just propagation lag, not a real bug -
   redeploy or wait a few seconds and recheck before treating it as broken.
4. If a secret is involved (`wrangler secret put API_KEY`), remember
   Cloudflare secrets are **write-only** - you can't retrieve the value
   later, only rotate it. Save it somewhere the moment you set it.

## Porting an external protocol or service into a Worker

If the task involves reimplementing a wire protocol from a reference
implementation in another language (this is where the deepest bugs live):

- **Copy the reference implementation's exact byte/offset arithmetic - do
  not "clean it up" while porting.** If the reference does something that
  looks redundant or oddly specific (e.g. computing a length from the full
  message including a prefix, rather than a pre-sliced one), that
  specificity is almost always load-bearing. A `data.slice(2)` done "for
  clarity" before calling a function that itself assumes the 2 bytes are
  still there is exactly how you get a bug that's invisible on casual
  reading but corrupts every output.
- **Test against real captured bytes, not synthetic data.** Generate one
  real request/response using the reference implementation (or a working
  client), save the raw bytes, and write a unit test that runs your ported
  parsing function against those exact bytes with an assertion on the
  *meaning* of the output (e.g. "the decoded audio starts with the correct
  MPEG frame sync bytes"), not just its shape (e.g. "the output is
  non-empty" or "roughly the right size"). A test that only checks size or
  crash-vs-no-crash will not catch a bug that corrupts content while
  preserving length.
- **When a "safety" adjustment inside a loop can degrade to a degenerate
  value (0, empty, null), check what the calling code does with that
  degenerate value before trusting the adjustment.** A boundary-safety
  check that can walk an index back to 0 under some input, combined with a
  caller whose fallback for "0" means something different ("no split point
  found" vs. "give up and drop a byte"), is a specific, repeatable shape of
  bug: silent, gradual data loss that produces output which is *almost*
  correct rather than obviously broken. It is much harder to catch by
  reading the code than by writing a literal round-trip test
  (`expect(reassembled).toBe(original)`).
- **Escape every interpolated value at a structured-format boundary
  consistently, not selectively.** If one field going into a templated
  XML/HTML/SQL/shell string gets escaped and a structurally identical
  field two lines below doesn't, that's not a one-off oversight to fix in
  isolation - audit every interpolation site in that function for the same
  helper call, since the same helper being available nearby is exactly
  what makes it easy to assume (wrongly) that "the important one" is
  already covered.

See `references/three-bugs-case-study.md` for the full worked examples of
all three of the bugs above, including the actual before/after code and
the exact regression tests that caught them.

## Writing it up

If the project is public-facing (a portfolio piece, an open-source repo),
consider writing up interesting bugs found along the way as short,
standalone technical posts - not a changelog, but the reusable lesson each
bug teaches. Each post should stand alone: its own intro, its own context,
its own lesson, no shared "part 3 of 3" framing that requires reading the
others first.
