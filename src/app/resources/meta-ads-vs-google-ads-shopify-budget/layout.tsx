import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meta Ads vs Google Ads for Shopify: Where to Spend First",
  description:
    "Google generally captures existing intent, Meta generally creates it — but the real answer depends on product type, search demand, AOV, consideration cycle and creative capacity. A framework for deciding where to start.",
  alternates: { canonical: "https://www.attribix.app/resources/meta-ads-vs-google-ads-shopify-budget" },
  openGraph: {
    title: "Meta Ads vs Google Ads for Shopify: Where to Spend First",
    description:
      "The real behavioral difference between the two channels, where it blurs in practice, and how to decide which one to prioritize for your store.",
    url: "https://www.attribix.app/resources/meta-ads-vs-google-ads-shopify-budget",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
