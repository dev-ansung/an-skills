#!/usr/bin/env node
/**
 * Example: Record Procedural Canvas / OffscreenCanvas Animation into Video
 * Usage:
 *   node record_canvas.js --output <output-video.mp4|webm> [--duration 2] [--fps 30]
 */

import {
  Output,
  FilePathTarget,
  Mp4OutputFormat,
  VideoSampleSource,
  VideoSample,
  QUALITY_HIGH,
} from 'mediabunny';
import { registerMediabunnyServer } from '@mediabunny/server';
import { resolve, dirname } from 'node:path';
import { mkdirSync } from 'node:fs';

registerMediabunnyServer();

function parseArgs() {
  const args = process.argv.slice(2);
  const options = {};
  for (let i = 0; i < args.length; i += 2) {
    const key = args[i].replace(/^--/, '');
    const value = args[i + 1];
    options[key] = value;
  }
  return options;
}

async function main() {
  const opts = parseArgs();
  if (!opts.output) {
    console.error('Usage: node record_canvas.js --output <output-video.mp4> [--duration 2] [--fps 30]');
    process.exit(1);
  }

  const outputPath = resolve(opts.output);
  const durationSec = opts.duration ? parseFloat(opts.duration) : 2.0;
  const fps = opts.fps ? parseInt(opts.fps, 10) : 30;
  const width = 640;
  const height = 360;

  mkdirSync(dirname(outputPath), { recursive: true });

  console.log(`Generating canvas animation video (${durationSec}s @ ${fps}fps) -> ${outputPath}...`);

  const output = new Output({
    format: new Mp4OutputFormat(),
    target: new FilePathTarget(outputPath),
  });

  const videoSource = new VideoSampleSource({
    codec: 'avc',
    width,
    height,
    bitrate: QUALITY_HIGH,
    frameRate: fps,
  });

  output.addVideoTrack(videoSource);
  await output.start();

  const totalFrames = Math.floor(durationSec * fps);

  for (let i = 0; i < totalFrames; i++) {
    const timestamp = i / fps;
    const duration = 1 / fps;

    const rgbaData = new Uint8Array(width * height * 4);
    const r = Math.floor((i / totalFrames) * 255);
    const g = 120;
    const b = Math.floor((1 - i / totalFrames) * 255);

    for (let p = 0; p < rgbaData.length; p += 4) {
      rgbaData[p] = r;
      rgbaData[p + 1] = g;
      rgbaData[p + 2] = b;
      rgbaData[p + 3] = 255;
    }

    const sample = new VideoSample(rgbaData, {
      format: 'RGBA',
      codedWidth: width,
      codedHeight: height,
      timestamp,
      duration,
    });

    await videoSource.add(sample);
  }

  await videoSource.close();
  await output.finalize();
  console.log(`Canvas animation recording saved -> ${outputPath}`);
}

main().catch((err) => {
  console.error('\nCanvas recording failed:', err);
  process.exit(1);
});
