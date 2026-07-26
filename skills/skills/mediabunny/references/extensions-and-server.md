# Mediabunny Extension Packages & Server-Side Support

Mediabunny is modular. In browser environments where native WebCodecs may lack specific codec support (MP3 encoding, FLAC encoding, AAC encoding, AC-3/E-AC-3 decoding, ProRes decoding), extension packages supply high-performance WASM coders. In server-side runtimes (Node.js, Bun, Deno), `@mediabunny/server` polyfills WebCodecs via NodeAV / FFmpeg.

---

## Extension Packages (WASM Coders)

### 1. MP3 Encoder (`@mediabunny/mp3-encoder`)

Adds fast LAME MP3 encoding in browsers:

```bash
npm install mediabunny @mediabunny/mp3-encoder
```

```ts
import { canEncodeAudio, Conversion, Input, Output, Mp3OutputFormat, BufferTarget, BlobSource, ALL_FORMATS } from 'mediabunny';
import { registerMp3Encoder } from '@mediabunny/mp3-encoder';

// Register encoder if browser lacks native MP3 encoding
if (!(await canEncodeAudio('mp3'))) {
  registerMp3Encoder();
}

const input = new Input({ source: new BlobSource(file), formats: ALL_FORMATS });
const output = new Output({ format: new Mp3OutputFormat(), target: new BufferTarget() });

const conversion = await Conversion.init({ input, output });
await conversion.execute();
```

### 2. FLAC Encoder (`@mediabunny/flac-encoder`)

Adds high-performance libFLAC encoding:

```ts
import { canEncodeAudio } from 'mediabunny';
import { registerFlacEncoder } from '@mediabunny/flac-encoder';

if (!(await canEncodeAudio('flac'))) {
  registerFlacEncoder();
}
```

### 3. AAC Encoder (`@mediabunny/aac-encoder`)

Adds AAC-LC encoding polyfill for browsers lacking WebCodecs AAC encoder:

```ts
import { canEncodeAudio } from 'mediabunny';
import { registerAacEncoder } from '@mediabunny/aac-encoder';

if (!(await canEncodeAudio('aac'))) {
  registerAacEncoder();
}
```

### 4. AC-3 / E-AC-3 Dolby Digital (`@mediabunny/ac3`)

Adds AC-3 and E-AC-3 decoding & encoding:

```ts
import { registerAc3Decoder, registerAc3Encoder } from '@mediabunny/ac3';

registerAc3Decoder();
registerAc3Encoder();
```

### 5. Apple ProRes Decoder (`@mediabunny/prores`)

Adds ultra-fast TurboRes WASM Apple ProRes decoding:

```ts
import { registerProresDecoder } from '@mediabunny/prores';

registerProresDecoder();
```

---

## Server-Side Support (`@mediabunny/server`)

`@mediabunny/server` enables full Mediabunny execution in Node.js, Bun, or Deno using NodeAV bindings to FFmpeg.

### Installation & Registration

```bash
npm install mediabunny @mediabunny/server
```

```ts
import { registerMediabunnyServer } from '@mediabunny/server';

// Initialize server polyfills with automatic hardware acceleration
registerMediabunnyServer();
```

### Server File Conversion & HTTP Streaming Example

```ts
import http from 'node:http';
import { Readable } from 'node:stream';
import {
  Input,
  Output,
  Conversion,
  ReadableStreamSource,
  FilePathTarget,
  Mp4OutputFormat,
  ALL_FORMATS,
  QUALITY_MEDIUM,
} from 'mediabunny';
import { registerMediabunnyServer } from '@mediabunny/server';

registerMediabunnyServer();

const server = http.createServer(async (req, res) => {
  // Stream HTTP request body directly into Mediabunny Input
  const nodeStream = Readable.toWeb(req) as ReadableStream<Uint8Array>;
  const input = new Input({
    source: new ReadableStreamSource(nodeStream),
    formats: ALL_FORMATS,
  });

  // Stream output directly to server disk
  const output = new Output({
    format: new Mp4OutputFormat(),
    target: new FilePathTarget(`./downloads/converted-${Date.now()}.mp4`),
  });

  try {
    const conversion = await Conversion.init({
      input,
      output,
      video: async (track) => ({
        codec: 'avc',
        height: Math.min(720, await track.getDisplayHeight()),
        bitrate: QUALITY_MEDIUM,
      }),
    });
    await conversion.execute();

    res.statusCode = 200;
    res.end('File converted successfully');
  } catch (err) {
    res.statusCode = 500;
    res.end('Conversion error');
  }
});

server.listen(3000);
```

### Video Sample Server Transformation

```ts
// Server-side VideoSample transform method (using libavfilter / swscale)
const transformedSample = await videoSample.transform({
  width: 1280,
  height: 720,
  fit: 'cover',
});
```

---

## Logging Control

Control Mediabunny console verbosity across browser or CLI environments:

```ts
import { Logging, LogLevel } from 'mediabunny';

// Set logging level
Logging.level = LogLevel.Info;     // Log errors, warnings, info (default)
Logging.level = LogLevel.Warnings; // Log warnings and errors only
Logging.level = LogLevel.Errors;   // Log errors only
Logging.level = LogLevel.Silent;   // Mute all logging

// Hook into log events
Logging.on('error', (err) => console.error('Mediabunny Error:', err));
Logging.on('warn', (warn) => console.warn('Mediabunny Warning:', warn));
```
