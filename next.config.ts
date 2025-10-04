import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Build as a normal Next.js app (server-rendered or Vercel deployment).
  // `output: "export"` (static HTML export) prevents Next from generating
  // the runtime routes manifest (`.next/routes-manifest.json`) which some
  // deployments and middleware rely on. If you need a static export for
  // GitHub Pages, revert this change and ensure no API/app-route features are
  // used.
  basePath: '/tyy-dev-portfolio',     // repo name, no trailing slash
  assetPrefix: '/tyy-dev-portfolio/', // ensures assets load from repo path
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
