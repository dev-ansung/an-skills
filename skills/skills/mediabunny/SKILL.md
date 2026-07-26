---
name: mediabunny
description: High-performance JavaScript/TypeScript browser and server media processing library for reading, writing, converting, multiplexing (muxing), demultiplexing (demuxing), transcoding, and streaming video and audio files (MP4, WebM, MKV, MOV, AVI, FLAC, MP3, WAV, Ogg, HLS). Make sure to use this skill whenever the user mentions video or audio processing in JS/TS, browser media transcoding, WebCodecs, media container conversion, trimming, resizing, frame extraction, live stream capture, or server-side media processing with @mediabunny/server or @mediabunny extension packages, even if they don't explicitly say "mediabunny".
---

# Mediabunny Skill Guide

Mediabunny is a pure TypeScript, zero-dependency media toolkit designed for reading, writing, demuxing, muxing, and converting video and audio files in web browsers (via the WebCodecs API) and server environments (Node.js, Bun, Deno via `@mediabunny/server`).

---

## Core Architecture Overview

Mediabunny is structured around five core concepts:

1. **Sources & Inputs**: Read raw bytes from files, remote URLs, memory buffers, or streams (`BlobSource`, `UrlSource`, `BufferSource`, `ReadableStreamSource`) into format readers (`Mp4InputFormat`, `WebMInputFormat`, `HlsPlaylistInputFormat`, `ALL_FORMATS`).
2. **Targets & Outputs**: Write container files into memory, downloads, disk files, or streams (`BufferTarget`, `BlobTarget`, `FilePathTarget`, `StreamTarget`) using format writers (`Mp4OutputFormat`, `WebMOutputFormat`, `HlsPlaylistOutputFormat`).
3. **Conversion**: High-level API (`Conversion.init()`) orchestrating transmuxing, transcoding, resizing, rotation, cropping, trimming, frame rate adjustments, and audio resampling.
4. **Demuxing & Decoding**: Extract raw `EncodedPacket`s or uncompressed `VideoSample` / `AudioSample` objects from tracks.
5. **Live Sources & Sinks**: Connect Canvas elements, WebRTC `MediaStream`s, or Web Audio API nodes into encoding/decoding pipelines.

---

## Quick Start: Basic File Conversion

Converting a user-selected video file to WebM with audio resampling:

```ts
import {
  Input,
  Output,
  BlobSource,
  BufferTarget,
  WebMOutputFormat,
  ALL_FORMATS,
  Conversion,
  QUALITY_HIGH,
} from 'mediabunny';

// 1. Initialize Input from browser File
const input = new Input({
  source: new BlobSource(file),
  formats: ALL_FORMATS,
});

// 2. Initialize Output Format and Target
const output = new Output({
  format: new WebMOutputFormat(),
  target: new BufferTarget(),
});

// 3. Initialize Conversion with video/audio rules
const conversion = await Conversion.init({
  input,
  output,
  video: {
    width: 1280,
    height: 720,
    fit: 'contain',
    codec: 'vp9',
    bitrate: QUALITY_HIGH,
  },
  audio: {
    numberOfChannels: 2,
    sampleRate: 48000,
    codec: 'opus',
  },
});

// 4. Progress callback
conversion.onProgress = (progress) => {
  console.log(`Conversion progress: ${(progress * 100).toFixed(1)}%`);
};

// 5. Execute
await conversion.execute();
const outputBuffer: ArrayBuffer = output.target.buffer;
```

---

## Reference Guides Matrix

For detailed code patterns, API signatures, and advanced usage, read the relevant reference guide:

| Task / Domain | Reference File | Summary |
| :--- | :--- | :--- |
| **High-level File Conversion** | [conversion.md](file:///Users/an/Development/Sandbox/Claude/skills/an-skills/skills/skills/mediabunny/references/conversion.md) | Transmuxing, transcoding, video resize/crop/rotate, frame rate, audio remix/resample, trimming, progress, track fan-out. |
| **Reading & Demuxing** | [reading-and-demuxing.md](file:///Users/an/Development/Sandbox/Claude/skills/an-skills/skills/skills/mediabunny/references/reading-and-demuxing.md) | Data sources (`BlobSource`, `UrlSource`), metadata inspection, demuxing raw `EncodedPacket`s, decoding `VideoSample`/`AudioSample`, thumbnail generation, Canvas/WebGL. |
| **Writing & Muxing** | [writing-and-muxing.md](file:///Users/an/Development/Sandbox/Claude/skills/an-skills/skills/skills/mediabunny/references/writing-and-muxing.md) | Output targets (`BufferTarget`, `BlobTarget`, `StreamTarget`), container writers, adding tracks, muxing raw packets or samples, finalizing. |
| **HLS Streaming** | [hls.md](file:///Users/an/Development/Sandbox/Claude/skills/an-skills/skills/skills/mediabunny/references/hls.md) | Reading & writing HTTP Live Streaming (`.m3u8`), fMP4/TS segmenting, multi-rendition HLS variant playlist generation. |
| **Live Sources & Sinks** | [sources-and-sinks.md](file:///Users/an/Development/Sandbox/Claude/skills/an-skills/skills/skills/mediabunny/references/sources-and-sinks.md) | Canvas animation recording (`CanvasVideoSampleSource`), webcam/screen recording (`MediaStreamVideoSampleSource`), Web Audio API synth recording, speaker/canvas playback sinks. |
| **Server & WASM Extensions** | [extensions-and-server.md](file:///Users/an/Development/Sandbox/Claude/skills/an-skills/skills/skills/mediabunny/references/extensions-and-server.md) | `@mediabunny/server` (Node/Bun/Deno NodeAV polyfill), hardware acceleration, WASM extension coders (`mp3-encoder`, `flac-encoder`, `aac-encoder`, `ac3`, `prores`). |

---

## Technical Decision Matrix for Common Tasks

```
What is your media task?
├─ Convert / Compress / Transcode media files?
│  └─ Use Conversion.init({ input, output, video, audio, trim }) -> See conversion.md
├─ Extract Frame / Generate Video Thumbnail?
│  └─ Read track via getSamples() -> sample.toBlob({ format: 'image/jpeg' }) -> See reading-and-demuxing.md
├─ Record Canvas / OffscreenCanvas Animation to Video?
│  └─ Use CanvasVideoSampleSource -> Output -> See sources-and-sinks.md
├─ Record Webcam / Screen Share / Microphone?
│  └─ Use MediaStreamVideoSampleSource / MediaStreamAudioSampleSource -> See sources-and-sinks.md
├─ Stream / Generate HLS (.m3u8 & .m4s / .ts segments)?
│  └─ Use HlsPlaylistOutputFormat -> See hls.md
├─ Run inside Node.js, Bun, or Deno?
│  └─ Call registerMediabunnyServer() from @mediabunny/server -> See extensions-and-server.md
└─ Browser missing MP3 / FLAC / AAC / AC3 / ProRes encoder/decoder?
   └─ Register extension coders from @mediabunny/* -> See extensions-and-server.md
```

---

## Supported Codecs & Container Formats

### Video Codecs
- `avc` (H.264), `hevc` (H.265), `vp8`, `vp9`, `av1`, `prores` (Apple ProRes via `@mediabunny/prores`).

### Audio Codecs
- `aac`, `mp3`, `opus`, `vorbis`, `flac`, `ac3` / `eac3` (Dolby Digital via `@mediabunny/ac3`), `alaw`, `ulaw`, `pcm`.

### Container Formats
- MP4 (`Mp4InputFormat`, `Mp4OutputFormat`)
- WebM (`WebMInputFormat`, `WebMOutputFormat`)
- Matroska MKV (`MkvInputFormat`, `MkvOutputFormat`)
- QuickTime MOV (`MovInputFormat`, `MovOutputFormat`)
- AVI (`AviInputFormat`, `AviOutputFormat`)
- FLAC (`FlacInputFormat`, `FlacOutputFormat`)
- MP3 (`Mp3InputFormat`, `Mp3OutputFormat`)
- WAV (`WavInputFormat`, `WavOutputFormat`)
- Ogg (`OggInputFormat`, `OggOutputFormat`)
- ADTS AAC (`AdtsInputFormat`, `AdtsOutputFormat`)
- MPEG-TS (`MpegTsInputFormat`, `MpegTsOutputFormat`)
- HLS Playlist (`HlsPlaylistInputFormat`, `HlsPlaylistOutputFormat`)

---

## Extension Registration Pattern

Always check native browser support before falling back to WASM extension coders:

```ts
import { canEncodeAudio } from 'mediabunny';
import { registerMp3Encoder } from '@mediabunny/mp3-encoder';

if (!(await canEncodeAudio('mp3'))) {
  registerMp3Encoder();
}
```

---

## Bundled CLI Helper Scripts

This skill includes 8 ready-to-run Node.js executable scripts under `scripts/` powered by `@mediabunny/server`:

| Example Script | Command | Purpose |
| :--- | :--- | :--- |
| `read_metadata.js` | `node scripts/read_metadata.js <file>` | Inspect media tracks, codecs, resolution, frame rate, sample rate, channels, and duration. |
| `convert_media.js` | `node scripts/convert_media.js --input <in> --output <out> [opts]` | Transmux & transcode media files (MP4, WebM, MKV, MOV, FLAC, MP3, WAV) with custom bitrates. |
| `extract_audio.js` | `node scripts/extract_audio.js --input <vid> --output <aud.mp3>` | Extract raw audio track from video file to MP3, AAC, FLAC, or WAV. |
| `extract_thumbnail.js` | `node scripts/extract_thumbnail.js --input <vid> --output <img.raw> [--timestamp N]` | Extract frame thumbnail pixel buffer at a timestamp. |
| `add_video_overlay.js` | `node scripts/add_video_overlay.js --input <in> --output <out> [--text "Text"]` | Add watermark / logo / text overlay to video frames during conversion using Canvas API. |
| `record_canvas.js` | `node scripts/record_canvas.js --output <out.mp4> [--duration 5]` | Record procedural Canvas / OffscreenCanvas animation into a video file. |
| `hls_segmentation.js` | `node scripts/hls_segmentation.js --input <vid> --output-dir <folder>` | Package media into multi-bitrate HLS adaptive stream (`master.m3u8` + segments). |
| `server_compression.js` | `node scripts/server_compression.js --input <in> --output <out>` | Server-side media compression and HTTP stream processing via `@mediabunny/server`. |



