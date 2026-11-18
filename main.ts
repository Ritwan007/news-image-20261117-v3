// news-image-20261117 v3 — entry program (Node 22, standard library only).
// The entry is the image entry.png beside this file; the program copies it to
// the output directory the grader provides. It runs with no network.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

// The gate allows at most 1 MiB and 1024x1024 px: refuse to emit an
// over-limit file rather than shipping an entry that cannot be judged.
const src = new URL('./entry.png', import.meta.url);
if (statSync(src).size > 1048576) {
  throw new Error(`entry.png is ${statSync(src).size} bytes, over the 1 MiB gate`);
}
copyFileSync(src, join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
