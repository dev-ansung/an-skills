# HTTP Live Streaming (HLS) with Mediabunny

Mediabunny provides full native support for reading and writing HTTP Live Streaming (HLS) streams with fMP4 or MPEG-TS segmenting directly in browser or server JavaScript runtimes.

---

## Reading & Decoding HLS Streams

To read an HLS playlist, pass `HlsPlaylistInputFormat` and point `UrlSource` to the master or media `.m3u8` playlist URL:

```ts
import {
  Input,
  UrlSource,
  HlsPlaylistInputFormat,
  Conversion,
  Output,
  WebMOutputFormat,
  BufferTarget,
} from 'mediabunny';

const input = new Input({
  source: new UrlSource('https://example.com/stream/master.m3u8'),
  formats: [new HlsPlaylistInputFormat()],
});

// Inspect tracks in the HLS stream
const videoTrack = await input.getPrimaryVideoTrack();
console.log('HLS Stream resolution:', await videoTrack?.getDisplayWidth(), await videoTrack?.getDisplayHeight());

// Convert HLS stream to WebM file
const output = new Output({
  format: new WebMOutputFormat(),
  target: new BufferTarget(),
});

const conversion = await Conversion.init({ input, output });
await conversion.execute();
```

---

## Writing HLS Streams (Segmenting & Playlist Generation)

Use `HlsPlaylistOutputFormat` to package input files or live streams into segmented fMP4 or MPEG-TS HLS playlists:

```ts
import {
  Input,
  Output,
  BlobSource,
  HlsPlaylistOutputFormat,
  StreamTarget,
  Conversion,
  QUALITY_HIGH,
  QUALITY_MEDIUM,
  QUALITY_LOW,
} from 'mediabunny';

const input = new Input({ source: new BlobSource(inputFile), formats: ALL_FORMATS });

const hlsFormat = new HlsPlaylistOutputFormat({
  targetSegmentDuration: 4.0, // 4-second segment duration
  segmentType: 'fmp4',         // 'fmp4' (fragmented MP4) or 'ts' (MPEG-TS)
});

const output = new Output({
  format: hlsFormat,
  target: new CustomHlsTarget(), // Handle segment file writes (.m3u8 and .m4s/.ts)
});

// Multi-bitrate Adaptive Bitrate (ABR) HLS Variant Generation
const conversion = await Conversion.init({
  input,
  output,
  video: [
    { height: 1080, bitrate: QUALITY_HIGH },
    { height: 720, bitrate: QUALITY_MEDIUM },
    { height: 480, bitrate: QUALITY_LOW },
  ],
  audio: { codec: 'aac', bitrate: 192_000 },
});

await conversion.execute();
```

---

## Custom HLS Target Implementation

Handling generated HLS files (master playlist `master.m3u8`, variant playlists `stream_0.m3u8`, and segments `segment_0_0.m4s`):

```ts
import { CustomTarget } from 'mediabunny';

class CustomHlsTarget extends CustomTarget {
  private files = new Map<string, Uint8Array>();

  // Called when Mediabunny writes a playlist or segment file
  async writeChunk(path: string, chunk: Uint8Array): Promise<void> {
    console.log(`Writing HLS file: ${path} (${chunk.byteLength} bytes)`);
    this.files.set(path, chunk);
  }

  getFile(path: string): Uint8Array | undefined {
    return this.files.get(path);
  }
}
```
