import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Tell What Performance Max Is Actually Doing",
  description: "The Channel Performance, product, asset and search-category reports Performance Max actually exposes, and how to read them against real Shopify orders.",
  alternates: { canonical: "https://www.attribix.app/resources/how-to-see-what-performance-max-is-doing" },
  openGraph: {
    title: "How to Tell What Performance Max Is Actually Doing",
    description: "When performance moves, ask what changed in the feed, inventory, budget, bidding, assets, website, conversion tracking or market demand.",
    url: "https://www.attribix.app/resources/how-to-see-what-performance-max-is-doing",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
