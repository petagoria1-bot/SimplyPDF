import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/pdf";

const nextConfig: NextConfig = {
  basePath,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: "path-browserify",
        crypto: false,
      };
    }
    return config;
  },
  turbopack: {
    resolveAlias: {
      fs: "./src/lib/empty-module.ts",
      path: "path-browserify",
      crypto: "./src/lib/empty-module.ts",
    },
  },
};

export default nextConfig;
