/**
 * Canonical 24 forbidden-phrase list (per /opt/data/skills/devops/website-build-orchestration/references/canonical-forbidden-phrase-inversion.md)
 * plus brand-additive phrases from BRAND_DIRECTION.md §8.
 *
 * This module is the single source of truth — `scripts/scrub-forbidden.sh`
 * reads it at build time and grep-checks every rendered page against it.
 *
 * Per INTAKE_SUMMARY Q10 (A) — no inversions required. Audience vocabulary
 * (fade, taper, lineup, beard trim, hot towel shave, walk-ins, appointment,
 * shape-up) does NOT overlap with the canonical blocklist.
 */

export const CANONICAL_FORBIDDEN: readonly string[] = [
  // Directive / hype (13)
  "seamless",
  "empower",
  "unlock",
  "journey",
  "solution",
  "cutting-edge",
  "state-of-the-art",
  "revolutionize",
  "transform",
  "all-in-one",
  "next-level",
  "world-class",
  "game-changing",
  // Industrial / spec-sheet (7)
  "industrial",
  "engineering-grade",
  "production-grade",
  "end-use",
  "aerospace",
  "automotive",
  "robotics",
  // Medical / clinical (4)
  "medical-grade",
  "clinical",
  "certified",
  "specification",
] as const;

export const BRAND_ADDITIVE_FORBIDDEN: readonly string[] = [
  // Hype (brand-additive) — per BRAND_DIRECTION.md §8
  "transformative",
  "elevate",
  "unleash",
  // Out-of-register
  "luxury",
  "premium experience",
  // Wrong job title — operator terminology
  "stylist",
  // Wrong word for the venue
  "salon",
] as const;

export const ALL_FORBIDDEN: readonly string[] = [
  ...CANONICAL_FORBIDDEN,
  ...BRAND_ADDITIVE_FORBIDDEN,
];
