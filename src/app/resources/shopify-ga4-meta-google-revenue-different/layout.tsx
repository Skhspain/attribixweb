import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Shopify, GA4, Meta and Google All Show Different Revenue",
  description:
    "Four systems can show four different revenue numbers without all four being broken. Here's why Shopify, ad platforms and GA4 are measuring different things, with a worked example.",
  alternates: { canonical: "https://www.attribix.app/resources/shopify-ga4-meta-google-revenue-different" },
  openGraph: {
    title: "Why Shopify, GA4, Meta and Google All Show Different Revenue",
    description: "The mistake is expecting identical numbers from systems designed to answer different questions.",
    url: "https://www.attribix.app/resources/shopify-ga4-meta-google-revenue-different",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
