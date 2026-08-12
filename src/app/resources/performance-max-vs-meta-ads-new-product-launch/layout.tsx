import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Performance Max vs Meta Ads for New Product Launches",
  description: "A new product with no search demand behaves very differently from a new product in an established category.",
  alternates: { canonical: "https://www.attribix.app/resources/performance-max-vs-meta-ads-new-product-launch" },
  openGraph: {
    title: "Performance Max vs Meta Ads for New Product Launches",
    description: "Meta can introduce the product; Google can capture later category or brand searches.",
    url: "https://www.attribix.app/resources/performance-max-vs-meta-ads-new-product-launch",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
