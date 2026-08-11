import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Should You Import GA4 Purchases Into Google Ads on Shopify?",
  description:
    "Native Google Ads purchase conversions and GA4-imported conversions behave differently for optimization and reporting. A practical framework for choosing between them on Shopify.",
  alternates: { canonical: "https://www.attribix.app/resources/import-ga4-conversions-google-ads-shopify" },
  openGraph: {
    title: "Should You Import GA4 Purchases Into Google Ads on Shopify?",
    description: "Native conversion tracking vs GA4 imports, and why running both as primary causes double-counting.",
    url: "https://www.attribix.app/resources/import-ga4-conversions-google-ads-shopify",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
