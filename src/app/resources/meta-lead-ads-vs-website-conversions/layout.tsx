import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Should Ecommerce Brands Use Meta Lead Ads or Send Traffic to Shopify?",
  description:
    "Purchase-optimized traffic is the default for most Shopify stores, but higher-friction or higher-price offers can do better with a lead form first. How to decide which funnel fits your product.",
  alternates: { canonical: "https://www.attribix.app/resources/meta-lead-ads-vs-website-conversions" },
  openGraph: {
    title: "Should Ecommerce Brands Use Meta Lead Ads or Send Traffic to Shopify?",
    description:
      "The decision comes down to buying friction and customer intent, not which Meta objective produces the cheapest-looking result.",
    url: "https://www.attribix.app/resources/meta-lead-ads-vs-website-conversions",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
