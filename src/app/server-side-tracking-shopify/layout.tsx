import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify Server-Side Tracking | Attribix",
  description:
    "Browser tracking misses a growing share of Shopify orders. See how server-side tracking works, what it fixes, and what it still can't solve.",
  alternates: { canonical: "https://attribix.app/server-side-tracking-shopify" },
  openGraph: {
    title: "Shopify Server-Side Tracking | Attribix",
    description: "How server-side conversion tracking works for Shopify, Meta and Google Ads — and its real limits.",
    url: "https://attribix.app/server-side-tracking-shopify",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
