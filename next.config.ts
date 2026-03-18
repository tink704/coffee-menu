import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: '/coffee-menu',
  assetPrefix: '/coffee-menu',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
