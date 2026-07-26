#!/usr/bin/env node
/**
 * Example: Server-Side Media Compression & Pipelined Stream Processing
 * Usage:
 *   node server_compression.js --input <large-video> --output <compressed-video> [--max-height 720]
 */

import {
  Input,
  Output,
  Conversion,
  BufferSource,
  FilePathTarget,
  Mp4InputFormat,
  WebMInputFormat,
  MatroskaInputFormat,
  QuickTimeInputFormat,
  Mp4OutputFormat,
  QUALITY_MEDIUM,
} from 'mediabunny';
import { registerMediabunnyServer } from '@mediabunny/server';
import { resolve, dirname } from 'node:path';
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
  if (!opts.input || !opts.output) {
    console.error('Usage: node server_compression.js --input <input-video> --output <compressed-video>');
    process.exit(1);
  }

  const inputPath = resolve(opts.input);
  const outputPath = resolve(opts.output);
  const maxHeight = opts['max-height'] ? parseInt(opts['max-height'], 10) : 720;

  if (!existsSync(inputPath)) {
    console.error(`Error: File not found at ${inputPath}`);
    process.exit(1);
  }

  mkdirSync(dirname(outputPath), { recursive: true });

  console.log(`Server media compression: ${inputPath} -> ${outputPath} (Max Height: ${maxHeight}p)...`);

  const input = new Input({
    source: new BufferSource(readFileSync(inputPath)),
    formats: FILE_FORMATS,
  });

  const output = new Output({
    format: new Mp4OutputFormat(),
    target: new FilePathTarget(outputPath),
  });

  const conversion = await Conversion.init({
    input,
    output,
    video: async (track) => ({
      codec: 'avc',
      height: Math.min(maxHeight, await track.getDisplayHeight()),
      bitrate: QUALITY_MEDIUM,
    }),
    audio: { codec: 'aac', bitrate: 128_000 },
  });

  conversion.onProgress = (p) => {
    process.stdout.write(`Compressing... ${(p * 100).toFixed(1)}%\r`);
  };

  const startTime = Date.now();
  await conversion.execute();
  console.log(`\nCompression completed in ${((Date.now() - startTime) / 1000).toFixed(2)}s -> ${outputPath}`);
}

main().catch((err) => {
  console.error('\nServer compression failed:', err);
  process.exit(1);
});
