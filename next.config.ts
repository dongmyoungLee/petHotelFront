import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    // ADDED
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

    return config;
    },
    reactStrictMode: false,
};

export default nextConfig;
