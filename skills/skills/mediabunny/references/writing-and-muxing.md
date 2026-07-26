# Writing & Muxing Media Files with Mediabunny

Mediabunny enables low-level control over media multiplexing (muxing) and encoding, allowing you to configure video/audio encoders, write raw encoded packets or raw uncompressed samples, and target various output sinks (buffers, files, streams).

---

## Output Targets & Formats

An `Output` object binds an `OutputFormat` (container multiplexer) with a output data `Target`.

### Available Targets

- `BufferTarget`: Collects all output bytes into an `ArrayBuffer` in RAM. Access via `output.target.buffer`.
- `BlobTarget`: Creates a browser `Blob` object for file downloads. Access via `await output.target.getBlob()`.
- `StreamTarget(writableStream)`: Writes chunks to a Web `WritableStream<Uint8Array>`.
- `FilePathTarget(path)`: Writes output directly to disk (Server-side environments with `@mediabunny/server`).

### Available Output Formats

- `Mp4OutputFormat`: MP4 container (ISO BMFF). Supports AVC, HEVC, VP9, AV1, ProRes, AAC, MP3, Opus, FLAC, AC-3.
- `WebMOutputFormat`: WebM container. Supports VP8, VP9, AV1, Opus, Vorbis.
- `MkvOutputFormat`: Matroska container. Supports almost all video and audio codecs.
- `MovOutputFormat`: QuickTime Movie container.
- `FlacOutputFormat`: FLAC audio container.
- `Mp3OutputFormat`: MP3 audio container.
- `WavOutputFormat`: WAV audio container (uncompressed PCM/PCM-float).
- `OggOutputFormat`: Ogg audio container (Opus, Vorbis, FLAC).
- `AdtsOutputFormat`: ADTS AAC audio stream.
- `MpegTsOutputFormat`: MPEG Transport Stream (MPEG-TS).

---

## Low-Level Muxing Workflow (Adding Tracks & Encoding Samples)

```ts
import {
  Output,
  BufferTarget,
  Mp4OutputFormat,
  VideoSample,
  AudioSample,
  QUALITY_HIGH,
} from 'mediabunny';

// 1. Create Output with Format and Target
const output = new Output({
  format: new Mp4OutputFormat(),
  target: new BufferTarget(),
});

// 2. Add Video Track Config
const videoTrack = output.addVideoTrack({
  codec: 'avc',
  width: 1920,
  height: 1080,
  bitrate: 6_000_000,
  frameRate: 60,
  keyFrameInterval: 2, // GOP size: insert keyframe every 2s
});

// 3. Add Audio Track Config
const audioTrack = output.addAudioTrack({
  codec: 'aac',
  numberOfChannels: 2,
  sampleRate: 48000,
  bitrate: 192_000,
});

// 4. Start Muxer Engine
await output.start();

// 5. Add Samples (Video & Audio)
// Add video sample (e.g. from Canvas or WebCodecs)
await videoTrack.addSample(videoSample);

// Add audio sample (e.g. from Web Audio API or AudioBuffer)
await audioTrack.addSample(audioSample);

// 6. Finalize Container & Close Header/Index
await output.finalize();

// Access result
const finalMp4Buffer = output.target.buffer;
```

---

## Direct Packet Muxing (Transmuxing without Re-encoding)

When input packets are already encoded in a compatible codec, pass raw `EncodedPacket` objects directly to `addPacket()` to bypass re-encoding:

```ts
const output = new Output({
  format: new Mp4OutputFormat(),
  target: new BufferTarget(),
});

const videoTrack = output.addVideoTrack({
  codec: 'avc',
  width: 1280,
  height: 720,
});

await output.start();

// Mux raw packet directly from demuxer
for await (const packet of inputVideoTrack.getPackets()) {
  await videoTrack.addPacket(packet);
}

await output.finalize();
```

---

## Container Metadata Tags

Set container metadata tags before calling `output.start()`:

```ts
const output = new Output({
  format: new Mp4OutputFormat(),
  target: new BufferTarget(),
});

output.setMetadataTag('title', 'My Custom Video');
output.setMetadataTag('artist', 'Mediabunny Author');
output.setMetadataTag('comment', 'Encoded with Mediabunny');
```
