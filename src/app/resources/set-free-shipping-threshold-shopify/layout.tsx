import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Shipping Threshold: How Should Shopify Stores Set It?",
  description:
    "A useful free-shipping threshold encourages a larger basket without making the goal feel unreachable. Starting from AOV, margin and shipping cost instead of guessing a round number.",
  alternates: { canonical: "https://www.attribix.app/resources/set-free-shipping-threshold-shopify" },
  openGraph: {
    title: "Free Shipping Threshold: How Should Shopify Stores Set It?",
    description: "The threshold should increase contribution per order, not merely AOV.",
    url: "https://www.attribix.app/resources/set-free-shipping-threshold-shopify",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
