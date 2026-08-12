import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Unexpected Shipping Costs Kill Ecommerce Sales",
  description:
    "A shopper can accept a $79 product and still abandon when checkout suddenly becomes $94. Here's why the surprise matters more than the amount, and how to diagnose shipping-driven cart abandonment.",
  alternates: { canonical: "https://www.attribix.app/resources/unexpected-shipping-costs-cart-abandonment" },
  openGraph: {
    title: "Why Unexpected Shipping Costs Kill Ecommerce Sales",
    description: "You may pay Meta or Google to acquire the visitor, persuade them to add to cart, and still lose the sale because shipping was hidden.",
    url: "https://www.attribix.app/resources/unexpected-shipping-costs-cart-abandonment",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
