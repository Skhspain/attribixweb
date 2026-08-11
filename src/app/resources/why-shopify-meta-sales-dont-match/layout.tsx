import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Shopify and Meta Ads Show Different Sales Numbers",
  description:
    "Meta and Shopify are answering different questions, not competing for the same fact. How attribution windows, click vs. view-through credit and consent limits create the gap.",
  alternates: { canonical: "https://www.attribix.app/resources/why-shopify-meta-sales-dont-match" },
  openGraph: {
    title: "Why Shopify and Meta Ads Show Different Sales Numbers",
    description: "Attribution windows, view-through credit and consent limits explain most of the gap between Meta's reported sales and your Shopify orders.",
    url: "https://www.attribix.app/resources/why-shopify-meta-sales-dont-match",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
