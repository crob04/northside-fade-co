import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const siteUrl = "https://northside-fade-co.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Northside Fade Co. — A cut you can trust every visit.",
    template: "%s — Northside Fade Co.",
  },
  description:
    "Same barber, same chair, same cut. A neighborhood barbershop offering fades, tapers, lineups, beard trims, hot towel shaves, and shape-ups. Walk in or book ahead.",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Northside Fade Co.",
    title: "Northside Fade Co. — A cut you can trust every visit.",
    description:
      "Same barber, same chair, same cut. A neighborhood barbershop for fades, tapers, lineups, beard trims, hot towel shaves, and shape-ups.",
    images: [{ url: "/images/hero.jpg", width: 1920, height: 1280, alt: "Barber at work in the Northside Fade Co. shop." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Northside Fade Co.",
    description: "Same barber, same chair, same cut.",
    images: ["/images/hero.jpg"],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F4EF" },
    { media: "(prefers-color-scheme: dark)", color: "#13110F" },
  ],
  width: "device-width",
  initialScale: 1,
};

/**
 * Inline theme bootstrap — runs before React hydrates.
 * Reads localStorage[ "northside-theme"] or falls back to system prefers-color-scheme.
 * Toggles the `dark` class on <html> so Tailwind dark: variants take effect on first paint.
 */
const themeBootstrap = `(function(){try{var t=localStorage.getItem('northside-theme');var dark;if(t==='dark'){dark=true;}else if(t==='light'){dark=false;}else{dark=window.matchMedia('(prefers-color-scheme: dark)').matches;}if(dark){document.documentElement.classList.add('dark');}else{document.documentElement.classList.remove('dark');}}catch(e){document.documentElement.classList.toggle('dark',window.matchMedia('(prefers-color-scheme: dark)').matches);}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-brand-bg dark:bg-brand-dark-bg" suppressHydrationWarning>
      <head>
        {/* Font CDN — Cabinet Grotesk (display) via Fontshare */}
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@400,500,700,800&display=swap"
          rel="stylesheet"
        />
        {/* Font CDN — Inter (body) via Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Theme bootstrap — must run before paint to avoid flash */}
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
      </head>
      <body className="min-h-screen bg-brand-bg text-brand-text font-body antialiased dark:bg-brand-dark-bg dark:text-brand-dark-text">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-brand-text focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
