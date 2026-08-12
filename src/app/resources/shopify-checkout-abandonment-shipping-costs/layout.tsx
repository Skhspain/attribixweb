import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Shopify Customers Abandon Checkout After Seeing Shipping Costs",
  description:
    "When checkout abandonment jumps after shipping appears, the customer has learned something about the deal they didn't know earlier. Here's how to diagnose by basket size, geography and timing.",
  alternates: { canonical: "https://www.attribix.app/resources/shopify-checkout-abandonment-shipping-costs" },
  openGraph: {
    title: "Why Shopify Customers Abandon Checkout After Seeing Shipping Costs",
    description: "The best fix is the one that reduces surprise while keeping the business profitable.",
    url: "https://www.attribix.app/resources/shopify-checkout-abandonment-shipping-costs",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
