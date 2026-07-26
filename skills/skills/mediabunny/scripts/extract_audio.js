#!/usr/bin/env node
/**
 * Example: Extract Audio Track from Video File
 * Usage:
 *   node extract_audio.js --input <input-video> --output <output-audio.mp3|aac|flac|wav> [--acodec mp3|aac|flac|opus]
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
  FlacInputFormat,
  Mp3InputFormat,
  WaveInputFormat,
  OggInputFormat,
  Mp3OutputFormat,
  AdtsOutputFormat,
  FlacOutputFormat,
  WavOutputFormat,
} from 'mediabunny';
import { registerMediabunnyServer } from '@mediabunny/server';
import { resolve, extname, dirname } from 'node:path';
import { existsSync, readFileSync, mkdirSync } from 'node:fs';

registerMediabunnyServer();

const FILE_FORMATS = [
  new Mp4InputFormat(),
  new WebMInputFormat(),
  new MatroskaInputFormat(),
  new QuickTimeInputFormat(),
  new FlacInputFormat(),
  new Mp3InputFormat(),
  new WaveInputFormat(),
  new OggInputFormat(),
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

function getAudioOutputFormat(outputPath) {
  const ext = extname(outputPath).toLowerCase();
  switch (ext) {
    case '.mp3': return new Mp3OutputFormat();
    case '.aac': return new AdtsOutputFormat();
    case '.flac': return new FlacOutputFormat();
    case '.wav': return new WavOutputFormat();
    default:
      return new Mp3OutputFormat();
  }
}

async function main() {
  const opts = parseArgs();
  if (!opts.input || !opts.output) {
    console.error('Usage: node extract_audio.js --input <video-file> --output <audio-file.mp3|aac|flac|wav>');
    process.exit(1);
  }

  const inputPath = resolve(opts.input);
  const outputPath = resolve(opts.output);

  if (!existsSync(inputPath)) {
    console.error(`Error: File not found at ${inputPath}`);
    process.exit(1);
  }

  mkdirSync(dirname(outputPath), { recursive: true });

  console.log(`Extracting audio from ${inputPath} to ${outputPath}...`);

  const input = new Input({
    source: new BufferSource(readFileSync(inputPath)),
    formats: FILE_FORMATS,
  });

  const output = new Output({
    format: getAudioOutputFormat(outputPath),
    target: new FilePathTarget(outputPath),
  });

  const conversion = await Conversion.init({
    input,
    output,
    video: { discard: true },
    audio: { codec: opts.acodec },
  });

  conversion.onProgress = (progress) => {
    process.stdout.write(`Extracting audio... ${(progress * 100).toFixed(1)}%\r`);
  };

  await conversion.execute();
  console.log(`\nAudio extracted successfully -> ${outputPath}`);
}

main().catch((err) => {
  console.error('\nAudio extraction failed:', err);
  process.exit(1);
});
