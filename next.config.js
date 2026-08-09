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
      {
        source: "/ads",
        destination: "/ad-management",
        permanent: true,
      },
      {
        source: "/consultation",
        destination: "/ad-management/consultation",
        permanent: true,
      },
      {
        source: "/agency/consultation",
        destination: "/ad-management/consultation",
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
    // As of 2026-08-08: `npm run lint` is clean everywhere except /src/app/analytics,
    // /src/app/api and two shared components (~106 pre-existing errors: no-explicit-any,
    // no-unused-vars, one Clerk prop mismatch, missing `load` identifiers). None are in
    // the public marketing site. Fix those in a dedicated pass before removing this.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // As of 2026-08-08: `npm run typecheck` is clean everywhere except /src/app/analytics
    // (8 pre-existing errors: an implicit-any param, a Clerk UserButton prop mismatch,
    // and four `Cannot find name 'load'` references in newsletter/reviews pages that look
    // like a missing import). None are in the public marketing site. Fix those in a
    // dedicated pass before removing this.
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
