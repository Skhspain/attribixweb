import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Should Shopify Stores Show Delivery Dates Before Checkout?",
  description:
    "Delivery timing is part of the product decision, not a detail customers should discover at checkout. Here's how to show an accurate estimate without overpromising, and why localizing it matters.",
  alternates: { canonical: "https://www.attribix.app/resources/show-delivery-date-product-page-shopify" },
  openGraph: {
    title: "Should Shopify Stores Show Delivery Dates Before Checkout?",
    description: "Yes, when you can show a reasonably accurate estimate. Gifts, travel products and event clothing can become worthless if they arrive too late.",
    url: "https://www.attribix.app/resources/show-delivery-date-product-page-shopify",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
