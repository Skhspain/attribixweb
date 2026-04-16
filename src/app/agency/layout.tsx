import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agency Services — Ads Management & Attribution for Shopify",
  description: "Top-rated since 2019. Attribix runs Meta and Google Ads for Shopify brands — with real attribution, not platform guesses. 158 clients across 20+ countries.",
  alternates: { canonical: "https://attribix.app/agency" },
  openGraph: { title: "Agency | Attribix", description: "Top-rated Meta & Google Ads management for Shopify stores.", url: "https://attribix.app/agency" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
