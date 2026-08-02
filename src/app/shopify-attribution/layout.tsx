import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify Attribution Software | Attribix",
  description:
    "See which Meta and Google Ads campaigns actually drive Shopify revenue. Attribix connects ad clicks to real orders across first-click, last-click and multi-touch models.",
  alternates: { canonical: "https://attribix.app/shopify-attribution" },
  openGraph: {
    title: "Shopify Attribution Software | Attribix",
    description: "Connect Meta and Google Ads clicks to real Shopify orders — not platform-reported conversions.",
    url: "https://attribix.app/shopify-attribution",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
