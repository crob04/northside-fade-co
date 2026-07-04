# INTAKE_NOTES — Northside Fade Co.

## Original one-liner
"Make a new website for Northside Fade Co. Scan https://example.com first and only ask me for gaps using A / B / C / Other."

## Task context
- Task id: t_f523b599
- Task title: brief-smoke-codex-intake-handoff
- Board: brief-smoke-20260704-000621
- Workspace (brief container): /opt/data/kanban/boards/brief-smoke-20260704-000621/workspaces/t_f523b599
- Workspace (dev server): /home/codex/hermes-orchestrator/_brief-intake-t_f523b599/
- Final project folder target (dev server): /home/codex/hermes-orchestrator/northside-fade-co/
- Prior reference (same flow shape, same operator wording): the Test Barber Co. intake for t_1e60fc47. The current task mirrors that flow for Northside Fade Co.
- Pipeline smoke test: task title `brief-smoke-codex-intake-handoff` confirms this is exercising the brief→codex→orchestrator→workers handoff with the Codexsynthesis pass.

## Operator answers (resolved at attempt 3)
Operator replied with `Q1: A; Q2: A; Q3: A; Q4: B; Q5: A; Q6: A; Q7: A; Q8: A; Q9: A; Q10: A; Q11: A` (and then each line as separate comments, matching). All eleven questions resolved on the third attempt.

| # | Question | Choice | Resolved value |
|---|----------|--------|----------------|
| Q1 | Previous / existing site URL | A | No current site; start fresh. |
| Q2 | Single page or multi-page | A | Multi-page marketing site: Home, Services, About, Gallery, Contact. |
| Q3 | CMS needed | A | No CMS; static content. |
| Q4 | Aesthetic direction | B | Modern minimalist barbershop. |
| Q5 | Hard constraints | A | None beyond Vercel default deploy target. |
| Q6 | GitHub repo + deploy target | A | Create new `crob04/northside-fade-co` repo + deploy on Vercel. |
| Q7 | Audience vocabulary | A | Common barbershop terms: fade, taper, lineup, beard trim, hot towel shave, walk-ins, appointment, shape-up. |
| Q8 | Top three objections | A | Price uncertainty, wait time, quality/skill skepticism. |
| Q9 | Hero outcome | A | "After using this service, I finally have a cut I can trust every visit." |
| Q10 | Forbidden phrases + inversions | A | Canonical 24 forbidden-phrase list only; no required inversions. |
| Q11 | Provided assets | A | None; researcher will source images. |

## Public source scan (recorded for traceability)

### https://example.com (provided by operator)
- `web_extract`: FAILED — firecrawl-py lazy install disabled.
- `curl` direct fetch: SUCCESS — page content is the IETF placeholder:
  - H1: "Example Domain"
  - Body: "This domain is for use in documentation examples without needing permission. Avoid use in operations."
  - One outbound link to https://iana.org/domains/example
- Verdict: example.com is the IANA/IETF reserved domain. It contains ZERO information about "Northside Fade Co." The operator-supplied URL is a placeholder, not a real source.

### web_search scope
- Skipped. The one-liner's only source candidate is example.com, and the search toolchain was unavailable in run 1. Per intake discipline, do not loop on a dead source — fall through to operator question block.

## Retry log
- **Attempt 1 (run 1)** — blocked at 2026-07-04 00:13 with `kanban_block`. Posted Q1-Q11 as a `kanban_comment`.
- **Unblock** — operator unblocked at 2026-07-04 00:14 with no operator comment.
- **Attempt 2 (run 2)** — re-entered the gap-resolution loop; re-blocked because no answers arrived between unblock and the retry.
- **Unblock #2** — operator posted `Q1: A; Q2: A; ... Q11: A` (single-line), then re-posted each line as a separate comment. Re-dispatched as attempt 3.
- **Attempt 3 (run 3, current)** — answers in hand. Finalize FACTS.json + INTAKE_SUMMARY.md + .project.json, create project folder, mirror artifacts, spawn orchestrator follow-up, `kanban_complete`.

## Unknowns / conflicts / low-confidence fields

### Resolved
- Business type: barbershop (inferred from "Fade Co." naming and Q4/Q7/Q8 answers; operator did not explicitly confirm industry but every other field is consistent with a US neighborhood barbershop). This is a soft inference, not a hard conflict.
- All eleven intake questions: resolved.
- Repo: `crob04/northside-fade-co` (new repo, create via `gh repo create`).
- Deploy target: Vercel (default).

### Still unresolved (downstream-worker-owned)
- Concrete address, hours, services, pricing — not in scope at intake; these are FACTS.json blanks the researcher will source from public booking pages, social, or operator-supplied assets. Per intake discipline, blank fields stay blank until sourced.
- Hero image, gallery images, logo — operator answered "none provided" (Q11: A); researcher will source.
- Forbidden phrase list — operator picked A (canonical 24 only); the copywriter worker holds the canonical list and applies it.

### Not in conflict
- No operator overrides posted; no "skip intake" override required because all eleven questions were answered.

## Decision tree for this attempt
- All answers in: write FACTS.json (canonical schema) + INTAKE_SUMMARY.md + .project.json on the dev server under `~/hermes-orchestrator/northside-fade-co/`. Create the GitHub repo `crob04/northside-fade-co` via `gh repo create` and set per-repo git identity. Mirror artifacts into local `${HERMES_KANBAN_WORKSPACE}/handoff/`. Update the task body with the resolved spec. Spawn a follow-up orchestrator task as a child of t_f523b599. Call `kanban_complete` with the artifacts list.