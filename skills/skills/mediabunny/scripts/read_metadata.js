#!/usr/bin/env node
/**
 * Example: Read File Metadata & Track Details
 * Usage: node read_metadata.js <path-to-media-file>
 */

import {
  Input,
  BufferSource,
  Mp4InputFormat,
  WebMInputFormat,
  MatroskaInputFormat,
  QuickTimeInputFormat,
  FlacInputFormat,
  Mp3InputFormat,
  WaveInputFormat,
  OggInputFormat,
} from 'mediabunny';
import { registerMediabunnyServer } from '@mediabunny/server';
import { resolve } from 'node:path';
import { existsSync, readFileSync } from 'node:fs';

registerMediabunnyServer();

const filePath = process.argv[2];
if (!filePath) {
  console.error('Usage: node read_metadata.js <path-to-media-file>');
  process.exit(1);
}

const absolutePath = resolve(filePath);
if (!existsSync(absolutePath)) {
  console.error(`Error: File not found at ${absolutePath}`);
  process.exit(1);
}

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

async function readMetadata() {
  try {
    const fileBuffer = readFileSync(absolutePath);
    const input = new Input({
      source: new BufferSource(fileBuffer),
      formats: FILE_FORMATS,
    });

    const tracks = await input.getTracks();
    console.log(`\n=== Mediabunny Metadata Inspection ===`);
    console.log(`File: ${absolutePath}`);
    console.log(`Total Tracks: ${tracks.length}\n`);

    const videoTrack = await input.getPrimaryVideoTrack();
    if (videoTrack) {
      const width = await videoTrack.getDisplayWidth();
      const height = await videoTrack.getDisplayHeight();
      const codec = await videoTrack.getCodec();
      const rotation = await videoTrack.getRotation();

      console.log(`[Video Track]`);
      console.log(`  Codec:       ${codec}`);
      console.log(`  Resolution:  ${width}x${height}`);
      console.log(`  Rotation:    ${rotation}°`);
    } else {
      console.log(`[Video Track]: None`);
    }

    const audioTrack = await input.getPrimaryAudioTrack();
    if (audioTrack) {
      const channels = await audioTrack.getNumberOfChannels();
      const sampleRate = await audioTrack.getSampleRate();
      const codec = await audioTrack.getCodec();

      console.log(`\n[Audio Track]`);
      console.log(`  Codec:       ${codec}`);
      console.log(`  Channels:    ${channels}`);
      console.log(`  Sample Rate: ${sampleRate} Hz`);
    } else {
      console.log(`[Audio Track]: None`);
    }

    console.log('\n=======================================\n');
  } catch (error) {
    console.error('Failed to read metadata:', error);
    process.exit(1);
  }
}

readMetadata();
