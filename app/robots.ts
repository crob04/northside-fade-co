import type { MetadataRoute } from "next";

const siteUrl = "https://northside-fade-co.vercel.app";

/**
 * robots.txt — emitted by Next.js at /robots.txt.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
