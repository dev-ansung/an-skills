# Reading & Demuxing Media Files with Mediabunny

Mediabunny provides zero-copy demuxing and decoding pipelines, allowing you to extract metadata, demux raw encoded packets, decode audio/video samples, and generate video thumbnails directly in the browser or server environments.

---

## Input Sources & Formats

An `Input` object binds a data `Source` with a set of supported container `InputFormat`s.

### Available Data Sources

- `BlobSource(file)`: Wraps a browser `File` or `Blob` object.
- `UrlSource(url)`: Fetches data via HTTP (automatically uses `Range` header requests for random access).
- `BufferSource(arrayBuffer)`: Operates on in-memory `ArrayBuffer` or `Uint8Array`.
- `ReadableStreamSource(stream)`: Accepts web `ReadableStream<Uint8Array>` (append-only streaming input).

### Input Format Selection

Use individual format classes or pass `ALL_FORMATS` to auto-detect any supported media format:

```ts
import {
  Input,
  BlobSource,
  UrlSource,
  ALL_FORMATS,
  Mp4InputFormat,
  WebMInputFormat,
  MovInputFormat,
} from 'mediabunny';

// Auto-detect format from Blob
const input = new Input({
  source: new BlobSource(file),
  formats: ALL_FORMATS,
});

// Explicit formats for remote URL
const urlInput = new Input({
  source: new UrlSource('https://example.com/video.mp4'),
  formats: [new Mp4InputFormat(), new WebMInputFormat(), new MovInputFormat()],
});
```

---

## Inspecting Tracks & Metadata

```ts
// Retrieve all tracks from file
const tracks = await input.getTracks();

// Retrieve primary video and audio tracks
const videoTrack = await input.getPrimaryVideoTrack();
const audioTrack = await input.getPrimaryAudioTrack();

if (videoTrack) {
  const width = await videoTrack.getDisplayWidth();
  const height = await videoTrack.getDisplayHeight();
  const duration = await videoTrack.getDuration(); // seconds
  const codec = await videoTrack.getCodec();       // e.g. 'avc', 'vp9', 'hevc'
  const fps = await videoTrack.getFrameRate();     // Hz (may be estimated)
  const rotation = await videoTrack.getRotation(); // 0, 90, 180, 270 degrees

  console.log(`Video: ${width}x${height} @ ${fps}fps, Codec: ${codec}, Duration: ${duration}s`);
}

if (audioTrack) {
  const channels = await audioTrack.getNumberOfChannels();
  const sampleRate = await audioTrack.getSampleRate();
  const codec = await audioTrack.getCodec(); // e.g. 'aac', 'opus', 'flac'
  const lang = await audioTrack.getLanguageCode();

  console.log(`Audio: ${channels}ch @ ${sampleRate}Hz, Codec: ${codec}, Lang: ${lang}`);
}
```

---

## Demuxing Raw Encoded Packets (Zero-Decode)

If you only need raw compressed packets without decoding (e.g. transmuxing or saving raw bitstreams), use `getPackets()`:

```ts
const videoTrack = await input.getPrimaryVideoTrack();

if (videoTrack) {
  // Iterate through raw encoded packets (optionally bound by start/end times in seconds)
  for await (const packet of videoTrack.getPackets({ start: 0, end: 10 })) {
    console.log(`Packet type: ${packet.type}`); // 'key' | 'delta'
    console.log(`Timestamp: ${packet.timestamp}s, Duration: ${packet.duration}s`);
    console.log(`Data length: ${packet.data.byteLength} bytes`);
  }
}
```

---

## Decoding Samples (Video Frames & Audio Buffers)

To decode media into uncompressed frames or raw audio samples:

```ts
const videoTrack = await input.getPrimaryVideoTrack();

if (videoTrack) {
  for await (const sample of videoTrack.getSamples({ start: 5, end: 15 })) {
    // sample is a VideoSample wrapping a WebCodecs VideoFrame or software buffer
    console.log(`Decoded Frame TS: ${sample.timestamp}s, Size: ${sample.displayWidth}x${sample.displayHeight}`);
    
    // Always close samples when done to prevent GPU/RAM memory leaks
    sample.close();
  }
}
```

---

## Thumbnail Generation & Canvas/WebGL Rendering

### Drawing to 2D Canvas

```ts
const videoTrack = await input.getPrimaryVideoTrack();
const samples = videoTrack.getSamples({ start: 0 });

const firstSample = (await samples.next()).value;
if (firstSample) {
  const canvas = document.getElementById('preview-canvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d')!;
  
  // Render frame directly onto canvas context
  firstSample.draw(ctx, 0, 0, canvas.width, canvas.height);
  firstSample.close();
}
```

### Direct Blob/Image Export (Thumbnail creation)

```ts
const videoTrack = await input.getPrimaryVideoTrack();
for await (const sample of videoTrack.getSamples({ start: 10 })) {
  // Generate JPEG Blob directly from decoded VideoSample
  const thumbnailBlob = await sample.toBlob({ format: 'image/jpeg', quality: 0.85 });
  const thumbnailUrl = URL.createObjectURL(thumbnailBlob);
  
  // Set image source
  document.getElementById('thumbnail-img')!.setAttribute('src', thumbnailUrl);
  
  sample.close();
  break; // Stop after first frame
}
```

### WebGL Texture Upload

```ts
// VideoSample exposes the underlying VideoFrame for WebGL bindings
gl.texImage2D(
  gl.TEXTURE_2D,
  0,
  gl.RGBA,
  gl.RGBA,
  gl.UNSIGNED_BYTE,
  sample.videoFrame // WebCodecs VideoFrame or Canvas source
);
```
