// next.config.js
const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/agency",
        destination: "/managed-services",
        permanent: true,
      },
    ];
  },
  eslint: {
    // Allow production builds even when ESLint errors exist
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Allow builds even with TS errors
    ignoreBuildErrors: true,
  },
  webpack(config) {
    config.resolve.alias["@"] = path.resolve(__dirname, "src");

    // SVG loader
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      exclude: /node_modules/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
