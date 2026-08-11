import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MER vs ROAS for Shopify",
  description:
    "ROAS depends on attribution; MER doesn't. When each metric is useful, why they move differently, and why business-level measurement needs both.",
  alternates: { canonical: "https://www.attribix.app/resources/mer-vs-roas-shopify" },
  openGraph: {
    title: "MER vs ROAS for Shopify",
    description: "When to use ROAS, when to use MER, and why they answer different questions.",
    url: "https://www.attribix.app/resources/mer-vs-roas-shopify",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
