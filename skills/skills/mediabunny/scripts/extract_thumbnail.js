#!/usr/bin/env node
/**
 * Mediabunny CLI Frame Thumbnail Extractor
 * Usage:
 *   node extract_thumbnail.js --input <video-file> --output <image-file> [--timestamp <seconds>]
 */

import {
  Input,
  BufferSource,
  VideoSampleSink,
  Mp4InputFormat,
  WebMInputFormat,
  MatroskaInputFormat,
  QuickTimeInputFormat,
} from 'mediabunny';
import { registerMediabunnyServer } from '@mediabunny/server';
import { resolve, dirname } from 'node:path';
import { existsSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';

registerMediabunnyServer();

const FILE_FORMATS = [
  new Mp4InputFormat(),
  new WebMInputFormat(),
  new MatroskaInputFormat(),
  new QuickTimeInputFormat(),
];

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
  if (!opts.input || !opts.output) {
    console.error('Usage: node extract_thumbnail.js --input <video-file> --output <image-file> [--timestamp <seconds>]');
    process.exit(1);
  }

  const inputPath = resolve(opts.input);
  const outputPath = resolve(opts.output);
  const timestamp = opts.timestamp ? parseFloat(opts.timestamp) : 0.0;

  if (!existsSync(inputPath)) {
    console.error(`Error: File not found at ${inputPath}`);
    process.exit(1);
  }

  mkdirSync(dirname(outputPath), { recursive: true });

  console.log(`Extracting frame at ${timestamp}s from ${inputPath}...`);

  const input = new Input({
    source: new BufferSource(readFileSync(inputPath)),
    formats: FILE_FORMATS,
  });

  const videoTrack = await input.getPrimaryVideoTrack();
  if (!videoTrack) {
    console.error('Error: No video track found in input file.');
    process.exit(1);
  }

  const sink = new VideoSampleSink(videoTrack);
  const sample = await sink.getSample(timestamp);

  if (!sample) {
    console.error(`Failed to extract frame at timestamp ${timestamp}s.`);
    process.exit(1);
  }

  const width = sample.displayWidth;
  const height = sample.displayHeight;
  const pixelBuffer = new Uint8Array(width * height * 4);
  await sample.copyTo(pixelBuffer, { format: 'RGBA' });

  writeFileSync(outputPath, Buffer.from(pixelBuffer));
  console.log(`Frame pixel data extracted successfully (${pixelBuffer.byteLength} bytes, ${width}x${height}) -> ${outputPath}`);
  sample.close();
}

main().catch((err) => {
  console.error('Thumbnail extraction failed:', err);
  process.exit(1);
});
