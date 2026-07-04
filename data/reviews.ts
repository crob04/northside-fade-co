/**
 * Reviews data (operator-blank).
 * Per COPY_BRIEF §3.4 + MESSAGING.md "honest empty states" rule, no fabricated
 * reviews are shipped. The Home §PROOF section renders a single "Read reviews
 * on our booking page →" CTA, and the Gallery / About pages do not include
 * review cards until the operator supplies real review text or a verified
 * Booksy / Google URL.
 *
 * When the operator populates FACTS.json → reviews[] the cards reflow — the
 * data shape is documented here so the coder doesn't have to invent.
 */

export type Review = {
  quote: string;
  author: string;
  service: string;
  rating: string;        // e.g. "5/5"
  date: string;          // ISO-8601
};

/** Empty by design — operator-blank. */
export const REVIEWS: Review[] = [];
