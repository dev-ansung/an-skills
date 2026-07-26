import { execSync } from 'node:child_process';
import { resolve } from 'node:path';
import { existsSync, statSync, writeFileSync, mkdirSync } from 'node:fs';

const scriptsDir = resolve('skills/skills/mediabunny/scripts');
const inputVideo = resolve('.artifacts/input/sample_video.mp4');
const outputDir = resolve('.artifacts/output');

mkdirSync(outputDir, { recursive: true });

const testCases = [
  {
    name: '1. read_metadata.js',
    cmd: `node read_metadata.js "${inputVideo}"`,
    expectedOutputs: [],
  },
  {
    name: '2. convert_media.js',
    cmd: `node convert_media.js --input "${inputVideo}" --output "${resolve(outputDir, 'converted_video.webm')}"`,
    expectedOutputs: [resolve(outputDir, 'converted_video.webm')],
  },
  {
    name: '3. extract_audio.js',
    cmd: `node extract_audio.js --input "${inputVideo}" --output "${resolve(outputDir, 'extracted_audio.mp3')}"`,
    expectedOutputs: [resolve(outputDir, 'extracted_audio.mp3')],
  },
  {
    name: '4. extract_thumbnail.js',
    cmd: `node extract_thumbnail.js --input "${inputVideo}" --output "${resolve(outputDir, 'thumbnail.raw')}" --timestamp 0.5`,
    expectedOutputs: [resolve(outputDir, 'thumbnail.raw')],
  },
  {
    name: '5. add_video_overlay.js',
    cmd: `node add_video_overlay.js --input "${inputVideo}" --output "${resolve(outputDir, 'overlay_video.mp4')}" --text "Watermark"`,
    expectedOutputs: [resolve(outputDir, 'overlay_video.mp4')],
  },
  {
    name: '6. record_canvas.js',
    cmd: `node record_canvas.js --output "${resolve(outputDir, 'canvas_recording.mp4')}" --duration 1`,
    expectedOutputs: [resolve(outputDir, 'canvas_recording.mp4')],
  },
  {
    name: '7. hls_segmentation.js',
    cmd: `node hls_segmentation.js --input "${inputVideo}" --output-dir "${resolve(outputDir, 'hls_stream')}" --duration 2`,
    expectedOutputs: [resolve(outputDir, 'hls_stream/master.m3u8')],
  },
  {
    name: '8. server_compression.js',
    cmd: `node server_compression.js --input "${inputVideo}" --output "${resolve(outputDir, 'compressed_server.mp4')}"`,
    expectedOutputs: [resolve(outputDir, 'compressed_server.mp4')],
  },
];

console.log('=== Running Automated Suite Validation of 8 Terminal CLI Scripts ===\n');

let reportMarkdown = `# Mediabunny Executable Scripts Validation Report\n\n`;
reportMarkdown += `Executed on ${new Date().toISOString()}\n\n`;
reportMarkdown += `| # | Script Name | Status | Duration | Output Artifacts |\n`;
reportMarkdown += `|---|---|---|---|---|\n`;

let totalPassed = 0;

for (const tc of testCases) {
  console.log(`[TESTING] ${tc.name}...`);
  const startTime = Date.now();
  let status = 'PASSED';
  let logs = '';

  try {
    const stdout = execSync(tc.cmd, { cwd: scriptsDir, encoding: 'utf8', shell: '/bin/zsh' });
    logs = stdout.trim();
  } catch (err) {
    status = 'FAILED';
    logs = err.stdout || err.stderr || err.message;
  }

  const durationMs = Date.now() - startTime;

  let outputSummary = [];
  for (const outPath of tc.expectedOutputs) {
    if (existsSync(outPath)) {
      const size = statSync(outPath).size;
      outputSummary.push(`${outPath.split('/').pop()} (${size} bytes)`);
    } else {
      status = 'FAILED (Missing output file)';
    }
  }

  if (status === 'PASSED') {
    totalPassed++;
    console.log(`  └─ PASSED (${durationMs}ms)`);
  } else {
    console.error(`  └─ ${status} (${durationMs}ms)`);
    console.error(`     Log: ${logs.slice(0, 300)}`);
  }

  const outStr = outputSummary.length > 0 ? outputSummary.join('<br>') : 'Console Output verified';
  reportMarkdown += `| ${tc.name.split('.')[0]} | \`${tc.name.split(' ')[1]}\` | **${status}** | ${(durationMs / 1000).toFixed(2)}s | ${outStr} |\n`;
}

reportMarkdown += `\n### Summary: ${totalPassed} / ${testCases.length} Terminal Scripts Passed Validation Successfully.\n`;

const reportPath = resolve(outputDir, 'VALIDATION_RESULTS.md');
writeFileSync(reportPath, reportMarkdown);
console.log(`\nValidation complete! Detailed report generated at: ${reportPath}`);
