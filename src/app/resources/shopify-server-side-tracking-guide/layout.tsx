import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Shopify Server-Side Tracking Works: Architecture, Consent & Testing",
  description:
    "A technical guide to Shopify server-side tracking: browser vs server events, Meta and Google deduplication, consent, testing and common implementation mistakes.",
  alternates: { canonical: "https://www.attribix.app/resources/shopify-server-side-tracking-guide" },
  openGraph: {
    title: "How Shopify Server-Side Tracking Works",
    description: "Browser vs server events, Meta and Google deduplication, consent, testing and common implementation mistakes.",
    url: "https://www.attribix.app/resources/shopify-server-side-tracking-guide",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
