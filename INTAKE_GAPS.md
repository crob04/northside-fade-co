# Intake Gaps — Northside Fade Co.

## What we already know
- The operator supplied `https://example.com`, but that URL is the IANA/IETF reserved example domain, not a real Northside Fade Co. source.
- `web_extract` failed because `firecrawl-py` lazy install was disabled and `search.firecrawl` was unavailable.
- Direct `curl` fetch succeeded and returned the placeholder page with H1 `Example Domain`, documentation-only body copy, and one outbound link to `https://iana.org/domains/example`.
- `web_search` was skipped because the only source candidate was the dead placeholder URL and search tooling was unavailable in this run.
- No operator answers have been received beyond the original one-line request.
- Everything in the public-source scan is unresolved for Northside Fade Co.; the business type, current site, pages, CMS needs, aesthetic direction, constraints, repo/deploy target, vocabulary, objections, hero outcome, forbidden phrases, and assets all need operator confirmation.
- The task appears to be a pipeline smoke test that mirrors the prior Test Barber Co. intake flow, but the intake should still treat all Northside Fade Co. facts as unknown.

## Questions for operator
Q1. What should we treat as the previous or existing site URL?
A. There is no current site; start fresh.
B. `https://example.com` was only a placeholder; I will provide the real URL.
C. Use a booking page or social profile as the current source instead.
Other: <free text>

Q2. Should this be a single-page site or a multi-page site?
A. Multi-page marketing site: Home, Services, About, Gallery, Contact.
B. Single-page site with all core content on one page.
C. Multi-page site with additional booking or pricing detail pages.
Other: <free text>

Q3. Does the site need a CMS?
A. No CMS; use static content.
B. Yes, include a CMS for editable content.
C. Not now, but structure it so a CMS can be added later.
Other: <free text>

Q4. What aesthetic direction should the website use?
A. Vintage / industrial barbershop.
B. Modern minimalist barbershop.
C. Classic gentleman-club / neighborhood-shop.
Other: <free text>

Q5. Are there any hard constraints?
A. None beyond a Vercel default deploy target.
B. There are brand, legal, accessibility, or content constraints I will provide.
C. There are technical constraints I will provide.
Other: <free text>

Q6. What GitHub repo and deploy target should we use?
A. Create new `crob04/northside-fade-co` repo and deploy on Vercel.
B. Use an existing GitHub repo and deploy on Vercel.
C. Use a different repo owner, repo name, or deploy target.
Other: <free text>

Q7. What audience vocabulary should the site use?
A. Use common barbershop terms: fade, taper, lineup, beard trim, hot towel shave, walk-ins, appointment, shape-up.
B. Keep language simpler: haircuts, beard trims, appointments, walk-ins.
C. I will provide the exact vocabulary and service terms.
Other: <free text>

Q8. What are the top three objections the site should answer?
A. Price uncertainty, wait time, and quality / skill skepticism.
B. Do not assume objections yet; leave this open until I provide them.
C. I will provide the top three objections now.
Other: <free text>

Q9. What hero outcome should the top of the homepage promise?
A. After using this service, I finally have a cut I can trust every visit.
B. Keep the hero outcome generic until I provide a stronger outcome.
C. I will provide the exact hero outcome.
Other: <free text>

Q10. What forbidden phrases or required inversions should we use?
A. Use the canonical 24 forbidden-phrase list only; no required inversions.
B. Use the canonical 24 forbidden-phrase list plus extra phrases I provide.
C. Use the canonical 24 forbidden-phrase list plus required inversions I provide.
Other: <free text>

Q11. What assets are already provided?
A. None; researcher will source images.
B. I have logos, photos, or brand files to provide.
C. Use public or licensed images only; no business-specific assets are available.
Other: <free text>

## Reply format
- Reply one line per question, for example: `Q2: A`, `Q4: C - https://example.com`, `Q8: Other - pricing trust, turnaround, quality`.
