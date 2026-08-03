// next.config.js
const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/agency",
        destination: "/ad-management",
        permanent: true,
      },
      {
        source: "/managed-services",
        destination: "/ad-management",
        permanent: true,
      },
      {
        source: "/managed-services/meta-ads",
        destination: "/ad-management/meta-ads",
        permanent: true,
      },
      {
        source: "/managed-services/google-ads",
        destination: "/ad-management/google-ads",
        permanent: true,
      },
      {
        source: "/managed-services/inquiry",
        destination: "/ad-management/inquiry",
        permanent: true,
      },
      // Consolidate the .com domain onto the canonical .app marketing site.
      // App-level redirect only — does not touch vercel.json or Vercel's
      // domain-level www/apex settings, so it can't loop against them.
      {
        source: "/:path*",
        has: [{ type: "host", value: "attribix.com" }],
        destination: "https://www.attribix.app/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.attribix.com" }],
        destination: "https://www.attribix.app/:path*",
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
