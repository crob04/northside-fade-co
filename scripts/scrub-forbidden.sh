#!/usr/bin/env bash
#
# Forbidden-phrase scrub for the Northside Fade Co. build.
#
# Walks customer-facing source dirs + the rendered static export, flagging
# any of the 24 canonical forbidden phrases + brand-additive additions.
#
# Excludes binding spec files and build/dependency dirs. Exits non-zero on
# any hit.
#
# Usage:
#   bash scripts/scrub-forbidden.sh [target-dir]

set -euo pipefail
cd "$(dirname "$0")/.."
ROOT="$(pwd)"

TARGET="${1:-$ROOT}"

node "${ROOT}/scripts/scrub-forbidden.mjs" "$TARGET"
