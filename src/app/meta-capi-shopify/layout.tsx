import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meta CAPI for Shopify | Attribix",
  description:
    "How the Meta Conversions API works alongside the Pixel for Shopify stores — event matching, deduplication, Event Match Quality, and common setup problems.",
  alternates: { canonical: "https://attribix.app/meta-capi-shopify" },
  openGraph: {
    title: "Meta CAPI for Shopify | Attribix",
    description: "Meta Conversions API setup, deduplication and Event Match Quality for Shopify stores.",
    url: "https://attribix.app/meta-capi-shopify",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
