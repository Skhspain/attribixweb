// next.config.js
const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.resolve.alias['@'] = path.resolve(__dirname, "src");

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
