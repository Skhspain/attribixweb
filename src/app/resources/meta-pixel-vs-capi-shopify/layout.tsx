import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meta Pixel vs Conversions API for Shopify",
  description:
    "Browser Pixel and server-side Conversions API solve different tracking gaps. What each one sees, why Shopify stores typically run both, and how deduplication keeps them from double-counting.",
  alternates: { canonical: "https://www.attribix.app/resources/meta-pixel-vs-capi-shopify" },
  openGraph: {
    title: "Meta Pixel vs Conversions API for Shopify",
    description: "What the Pixel sees, what CAPI recovers, and how event_id deduplication keeps them from counting the same purchase twice.",
    url: "https://www.attribix.app/resources/meta-pixel-vs-capi-shopify",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
