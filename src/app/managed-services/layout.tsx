import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify Advertising Agency | Meta & Google Ads – Attribix",
  description:
    "Managed Meta and Google Ads for Shopify stores from the team behind Attribix. Campaign decisions backed by real Shopify revenue, not platform guesses.",
  alternates: { canonical: "https://attribix.app/managed-services" },
  openGraph: {
    title: "Shopify Advertising Agency | Attribix Managed Services",
    description:
      "Meta & Google Ads management for Shopify stores, run by the team behind Attribix and backed by server-side attribution.",
    url: "https://attribix.app/managed-services",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
