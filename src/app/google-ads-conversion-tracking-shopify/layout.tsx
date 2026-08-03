import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Ads Conversion Tracking for Shopify | Attribix",
  description:
    "Why Google Ads and Shopify rarely agree on revenue, how enhanced conversions and Consent Mode fit in, and what to check across Search, Shopping and Performance Max.",
  alternates: { canonical: "https://attribix.app/google-ads-conversion-tracking-shopify" },
  openGraph: {
    title: "Google Ads Conversion Tracking for Shopify | Attribix",
    description: "Purchase tracking, enhanced conversions and revenue accuracy for Shopify stores running Google Ads.",
    url: "https://attribix.app/google-ads-conversion-tracking-shopify",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
