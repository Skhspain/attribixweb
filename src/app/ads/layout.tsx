import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paid Ads Agency for Shopify — Attribix",
  description: "We manage Meta and Google Ads for a small number of Shopify brands. Results-first, no long-term contracts, full attribution included.",
  alternates: { canonical: "https://www.attribix.app/ad-management" },
  openGraph: { title: "Paid Ads Agency for Shopify | Attribix", description: "Meta and Google Ads management for Shopify — results-first, full attribution.", url: "https://www.attribix.app/ads" },
  robots: { index: false, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
