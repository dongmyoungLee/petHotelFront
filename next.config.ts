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
    images: {
        domains: ['dnvefa72aowie.cloudfront.net'],
    },
    // async rewrites() {
    //     return [
    //         {
    //             source: "",
    //             destination: "",
    //         }
    //     ]
    // }
};

export default nextConfig;
