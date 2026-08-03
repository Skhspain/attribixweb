import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Ads Management for Shopify | Attribix Managed Services",
  description:
    "Google Ads management for Shopify stores across Search, Shopping and Performance Max — Merchant Center, conversion tracking, and reporting against real revenue.",
  alternates: { canonical: "https://attribix.app/managed-services/google-ads" },
  openGraph: {
    title: "Google Ads Management for Shopify | Attribix",
    description: "Full Google Ads management for Shopify stores, run by the team behind Attribix.",
    url: "https://attribix.app/managed-services/google-ads",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
