# Mediabunny Media Conversion API

The `Conversion` class provides a high-level, performant abstraction for converting media files (transmuxing, transcoding, trimming, resizing, cropping, rotating, resampling, filtering, and multi-bitrate generation).

---

## Basic Conversion Workflow

```ts
import {
  Input,
  Output,
  BlobSource,
  BufferTarget,
  Mp4OutputFormat,
  WebMOutputFormat,
  ALL_FORMATS,
  Conversion,
} from 'mediabunny';

// 1. Define Input Source and Formats
const input = new Input({
  source: new BlobSource(file), // File or Blob from browser input
  formats: ALL_FORMATS,
});

// 2. Define Output Format and Target
const output = new Output({
  format: new WebMOutputFormat(),
  target: new BufferTarget(),
});

// 3. Initialize & Validate Conversion
const conversion = await Conversion.init({ input, output });

if (!conversion.isValid) {
  console.warn('Conversion invalid due to discarded tracks:', conversion.discardedTracks);
  return;
}

// 4. Monitor Progress (0.0 to 1.0)
conversion.onProgress = (progress) => {
  console.log(`Conversion progress: ${(progress * 100).toFixed(1)}%`);
};

// 5. Execute Conversion
await conversion.execute();

// Final output buffer
const resultBuffer: ArrayBuffer = output.target.buffer;
```

---

## Video Transformation Options

Configure video handling via the `video` option in `Conversion.init()`:

```ts
const conversion = await Conversion.init({
  input,
  output,
  video: {
    // Discard all video tracks
    discard: false,

    // Dimension resizing & aspect ratio fitting
    width: 1280,
    height: 720,
    fit: 'contain', // 'fill' | 'contain' | 'cover'

    // Rotation (degrees clockwise: 0 | 90 | 180 | 270)
    rotate: 90,
    allowRotationMetadata: true, // Use container metadata rotation if supported

    // Cropping (applied post-rotation, pre-resizing)
    crop: { left: 0, top: 0, width: 1920, height: 1080 },

    // Frame rate adjustment in Hz
    frameRate: 30,

    // Codec & Quality / Bitrate
    codec: 'avc', // 'avc' | 'hevc' | 'vp8' | 'vp9' | 'av1' | 'prores'
    bitrate: 4_500_000, // Bits per second or QUALITY_LOW | QUALITY_MEDIUM | QUALITY_HIGH
    keyFrameInterval: 2, // Keyframe distance in seconds

    // Hardware acceleration strategy
    hardwareAcceleration: 'prefer-hardware', // 'no-preference' | 'prefer-hardware' | 'prefer-software'

    // Transparency handling
    alpha: 'discard', // 'discard' | 'keep'

    // Force transcoding even if input/output codecs match
    forceTranscode: false,

    // Custom frame processing callback (Canvas API or sample manipulation)
    process: async (sample) => {
      // Draw frame to canvas, add overlay/watermark/filters
      const canvas = new OffscreenCanvas(sample.displayWidth, sample.displayHeight);
      const ctx = canvas.getContext('2d')!;
      sample.draw(ctx, 0, 0);
      ctx.fillStyle = 'white';
      ctx.font = '24px sans-serif';
      ctx.fillText('Watermark', 20, 40);
      return canvas; // Returns CanvasImageSource or VideoSample or null to drop frame
    },
  },
});
```

---

## Audio Transformation Options

Configure audio handling via the `audio` option in `Conversion.init()`:

```ts
const conversion = await Conversion.init({
  input,
  output,
  audio: {
    // Discard all audio tracks
    discard: false,

    // Channel remixing (1 = mono, 2 = stereo, etc. Uses Web Audio API mixing matrix)
    numberOfChannels: 2,

    // Sample rate in Hz (e.g. 44100, 48000)
    sampleRate: 48000,

    // Codec & Quality / Bitrate
    codec: 'aac', // 'aac' | 'mp3' | 'opus' | 'flac' | 'ac3' | 'alaw' | 'ulaw' | 'pcm'
    bitrate: 192_000, // Bits per second or QUALITY_HIGH

    // Force transcode step
    forceTranscode: false,

    // Custom sample processing callback
    process: async (sample) => {
      // Modify audio sample data or return updated AudioSample or null to drop
      return sample;
    },
  },
});
```

---

## Track-Specific Options & Track Fan-Out

### Track-Specific Options (Dynamic Callbacks)
Instead of a static configuration object, pass an async function to configure tracks dynamically based on metadata:

```ts
const conversion = await Conversion.init({
  input,
  output,
  video: async (videoTrack) => {
    const width = await videoTrack.getDisplayWidth();
    // Keep width maxed at 1920
    return {
      width: Math.min(width, 1920),
      bitrate: width > 1280 ? 5_000_000 : 2_500_000,
    };
  },
  audio: async (audioTrack) => {
    // Drop all non-English audio tracks
    const lang = await audioTrack.getLanguageCode();
    if (lang !== 'eng' && lang !== 'und') {
      return { discard: true };
    }
    return { codec: 'aac', bitrate: 192_000 };
  },
});
```

### Track Fan-Out (Multi-Rendition Generation)
Return an array of option objects to produce multiple output tracks from a single input track (e.g., generating multi-bitrate streams for HLS/DASH):

```ts
import { Conversion, QUALITY_HIGH, QUALITY_MEDIUM, QUALITY_LOW } from 'mediabunny';

const conversion = await Conversion.init({
  input,
  output,
  video: [
    { height: 1080, bitrate: QUALITY_HIGH },
    { height: 720, bitrate: QUALITY_MEDIUM },
    { height: 480, bitrate: QUALITY_LOW },
  ],
});
```

---

## Trimming, Execution Control & Monitoring

### Trimming Media
Extract a precise subsegment by specifying start and end times in seconds:

```ts
const conversion = await Conversion.init({
  input,
  output,
  trim: {
    start: 10.5, // Start at 10.5 seconds
    end: 45.0,   // End at 45.0 seconds
  },
});
```

### Pausing, Resuming & Partial Execution

```ts
const controller = new AbortController();

// Execute partially until 15 seconds into the output file
await conversion.execute({
  until: 15.0,
  pauseSignal: controller.signal,
});

if (conversion.state === 'idle') {
  console.log('Conversion paused at 15s. Resuming execution...');
  await conversion.execute(); // Resume remaining conversion
}
```

### Canceling Execution

```ts
// Programmatically cancel ongoing conversion
await conversion.cancel();
```

---

## Quality Constants

Mediabunny exports predefined subjective quality levels for automated bitrate selection:

- `QUALITY_LOW`: Compact filesize, lower bitrate suitable for mobile previews.
- `QUALITY_MEDIUM`: Balanced default for general streaming and web distribution.
- `QUALITY_HIGH`: High quality with minimal compression artifacts.
