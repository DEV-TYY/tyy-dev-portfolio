import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   output: 'export',
  distDir: 'out',
    basePath: '/dev-ty',     // repo name, no trailing slash
    assetPrefix: '/dev-ty/', // ensures assets load from repo path
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
