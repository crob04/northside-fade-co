import Link from "next/link";
import { NAV_LINKS, FOOTER } from "@/data/copy";
import { SHOP } from "@/data/shop";

/**
 * Footer per VISUAL_SPEC §D.3.
 * Three columns on desktop, stacked on mobile:
 *   (1) brand + address snippet
 *   (2) nav links
 *   (3) hours snippet + phone
 * Bottom row: copyright + minimal legal links.
 *
 * Address / hours / phone are operator-blank. We render honest placeholders
 * so the page never lies about facts we don't have.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      aria-label="Site footer"
      className="border-t border-brand-border bg-brand-bg py-12 text-brand-text dark:border-brand-dark-border dark:bg-brand-dark-bg dark:text-brand-dark-text"
    >
      <div className="mx-auto grid max-w-container grid-cols-1 gap-10 px-6 md:grid-cols-3 md:gap-12 md:px-8">
        {/* Column 1 — brand + address */}
        <div>
          <p className="font-display text-lg font-bold tracking-tight">
            Northside Fade Co.
          </p>
          <p className="mt-3 max-w-xs text-sm text-brand-muted dark:text-brand-dark-muted">
            {FOOTER.brandDescription}
          </p>
          <p className="mt-4 text-sm text-brand-muted dark:text-brand-dark-muted">
            {SHOP.address.street}
            <br />
            {SHOP.address.cityStateZip}
          </p>
        </div>

        {/* Column 2 — nav */}
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-muted dark:text-brand-dark-muted">
            Pages
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-y-2 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-brand-text transition-colors duration-200 hover:text-brand-primary dark:text-brand-dark-text dark:hover:text-brand-dark-primary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — hours + phone */}
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-muted dark:text-brand-dark-muted">
            {FOOTER.hoursLabel}
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
            {SHOP.hours.map((h) => (
              <li key={h.day} className="contents">
                <span className="text-brand-text dark:text-brand-dark-text">{h.day}</span>
                <span className="text-brand-muted dark:text-brand-dark-muted">
                  {h.open ? h.open : "[confirm with shop]"}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-muted dark:text-brand-dark-muted">
              {FOOTER.phoneLabel}
            </span>
            <br />
            <span className="text-brand-text dark:text-brand-dark-text">{SHOP.phone}</span>
          </p>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-container flex-col items-start justify-between gap-3 border-t border-brand-border px-6 pt-6 text-xs text-brand-muted md:flex-row md:items-center md:px-8 dark:border-brand-dark-border dark:text-brand-dark-muted">
        <span>© {year} Northside Fade Co.</span>
        <span>
          Walk in or book ahead. The chair is open today.
        </span>
      </div>
    </footer>
  );
}
