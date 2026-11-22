// gta6-clipper-01 entry (Node 22, standard library only).
//
// The entry is the video, not this program: this file only hands the gate the
// video's address. It copies VIDEO.json from the repository root into the
// output directory, where the gate reads it and looks the video up on
// YouTube. Nothing this program writes is scored; the house scores the
// video's views.
//
// Local run (mirrors the grader):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });

try {
  copyFileSync(join(botDir, 'VIDEO.json'), join(outDir, 'VIDEO.json'));
} catch (error) {
  console.error(`could not copy VIDEO.json out of ${botDir}: ${(error as Error).message}`);
  process.exit(1);
}
