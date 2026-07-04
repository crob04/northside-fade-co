/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export — no Node runtime needed at deploy time.
  // Vercel serves the exported HTML directly. Required for static-only sites.
  output: "export",
  trailingSlash: false,
  images: {
    // All project images live under /public/images/. No external image hosts.
    // Pixabay / Pexels / Unsplash are intentionally NOT in remotePatterns.
    remotePatterns: [],
    unoptimized: true,
  },
};
module.exports = nextConfig;
