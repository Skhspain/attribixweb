import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meta Conversions API for Shopify | Attribix",
  description:
    "How the Meta Conversions API works alongside the Pixel for Shopify stores: event matching, deduplication, Event Match Quality, and common setup problems.",
  alternates: { canonical: "https://www.attribix.app/meta-capi-shopify" },
  openGraph: {
    title: "Meta Conversions API for Shopify | Attribix",
    description: "Meta Conversions API setup, deduplication and Event Match Quality for Shopify stores.",
    url: "https://www.attribix.app/meta-capi-shopify",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
