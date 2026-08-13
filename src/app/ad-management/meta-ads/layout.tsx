import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meta Ads Management for Shopify | Attribix",
  description:
    "Meta Ads management for Shopify stores: account strategy, creative and audience testing, catalogue ads, and reporting checked against real Shopify revenue.",
  alternates: { canonical: "https://www.attribix.app/ad-management/meta-ads" },
  openGraph: {
    title: "Meta Ads Management for Shopify | Attribix",
    description: "Full Meta Ads management for Shopify stores, run by the team behind Attribix.",
    url: "https://www.attribix.app/ad-management/meta-ads",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
