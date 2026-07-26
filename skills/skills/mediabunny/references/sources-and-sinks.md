# Live Media Sources & Sinks in Mediabunny

Mediabunny provides specialized sources and sinks to connect live browser APIs (HTML Canvas, WebRTC MediaStream, Web Audio API, `<video>` / `<audio>` elements) directly into media encoding, decoding, and playback pipelines.

---

## Live Video Sample Sources

### 1. CanvasVideoSampleSource (Canvas Recording to Video File)

Capture real-time or offscreen Canvas animations directly into an MP4/WebM output track:

```ts
import {
  Output,
  BufferTarget,
  WebMOutputFormat,
  CanvasVideoSampleSource,
  QUALITY_HIGH,
} from 'mediabunny';

const canvas = document.getElementById('my-canvas') as HTMLCanvasElement;

const output = new Output({
  format: new WebMOutputFormat(),
  target: new BufferTarget(),
});

// Wrap canvas into a video source emitting 60 FPS frames
const videoSource = new CanvasVideoSampleSource(canvas, { frameRate: 60 });

const videoTrack = output.addVideoTrack({
  codec: 'vp9',
  width: canvas.width,
  height: canvas.height,
  bitrate: QUALITY_HIGH,
  frameRate: 60,
});

await output.start();

// Animation recording loop
function renderFrame(timestampMs: number) {
  // Draw graphics on canvas
  drawGraphics(timestampMs);

  // Push current canvas frame to video track
  videoSource.captureFrame(timestampMs / 1000);
}

// When finished recording:
await videoSource.close();
await output.finalize();
const recordedBlob = output.target.buffer;
```

### 2. MediaStreamVideoSampleSource (Webcam / Screen Recording)

Record live webcam or desktop screen capture:

```ts
import { MediaStreamVideoSampleSource, Output, Mp4OutputFormat, BufferTarget } from 'mediabunny';

const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
const videoTrackFromStream = stream.getVideoTracks()[0];

const videoSource = new MediaStreamVideoSampleSource(videoTrackFromStream);

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

// Connect source stream to track
for await (const sample of videoSource.getSamples()) {
  await videoTrack.addSample(sample);
}
```

---

## Live Audio Sample Sources

### 1. WebAudioAudioSampleSource (Synthesized / Web Audio Graph Recording)

Record Web Audio API synthesizers, node graphs, or audio effects:

```ts
import { WebAudioAudioSampleSource, Output, Mp3OutputFormat, BufferTarget } from 'mediabunny';

const audioCtx = new AudioContext();
const oscillator = audioCtx.createOscillator();
oscillator.type = 'sine';
oscillator.frequency.value = 440;

const audioSource = new WebAudioAudioSampleSource(oscillator, {
  audioContext: audioCtx,
  numberOfChannels: 2,
  sampleRate: audioCtx.sampleRate,
});

const output = new Output({
  format: new Mp3OutputFormat(),
  target: new BufferTarget(),
});

const audioTrack = output.addAudioTrack({
  codec: 'mp3',
  numberOfChannels: 2,
  sampleRate: audioCtx.sampleRate,
  bitrate: 192_000,
});

await output.start();
oscillator.start();

// Capture 3 seconds of synthesized audio
for await (const sample of audioSource.getSamples({ duration: 3.0 })) {
  await audioTrack.addSample(sample);
}

oscillator.stop();
await output.finalize();
```

---

## Media Sinks (Playback & Custom Rendering)

### 1. AudioContextAudioSampleSink (Live Web Audio Speaker Output)

Play decoded `AudioSample` stream through browser speakers without needing an HTML `<audio>` tag:

```ts
import { AudioContextAudioSampleSink } from 'mediabunny';

const audioCtx = new AudioContext();
const audioSink = new AudioContextAudioSampleSink(audioCtx);

const audioTrack = await input.getPrimaryAudioTrack();

for await (const sample of audioTrack!.getSamples()) {
  // Push decoded samples into Web Audio speaker sink
  await audioSink.write(sample);
}
```

### 2. CanvasVideoSampleSink (Canvas Video Player)

Render decoded video samples directly onto HTML canvas:

```ts
import { CanvasVideoSampleSink } from 'mediabunny';

const canvas = document.getElementById('player-canvas') as HTMLCanvasElement;
const videoSink = new CanvasVideoSampleSink(canvas);

const videoTrack = await input.getPrimaryVideoTrack();

for await (const sample of videoTrack!.getSamples()) {
  await videoSink.write(sample);
  sample.close();
}
```
