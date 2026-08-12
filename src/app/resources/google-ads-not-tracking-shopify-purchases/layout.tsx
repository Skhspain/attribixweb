import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Ads Not Tracking Shopify Purchases? Step-by-Step Diagnosis",
  description:
    "A step-by-step checklist for Google Ads not tracking Shopify purchases: from primary conversion action and tag presence through transaction IDs, GA4 import, Enhanced Conversions and consent, ending with a real test order.",
  alternates: { canonical: "https://www.attribix.app/resources/google-ads-not-tracking-shopify-purchases" },
  openGraph: {
    title: "Google Ads Not Tracking Shopify Purchases? Step-by-Step Diagnosis",
    description: "The full checklist, in order, for finding why Google Ads isn't recording Shopify purchases.",
    url: "https://www.attribix.app/resources/google-ads-not-tracking-shopify-purchases",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
