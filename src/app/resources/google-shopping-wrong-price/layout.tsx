import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Google Shopping Shows the Wrong Price",
  description: "When a Shopping ad shows a different price from Shopify, treat it as both a conversion problem and a feed-quality problem.",
  alternates: { canonical: "https://www.attribix.app/resources/google-shopping-wrong-price" },
  openGraph: {
    title: "Why Google Shopping Shows the Wrong Price",
    description: "Do not manually patch Merchant Center repeatedly if the Shopify feed integration continues sending the wrong value.",
    url: "https://www.attribix.app/resources/google-shopping-wrong-price",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
