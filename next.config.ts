import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'out',
  basePath: '/tyy-dev-portfolio',     // repo name, no trailing slash
  assetPrefix: '/tyy-dev-portfolio/', // ensures assets load from repo path
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
