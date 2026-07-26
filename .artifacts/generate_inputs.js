import { Output, FilePathTarget, Mp4OutputFormat, Mp3OutputFormat, VideoSample, AudioSample, QUALITY_HIGH } from 'mediabunny';
import { registerMediabunnyServer } from '@mediabunny/server';
import { resolve } from 'node:path';

registerMediabunnyServer();

async function generateSampleVideo() {
  const outputPath = resolve('.artifacts/input/sample_video.mp4');
  console.log(`Generating sample video at ${outputPath}...`);

  const output = new Output({
    format: new Mp4OutputFormat(),
    target: new FilePathTarget(outputPath),
  });

  const videoTrack = output.addVideoTrack({
    codec: 'avc',
    width: 640,
    height: 360,
    bitrate: QUALITY_HIGH,
    frameRate: 30,
  });

  const audioTrack = output.addAudioTrack({
    codec: 'aac',
    numberOfChannels: 2,
    sampleRate: 44100,
    bitrate: 128000,
  });

  await output.start();

  const fps = 30;
  const durationSec = 3;
  const totalFrames = fps * durationSec;
  const width = 640;
  const height = 360;

  // Generate synthetic RGBA video frames
  for (let i = 0; i < totalFrames; i++) {
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

    const videoSample = new VideoSample(rgbaData, {
      format: 'RGBA',
      codedWidth: width,
      codedHeight: height,
      timestamp,
      duration,
    });

    await videoTrack.addSample(videoSample);
  }

  // Generate synthetic float32 stereo audio frames
  const sampleRate = 44100;
  const numSamples = sampleRate * durationSec;
  const leftChannel = new Float32Array(numSamples);
  const rightChannel = new Float32Array(numSamples);

  for (let s = 0; s < numSamples; s++) {
    const t = s / sampleRate;
    leftChannel[s] = Math.sin(2 * Math.PI * 440 * t) * 0.5; // 440 Hz A tone
    rightChannel[s] = Math.sin(2 * Math.PI * 880 * t) * 0.3; // 880 Hz A tone
  }

  const audioSample = new AudioSample([leftChannel, rightChannel], {
    sampleRate,
    numberOfChannels: 2,
    timestamp: 0,
    duration: durationSec,
  });

  await audioTrack.addSample(audioSample);
  await output.finalize();

  console.log(`Sample video generated: ${outputPath}`);
}

async function generateSampleAudio() {
  const outputPath = resolve('.artifacts/input/sample_audio.mp3');
  console.log(`Generating sample audio at ${outputPath}...`);

  const output = new Output({
    format: new Mp3OutputFormat(),
    target: new FilePathTarget(outputPath),
  });

  const audioTrack = output.addAudioTrack({
    codec: 'mp3',
    numberOfChannels: 2,
    sampleRate: 44100,
    bitrate: 192000,
  });

  await output.start();

  const sampleRate = 44100;
  const durationSec = 3;
  const numSamples = sampleRate * durationSec;
  const left = new Float32Array(numSamples);
  const right = new Float32Array(numSamples);

  for (let s = 0; s < numSamples; s++) {
    const t = s / sampleRate;
    left[s] = Math.sin(2 * Math.PI * 523.25 * t) * 0.4; // C5 tone
    right[s] = Math.sin(2 * Math.PI * 659.25 * t) * 0.4; // E5 tone
  }

  const audioSample = new AudioSample([left, right], {
    sampleRate,
    numberOfChannels: 2,
    timestamp: 0,
    duration: durationSec,
  });

  await audioTrack.addSample(audioSample);
  await output.finalize();

  console.log(`Sample audio generated: ${outputPath}`);
}

async function main() {
  await generateSampleVideo();
  await generateSampleAudio();
}

main().catch(err => {
  console.error('Failed to generate sample inputs:', err);
  process.exit(1);
});
