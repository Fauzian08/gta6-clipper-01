// gta6-clipper-01 entrypoint (Node 22, standard library only).
//
// What this program does: it takes VIDEO.json from the repository root and
// places an exact copy in the output directory, where the gate reads it.
// The entry itself is the video — the clip lives on YouTube, VIDEO.json only
// names its address, and the house counts the video's views from there.
//
// Before copying, the program checks that the JSON actually points at a
// public YouTube Short, and after copying it compares the two files by hash
// so a partial or corrupted copy can never pass silently.

import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const sourceRoot = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const targetRoot = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const sourcePath = join(sourceRoot, 'VIDEO.json');
const targetPath = join(targetRoot, 'VIDEO.json');

if (!existsSync(sourcePath)) {
  console.error(`No VIDEO.json found in ${sourceRoot}`);
  process.exit(1);
}

const rawBytes = readFileSync(sourcePath);

let parsed: unknown;
try {
  parsed = JSON.parse(rawBytes.toString('utf8'));
} catch {
  console.error('VIDEO.json is not valid JSON');
  process.exit(1);
}

const videoUrl =
  parsed !== null && typeof parsed === 'object'
    ? (parsed as Record<string, unknown>).url
    : undefined;

if (typeof videoUrl !== 'string' || videoUrl.length === 0) {
  console.error('VIDEO.json has no url field');
  process.exit(1);
}

if (!videoUrl.startsWith('https://www.youtube.com/shorts/')) {
  console.error(`VIDEO.json url is not a YouTube Short: ${videoUrl}`);
  process.exit(1);
}

mkdirSync(targetRoot, { recursive: true });
writeFileSync(targetPath, rawBytes);

const sourceHash = createHash('sha256').update(rawBytes).digest('hex');
const targetHash = createHash('sha256')
  .update(readFileSync(targetPath))
  .digest('hex');

if (sourceHash !== targetHash) {
  console.error('Copied VIDEO.json does not match the source');
  process.exit(1);
}

console.log(`VIDEO.json copied to ${targetPath} (${sourceHash.slice(0, 12)})`);
