import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lots of Add to Carts but No Purchases on Shopify",
  description:
    "High add-to-cart activity with few completed orders usually points to a specific friction point revealed at checkout — shipping cost, tax, payment options or trust. How to narrow it down.",
  alternates: { canonical: "https://www.attribix.app/resources/shopify-add-to-cart-no-purchases" },
  openGraph: {
    title: "Lots of Add to Carts but No Purchases on Shopify",
    description: "What usually sits between a full cart and a completed order, and how to tell which one you have.",
    url: "https://www.attribix.app/resources/shopify-add-to-cart-no-purchases",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
