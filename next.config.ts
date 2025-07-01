import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: "export",
  distDir: "docs",
  trailingSlash: true,
  basePath: isProd ? "/xglasswebui" : "",
  assetPrefix: isProd ? "/xglasswebui/" : "",
  images: {
    unoptimized: true
  }
};

export default nextConfig;
