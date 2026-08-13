import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Server-Side Tracking for Shopify | Attribix",
  description:
    "Browser tracking misses a growing share of Shopify orders. See how server-side tracking works, what it fixes, and what it still can't solve.",
  alternates: { canonical: "https://www.attribix.app/server-side-tracking-shopify" },
  openGraph: {
    title: "Server-Side Tracking for Shopify | Attribix",
    description: "How server-side conversion tracking works for Shopify, Meta and Google Ads, and its real limits.",
    url: "https://www.attribix.app/server-side-tracking-shopify",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
