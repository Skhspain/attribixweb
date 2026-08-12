import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Bundling vs Upselling: Which Is Better for Ecommerce?",
  description:
    "Bundling packages products before the decision. Upselling asks the customer to increase the order after choosing something. Both can raise AOV, but they create different buying experiences.",
  alternates: { canonical: "https://www.attribix.app/resources/product-bundling-vs-upselling-ecommerce" },
  openGraph: {
    title: "Product Bundling vs Upselling: Which Is Better for Ecommerce?",
    description: "Measure contribution per visitor rather than choosing the tactic with the biggest average basket.",
    url: "https://www.attribix.app/resources/product-bundling-vs-upselling-ecommerce",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
