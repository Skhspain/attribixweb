import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify Server-Side Tracking: Complete Guide",
  description:
    "How server-side tracking actually works for Shopify stores running Meta and Google Ads — event architecture, deduplication, consent, testing, and the mistakes that undo it.",
  alternates: { canonical: "https://www.attribix.app/resources/shopify-server-side-tracking-guide" },
  openGraph: {
    title: "Shopify Server-Side Tracking: Complete Guide",
    description: "Event architecture, deduplication, consent and testing for server-side tracking on Shopify.",
    url: "https://www.attribix.app/resources/shopify-server-side-tracking-guide",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
