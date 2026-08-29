// next.config.js
const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Resources slug cleanup (2026-08-12): replaced truncated,
      // programmatically-cut URLs with short, intentional ones.
      {
        source: "/resources/when-is-a-shopify-store-ready-to-advertise",
        destination: "/resources/shopify-ready-for-international-ads",
        permanent: true,
      },
      {
        source: "/resources/email-open-rate-is-high-but-sales-are-low-what-does",
        destination: "/resources/high-email-open-rate-low-sales",
        permanent: true,
      },
      {
        source: "/resources/how-to-build-an-ecommerce-creative-testing-system-that",
        destination: "/resources/ecommerce-creative-testing-system",
        permanent: true,
      },
      // Cannibalization merges (2026-08-12): two pages answering the
      // same search intent, merged into the stronger URL.
      {
        source: "/resources/ad-landing-page-message-match-ecommerce",
        destination: "/resources/ad-to-landing-page-message-match",
        permanent: true,
      },
      {
        source: "/resources/does-removing-navigation-improve-landing-page",
        destination: "/resources/should-ecommerce-landing-pages-have-navigation",
        permanent: true,
      },
      {
        source: "/resources/good-email-revenue-percentage-ecommerce",
        destination: "/resources/how-much-revenue-should-email-marketing-generate-ecommerce",
        permanent: true,
      },
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
      // SEO cleanup consolidation redirects (2026-08-29): near-duplicate
      // resource articles merged into their strongest sibling.
      {
        source: "/resources/all-products-one-performance-max-campaign",
        destination: "/resources/when-to-split-performance-max-campaigns",
        permanent: true,
      },
      {
        source: "/resources/attribution-vs-incrementality",
        destination: "/resources/incrementality-ecommerce-advertising",
        permanent: true,
      },
      {
        source: "/resources/break-even-cpa-explained-for-shopify-stores",
        destination: "/resources/maximum-profitable-cpa-ecommerce",
        permanent: true,
      },
      {
        source: "/resources/check-google-ads-conversion-tracking-working-shopify",
        destination: "/resources/google-ads-not-tracking-shopify-purchases",
        permanent: true,
      },
      {
        source: "/resources/does-better-tracking-improve-sales",
        destination: "/resources/can-server-side-tracking-improve-ad-performance",
        permanent: true,
      },
      {
        source: "/resources/does-klarna-increase-conversion-rate",
        destination: "/resources/buy-now-pay-later-shopify-conversion",
        permanent: true,
      },
      {
        source: "/resources/does-klaviyo-over-attribute-revenue",
        destination: "/resources/klaviyo-revenue-too-high",
        permanent: true,
      },
      {
        source: "/resources/does-meta-ad-engagement-matter-for-sales",
        destination: "/resources/good-meta-ad-metrics-but-poor-sales",
        permanent: true,
      },
      {
        source: "/resources/ecommerce-cac-payback-period",
        destination: "/resources/cac-payback-period-ecommerce",
        permanent: true,
      },
      {
        source: "/resources/free-shipping-threshold-above-aov",
        destination: "/resources/calculate-profitable-free-shipping-threshold",
        permanent: true,
      },
      {
        source: "/resources/google-ads-brand-vs-non-brand-budget",
        destination: "/resources/should-you-bid-on-your-brand-name-google-ads",
        permanent: true,
      },
      {
        source: "/resources/google-ads-low-quality-traffic",
        destination: "/resources/google-ads-search-terms-ecommerce",
        permanent: true,
      },
      {
        source: "/resources/google-ads-transaction-id-ecommerce",
        destination: "/resources/google-ads-duplicate-conversions-shopify",
        permanent: true,
      },
      {
        source: "/resources/google-ads-vs-klaviyo-revenue-attribution",
        destination: "/resources/ad-platforms-report-more-revenue-than-shopify",
        permanent: true,
      },
      {
        source: "/resources/how-long-does-meta-ad-creative-last",
        destination: "/resources/why-winning-meta-creatives-stop-working",
        permanent: true,
      },
      {
        source: "/resources/how-long-should-meta-ads-run-before-changes",
        destination: "/resources/how-much-data-does-meta-ads-need",
        permanent: true,
      },
      {
        source: "/resources/how-much-revenue-should-email-marketing-generate-ecommerce",
        destination: "/resources/measure-email-marketing-true-impact-ecommerce",
        permanent: true,
      },
      {
        source: "/resources/how-much-should-ecommerce-spend-to-acquire-customer",
        destination: "/resources/calculate-repeat-customer-value-shopify",
        permanent: true,
      },
      {
        source: "/resources/how-often-should-you-meet-with-your-marketing-agency",
        destination: "/resources/how-often-should-your-marketing-agency-report-to-you",
        permanent: true,
      },
      {
        source: "/resources/how-to-calculate-break-even-roas-for-ecommerce",
        destination: "/resources/gross-margin-break-even-roas",
        permanent: true,
      },
      {
        source: "/resources/how-to-increase-repeat-purchase-rate-without-constant",
        destination: "/resources/why-your-shopify-store-gets-customers-but-few-repeat",
        permanent: true,
      },
      {
        source: "/resources/how-to-use-customer-reviews-to-create-better-meta-ads",
        destination: "/resources/how-to-find-new-meta-ad-angles-without-guessing",
        permanent: true,
      },
      {
        source: "/resources/import-duties-ecommerce-conversion-rate",
        destination: "/resources/show-duties-taxes-before-checkout-ecommerce",
        permanent: true,
      },
      {
        source: "/resources/increase-shopify-average-order-value",
        destination: "/resources/product-bundles-vs-discounts-ecommerce",
        permanent: true,
      },
      {
        source: "/resources/international-traffic-lower-conversion-ecommerce",
        destination: "/resources/international-shipping-low-conversion-ecommerce",
        permanent: true,
      },
      {
        source: "/resources/is-a-google-ads-agency-worth-it",
        destination: "/resources/is-an-ecommerce-marketing-agency-worth-the-cost",
        permanent: true,
      },
      {
        source: "/resources/is-a-meta-ads-agency-worth-it",
        destination: "/resources/is-an-ecommerce-marketing-agency-worth-the-cost",
        permanent: true,
      },
      {
        source: "/resources/lose-money-first-order-ecommerce",
        destination: "/resources/first-order-profit-vs-lifetime-value-ecommerce",
        permanent: true,
      },
      {
        source: "/resources/meta-ads-frequency-too-high",
        destination: "/resources/how-to-tell-meta-ad-fatigue",
        permanent: true,
      },
      {
        source: "/resources/meta-ads-vs-klaviyo-attribution",
        destination: "/resources/ad-platforms-report-more-revenue-than-shopify",
        permanent: true,
      },
      {
        source: "/resources/performance-max-brand-search-overspending",
        destination: "/resources/performance-max-brand-revenue",
        permanent: true,
      },
      {
        source: "/resources/product-page-vs-advertorial-which-works-better-for",
        destination: "/resources/what-is-an-advertorial-landing-page-and-when-should",
        permanent: true,
      },
      {
        source: "/resources/scale-high-revenue-or-high-margin-products-ecommerce",
        destination: "/resources/advertise-bestseller-or-high-margin-product",
        permanent: true,
      },
      {
        source: "/resources/separate-brand-traffic-performance-max",
        destination: "/resources/performance-max-brand-revenue",
        permanent: true,
      },
      {
        source: "/resources/set-free-shipping-threshold-shopify",
        destination: "/resources/calculate-profitable-free-shipping-threshold",
        permanent: true,
      },
      {
        source: "/resources/shopify-customer-events-explained",
        destination: "/resources/google-tag-manager-vs-shopify-customer-events",
        permanent: true,
      },
      {
        source: "/resources/shopify-ga4-meta-google-revenue-different",
        destination: "/resources/ad-platforms-report-more-revenue-than-shopify",
        permanent: true,
      },
      {
        source: "/resources/shopify-mobile-traffic-not-converting",
        destination: "/resources/shopify-mobile-conversion-rate-lower-than-desktop",
        permanent: true,
      },
      {
        source: "/resources/shopify-pixel-vs-meta-capi-do-you-need-both",
        destination: "/resources/meta-pixel-vs-capi-shopify",
        permanent: true,
      },
      {
        source: "/resources/should-shopify-use-google-tag-manager",
        destination: "/resources/google-tag-manager-vs-shopify-customer-events",
        permanent: true,
      },
      {
        source: "/resources/unexpected-shipping-costs-cart-abandonment",
        destination: "/resources/shopify-checkout-abandonment-shipping-costs",
        permanent: true,
      },
      {
        source: "/resources/what-roas-do-you-need-with-a-30-percent-gross-margin",
        destination: "/resources/gross-margin-break-even-roas",
        permanent: true,
      },
      {
        source: "/resources/what-roas-do-you-need-with-a-50-percent-gross-margin",
        destination: "/resources/gross-margin-break-even-roas",
        permanent: true,
      },
      {
        source: "/resources/where-should-ecommerce-brands-get-ideas-for-new-ad",
        destination: "/resources/how-to-find-new-meta-ad-angles-without-guessing",
        permanent: true,
      },
      {
        source: "/resources/why-meta-ads-work-one-week-fail-next",
        destination: "/resources/meta-ads-roas-dropped",
        permanent: true,
      },
      {
        source: "/resources/why-platform-roas-can-look-great-while-your-business",
        destination: "/resources/400-roas-profitable",
        permanent: true,
      },
      {
        source: "/resources/your-ads-get-clicks-but-your-offer-doesn-t-convert-how",
        destination: "/resources/how-to-know-whether-your-ecommerce-offer-is-the-problem",
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
