#!/usr/bin/env node
/**
 * Forbidden-phrase scrub for Northside Fade Co.
 *
 * Walks customer-facing source dirs and the rendered out/ dir, flagging
 * any forbidden phrase from `lib/forbidden-phrases.ts` (mirrored below)
 * that appears as a standalone word.
 *
 * Excludes binding spec files / build dirs / etc.
 *
 * Usage:
 *   node scripts/scrub-forbidden.mjs [target-dir]
 * Default target: .
 */

import { promises as fs } from "node:fs";
import * as path from "node:path";

// Single source of truth, mirrored from src/lib/forbidden-phrases.ts.
// Canonical 24 (hype/industrial/medical) + brand-additive set.
const FORBIDDEN_PHRASES = [
  "seamless", "empower", "unlock", "journey", "solution",
  "cutting-edge", "state-of-the-art", "revolutionize", "transform",
  "all-in-one", "next-level", "world-class", "game-changing",
  "industrial", "engineering-grade", "production-grade", "end-use",
  "aerospace", "automotive", "robotics",
  "medical-grade", "clinical", "certified", "specification",
  "transformative", "elevate", "unleash",
  "luxury", "premium experience", "stylist", "salon",
];

// Boundary chars excluding letters, digits, hyphens, underscores. This stops
// hyphen-joined Tailwind utilities like `transition-transform` from matching
// the standalone word "transform".
const PHRASE_REGEX = new RegExp(
  `(^|[^A-Za-z0-9_-])(${FORBIDDEN_PHRASES.map((p) =>
    p.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"),
  ).join("|")})($|[^A-Za-z0-9_-])`,
  "i",
);

const EXCLUDE_DIRS = new Set([
  "node_modules", ".git", ".next", "_next", "out", "research", ".vercel",
]);

const EXCLUDE_FILES = new Set([
  "BRAND_DIRECTION.md",
  "VISUAL_SPEC.md",
  "COPY_BRIEF.md",
  "FACTS.json",
  "FACTS.template.json",
  ".project.json",
  "INTAKE_SUMMARY.md",
  "INTAKE_NOTES.md",
  "INTAKE_GAPS.md",
  "forbidden-phrases.ts",
  "scrub-forbidden.mjs",
  "scrub-forbidden.sh",
  "README.md", // Project README — may legitimately discuss the spec.
]);

const ACCEPT_EXT = new Set([
  ".tsx", ".ts", ".mdx", ".md", ".html", ".js", ".jsx", ".txt", ".json",
]);

const root = process.argv[2] ?? process.cwd();

/** @type {{ file: string; line: number; text: string; matched: string }[]} */
const allHits = [];

async function* walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (EXCLUDE_DIRS.has(e.name)) continue;
      yield* walk(full);
    } else if (e.isFile()) {
      yield full;
    }
  }
}

async function checkFile(file) {
  const base = path.basename(file);
  if (EXCLUDE_FILES.has(base)) return;

  const ext = path.extname(file);
  if (!ACCEPT_EXT.has(ext)) return;

  const text = await fs.readFile(file, "utf8");
  const lines = text.split(/\n/);
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(PHRASE_REGEX);
    if (m) {
      allHits.push({
        file,
        line: i + 1,
        text: lines[i].trim().slice(0, 140),
        matched: m[2],
      });
    }
  }
}

for await (const f of walk(root)) {
  await checkFile(f);
}

if (allHits.length === 0) {
  console.log(`PASS: 0 forbidden-phrase hits in ${root}.`);
  process.exit(0);
}

console.log(`FAIL: ${allHits.length} forbidden-phrase hit(s) in ${root}:`);
// Group by matched phrase
const byMatch = new Map();
for (const h of allHits) {
  if (!byMatch.has(h.matched)) byMatch.set(h.matched, []);
  byMatch.get(h.matched).push(h);
}
for (const [phrase, list] of byMatch) {
  console.log("");
  console.log(`  '${phrase}' — ${list.length} hit(s):`);
  for (const h of list.slice(0, 10)) {
    console.log(`    ${h.file}:${h.line}  ${h.text}`);
  }
  if (list.length > 10) console.log(`    ...and ${list.length - 10} more`);
}
process.exit(1);
