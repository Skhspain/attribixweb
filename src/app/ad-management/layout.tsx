import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify Ad Management | Attribix",
  description:
    "Meta and Google Ads management for Shopify stores from the team behind Attribix. Campaign decisions checked against real Shopify revenue, not platform-reported ROAS.",
  alternates: { canonical: "https://www.attribix.app/ad-management" },
  openGraph: {
    title: "Shopify Ad Management | Attribix",
    description:
      "Meta and Google Ads management for Shopify stores, run by the team behind Attribix and backed by server-side attribution.",
    url: "https://www.attribix.app/ad-management",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
