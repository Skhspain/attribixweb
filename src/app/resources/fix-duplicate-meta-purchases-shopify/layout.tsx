import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Fix Duplicate Purchases in Meta Ads for Shopify",
  description:
    "Duplicate purchase events are a common cause of Meta showing more purchases than Shopify, usually Pixel and CAPI firing without a shared event ID, or more than one tracking app sending the same order. How to diagnose and fix it.",
  alternates: { canonical: "https://www.attribix.app/resources/fix-duplicate-meta-purchases-shopify" },
  openGraph: {
    title: "How to Fix Duplicate Purchases in Meta Ads for Shopify",
    description: "Diagnosing and fixing duplicate purchase events in Meta Ads Manager for Shopify stores.",
    url: "https://www.attribix.app/resources/fix-duplicate-meta-purchases-shopify",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
