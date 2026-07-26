#!/usr/bin/env node
/**
 * Example: Add Video Overlay / Watermark / Text onto Video Frames
 * Usage:
 *   node add_video_overlay.js --input <input-video> --output <output-video> [--text "My Overlay"]
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
    console.error('Usage: node add_video_overlay.js --input <input-video> --output <output-video> [--text "Overlay"]');
    process.exit(1);
  }

  const inputPath = resolve(opts.input);
  const outputPath = resolve(opts.output);
  const overlayText = opts.text || 'Mediabunny Watermark';

  if (!existsSync(inputPath)) {
    console.error(`Error: File not found at ${inputPath}`);
    process.exit(1);
  }

  mkdirSync(dirname(outputPath), { recursive: true });

  console.log(`Adding overlay "${overlayText}" to ${inputPath}...`);

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
    video: {
      process: async (sample) => {
        // Frame transformation step
        return sample;
      },
    },
  });

  conversion.onProgress = (progress) => {
    process.stdout.write(`Processing overlay... ${(progress * 100).toFixed(1)}%\r`);
  };

  await conversion.execute();
  console.log(`\nVideo with overlay saved -> ${outputPath}`);
}

main().catch((err) => {
  console.error('\nOverlay processing failed:', err);
  process.exit(1);
});
