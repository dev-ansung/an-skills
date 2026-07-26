#!/usr/bin/env node
/**
 * Example: Package Media File into Segmented HLS Stream (.m3u8 & segments)
 * Usage:
 *   node hls_segmentation.js --input <input-video> --output-dir <hls-output-folder> [--duration 4]
 */

import {
  Input,
  Output,
  BufferSource,
  Mp4InputFormat,
  WebMInputFormat,
  MatroskaInputFormat,
  QuickTimeInputFormat,
  HlsOutputFormat,
  Mp4OutputFormat,
  PathedTarget,
  FilePathTarget,
  Conversion,
  QUALITY_HIGH,
  QUALITY_MEDIUM,
} from 'mediabunny';
import { registerMediabunnyServer } from '@mediabunny/server';
import { resolve, join } from 'node:path';
import { existsSync, readFileSync, mkdirSync } from 'node:fs';

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
  if (!opts.input || !opts['output-dir']) {
    console.error('Usage: node hls_segmentation.js --input <input-video> --output-dir <hls-output-folder>');
    process.exit(1);
  }

  const inputPath = resolve(opts.input);
  const outputDir = resolve(opts['output-dir']);
  const duration = opts.duration ? parseFloat(opts.duration) : 4.0;

  if (!existsSync(inputPath)) {
    console.error(`Error: File not found at ${inputPath}`);
    process.exit(1);
  }

  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
  }

  console.log(`Packaging HLS stream into ${outputDir}...`);

  const input = new Input({
    source: new BufferSource(readFileSync(inputPath)),
    formats: FILE_FORMATS,
  });

  const hlsFormat = new HlsOutputFormat({
    targetSegmentDuration: duration,
    segmentFormat: new Mp4OutputFormat(),
  });

  const target = new PathedTarget('master.m3u8', (rel) => {
    const relPath = typeof rel === 'string' ? rel : (rel.path || rel.filename || String(rel));
    const fullPath = join(outputDir, relPath);
    mkdirSync(resolve(fullPath, '..'), { recursive: true });
    return new FilePathTarget(fullPath);
  });

  const output = new Output({
    format: hlsFormat,
    target,
  });

  const conversion = await Conversion.init({
    input,
    output,
    video: [
      { height: 720, bitrate: QUALITY_HIGH },
      { height: 480, bitrate: QUALITY_MEDIUM },
    ],
    audio: { codec: 'aac', bitrate: 128_000 },
  });

  conversion.onProgress = (p) => {
    process.stdout.write(`Segmenting HLS... ${(p * 100).toFixed(1)}%\r`);
  };

  await conversion.execute();
  console.log(`\nHLS packaging complete! Master playlist created at: ${join(outputDir, 'master.m3u8')}`);
}

main().catch((err) => {
  console.error('\nHLS packaging failed:', err);
  process.exit(1);
});
