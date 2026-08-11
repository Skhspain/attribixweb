import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Ads Management for Shopify | Attribix",
  description:
    "Google Ads management for Shopify stores across Search, Shopping and Performance Max — Merchant Center, conversion tracking, and reporting against real revenue.",
  alternates: { canonical: "https://www.attribix.app/ad-management/google-ads" },
  openGraph: {
    title: "Google Ads Management for Shopify | Attribix",
    description: "Full Google Ads management for Shopify stores, run by the team behind Attribix.",
    url: "https://www.attribix.app/ad-management/google-ads",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
