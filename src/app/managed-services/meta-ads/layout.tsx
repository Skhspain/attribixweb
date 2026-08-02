import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meta Ads Management for Shopify | Attribix Managed Services",
  description:
    "Meta Ads management for Shopify stores — account strategy, creative and audience testing, catalogue ads, and reporting checked against real Shopify revenue.",
  alternates: { canonical: "https://attribix.app/managed-services/meta-ads" },
  openGraph: {
    title: "Meta Ads Management for Shopify | Attribix",
    description: "Full Meta Ads management for Shopify stores, run by the team behind Attribix.",
    url: "https://attribix.app/managed-services/meta-ads",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
