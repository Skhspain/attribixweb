import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Duplicate Google Ads Conversions on Shopify",
  description:
    "Why Google Ads sometimes reports more purchases than Shopify actually shipped: multiple primary conversion actions, overlapping tags, per-click counting settings, and missing transaction IDs, plus how to tell duplication apart from ordinary attribution differences.",
  alternates: { canonical: "https://www.attribix.app/resources/google-ads-duplicate-conversions-shopify" },
  openGraph: {
    title: "Duplicate Google Ads Conversions on Shopify",
    description: "The specific mechanics that cause Google Ads to count one Shopify order as more than one conversion.",
    url: "https://www.attribix.app/resources/google-ads-duplicate-conversions-shopify",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
