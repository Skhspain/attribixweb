import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Ads Conversion Value Is Wrong on Shopify",
  description:
    "Why Google Ads revenue on Shopify orders often doesn't match the actual order total: subtotal vs total, currency mismatches, duplicate conversions, and GA4-imported value diverging from the native tag's value.",
  alternates: { canonical: "https://www.attribix.app/resources/google-ads-conversion-value-wrong-shopify" },
  openGraph: {
    title: "Google Ads Conversion Value Is Wrong on Shopify",
    description: "What actually determines the value Google Ads reports for a Shopify order, and where it commonly goes wrong.",
    url: "https://www.attribix.app/resources/google-ads-conversion-value-wrong-shopify",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
