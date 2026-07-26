import { Output, FilePathTarget, Mp4OutputFormat, Mp3OutputFormat, CustomVideoSampleSource, CustomAudioSampleSource, VideoSample, AudioSample, QUALITY_HIGH } from 'mediabunny';
import { registerMediabunnyServer } from '@mediabunny/server';
import { resolve } from 'node:path';
import { mkdirSync } from 'node:fs';

registerMediabunnyServer();

const inputDir = resolve('../../../.artifacts/input');
mkdirSync(inputDir, { recursive: true });

async function generateSampleVideo() {
  const outputPath = resolve(inputDir, 'sample_video.mp4');
  console.log(`Generating sample video at ${outputPath}...`);

  const output = new Output({
    format: new Mp4OutputFormat(),
    target: new FilePathTarget(outputPath),
  });

  const width = 640;
  const height = 360;
  const fps = 30;
  const durationSec = 3;
  const totalFrames = fps * durationSec;

  let currentFrame = 0;
  const videoSource = new CustomVideoSampleSource({
    getNextSample: async () => {
      if (currentFrame >= totalFrames) return null;
      const i = currentFrame++;
      const timestamp = i / fps;
      const duration = 1 / fps;

      const rgbaData = new Uint8Array(width * height * 4);
      const r = Math.floor((i / totalFrames) * 255);
      const g = Math.floor((1 - i / totalFrames) * 255);
      const b = 180;

      for (let p = 0; p < rgbaData.length; p += 4) {
        rgbaData[p] = r;
        rgbaData[p + 1] = g;
        rgbaData[p + 2] = b;
        rgbaData[p + 3] = 255;
      }

      return new VideoSample(rgbaData, {
        format: 'RGBA',
        codedWidth: width,
        codedHeight: height,
        timestamp,
        duration,
      });
    },
  });

  output.addVideoTrack(videoSource, {
    codec: 'avc',
    width,
    height,
    bitrate: QUALITY_HIGH,
    frameRate: fps,
  });

  const sampleRate = 44100;
  const numSamples = sampleRate * durationSec;
  const leftChannel = new Float32Array(numSamples);
  const rightChannel = new Float32Array(numSamples);

  for (let s = 0; s < numSamples; s++) {
    const t = s / sampleRate;
    leftChannel[s] = Math.sin(2 * Math.PI * 440 * t) * 0.5;
    rightChannel[s] = Math.sin(2 * Math.PI * 880 * t) * 0.3;
  }

  let audioSent = false;
  const audioSource = new CustomAudioSampleSource({
    getNextSample: async () => {
      if (audioSent) return null;
      audioSent = true;
      return new AudioSample([leftChannel, rightChannel], {
        sampleRate,
        numberOfChannels: 2,
        timestamp: 0,
        duration: durationSec,
      });
    },
  });

  output.addAudioTrack(audioSource, {
    codec: 'aac',
    numberOfChannels: 2,
    sampleRate: 44100,
    bitrate: 128000,
  });

  await output.start();

  // Consume sources
  while (output.state === 'writing') {
    await new Promise(r => setTimeout(r, 50));
  }

  await output.finalize();
  console.log(`Sample video generated successfully: ${outputPath}`);
}

async function generateSampleAudio() {
  const outputPath = resolve(inputDir, 'sample_audio.mp3');
  console.log(`Generating sample audio at ${outputPath}...`);

  const output = new Output({
    format: new Mp3OutputFormat(),
    target: new FilePathTarget(outputPath),
  });

  const sampleRate = 44100;
  const durationSec = 3;
  const numSamples = sampleRate * durationSec;
  const left = new Float32Array(numSamples);
  const right = new Float32Array(numSamples);

  for (let s = 0; s < numSamples; s++) {
    const t = s / sampleRate;
    left[s] = Math.sin(2 * Math.PI * 523.25 * t) * 0.4;
    right[s] = Math.sin(2 * Math.PI * 659.25 * t) * 0.4;
  }

  let audioSent = false;
  const audioSource = new CustomAudioSampleSource({
    getNextSample: async () => {
      if (audioSent) return null;
      audioSent = true;
      return new AudioSample([left, right], {
        sampleRate,
        numberOfChannels: 2,
        timestamp: 0,
        duration: durationSec,
      });
    },
  });

  output.addAudioTrack(audioSource, {
    codec: 'mp3',
    numberOfChannels: 2,
    sampleRate: 44100,
    bitrate: 192000,
  });

  await output.start();
  await output.finalize();

  console.log(`Sample audio generated successfully: ${outputPath}`);
}

async function main() {
  await generateSampleVideo();
  await generateSampleAudio();
}

main().catch(err => {
  console.error('Failed to generate sample inputs:', err);
  process.exit(1);
});
