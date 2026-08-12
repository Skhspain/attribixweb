import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Bundles vs Discounts: Which Increase AOV?",
  description:
    "A discount makes one purchase cheaper. A bundle can make a larger purchase feel more valuable. Here's why bundles often have better AOV potential, and how to compare contribution margin between the two.",
  alternates: { canonical: "https://www.attribix.app/resources/product-bundles-vs-discounts-ecommerce" },
  openGraph: {
    title: "Product Bundles vs Discounts: Which Increase AOV?",
    description: "The best offer increases the value of the basket without making the buying decision harder.",
    url: "https://www.attribix.app/resources/product-bundles-vs-discounts-ecommerce",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
