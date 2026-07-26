#!/usr/bin/env node
/**
 * Example: Convert / Transcode / Transmux Media File
 * Usage:
 *   node convert_media.js --input <input-file> --output <output-file> [options]
 *
 * Options:
 *   --width <number>         Target video width
 *   --height <number>        Target video height
 *   --fit <fill|contain|cover> Fitting mode
 *   --vcodec <avc|hevc|vp9|av1|prores> Video codec
 *   --acodec <aac|mp3|opus|flac|pcm> Audio codec
 *   --vbitrate <number>      Video bitrate in bps
 *   --abitrate <number>      Audio bitrate in bps
 *   --fps <number>           Frame rate in Hz
 *   --trim-start <seconds>   Trim start time
 *   --trim-end <seconds>     Trim end time
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
  Mp4OutputFormat,
  WebMOutputFormat,
  MkvOutputFormat,
  MovOutputFormat,
  FlacOutputFormat,
  Mp3OutputFormat,
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

function getOutputFormat(outputPath) {
  const ext = extname(outputPath).toLowerCase();
  switch (ext) {
    case '.mp4': return new Mp4OutputFormat();
    case '.webm': return new WebMOutputFormat();
    case '.mkv': return new MkvOutputFormat();
    case '.mov': return new MovOutputFormat();
    case '.flac': return new FlacOutputFormat();
    case '.mp3': return new Mp3OutputFormat();
    case '.wav': return new WavOutputFormat();
    default:
      return new Mp4OutputFormat();
  }
}

async function main() {
  const opts = parseArgs();
  if (!opts.input || !opts.output) {
    console.error('Usage: node convert_media.js --input <input-file> --output <output-file> [options]');
    process.exit(1);
  }

  const inputPath = resolve(opts.input);
  const outputPath = resolve(opts.output);

  if (!existsSync(inputPath)) {
    console.error(`Error: File not found at ${inputPath}`);
    process.exit(1);
  }

  mkdirSync(dirname(outputPath), { recursive: true });

  console.log(`Converting: ${inputPath} -> ${outputPath}`);

  const input = new Input({
    source: new BufferSource(readFileSync(inputPath)),
    formats: FILE_FORMATS,
  });

  const output = new Output({
    format: getOutputFormat(outputPath),
    target: new FilePathTarget(outputPath),
  });

  const videoOpts = {};
  if (opts.width) videoOpts.width = parseInt(opts.width, 10);
  if (opts.height) videoOpts.height = parseInt(opts.height, 10);
  if (opts.fit) videoOpts.fit = opts.fit;
  if (opts.vcodec) videoOpts.codec = opts.vcodec;
  if (opts.vbitrate) videoOpts.bitrate = parseInt(opts.vbitrate, 10);
  if (opts.fps) videoOpts.frameRate = parseFloat(opts.fps);

  const audioOpts = {};
  if (opts.acodec) audioOpts.codec = opts.acodec;
  if (opts.abitrate) audioOpts.bitrate = parseInt(opts.abitrate, 10);

  const trimOpts = {};
  if (opts['trim-start']) trimOpts.start = parseFloat(opts['trim-start']);
  if (opts['trim-end']) trimOpts.end = parseFloat(opts['trim-end']);

  const conversion = await Conversion.init({
    input,
    output,
    video: Object.keys(videoOpts).length > 0 ? videoOpts : undefined,
    audio: Object.keys(audioOpts).length > 0 ? audioOpts : undefined,
    trim: Object.keys(trimOpts).length > 0 ? trimOpts : undefined,
  });

  conversion.onProgress = (progress) => {
    process.stdout.write(`Converting... ${(progress * 100).toFixed(1)}%\r`);
  };

  const start = Date.now();
  await conversion.execute();
  console.log(`\nComplete in ${((Date.now() - start) / 1000).toFixed(2)}s -> ${outputPath}`);
}

main().catch((err) => {
  console.error('\nConversion error:', err);
  process.exit(1);
});
