import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Price Ecommerce Bundles Without Destroying Margin",
  description:
    "A bundle needs enough perceived value to justify buying more, but it does not automatically need a huge discount. Calculating standalone contribution, cannibalization and order contribution.",
  alternates: { canonical: "https://www.attribix.app/resources/how-to-price-ecommerce-bundles" },
  openGraph: {
    title: "How to Price Ecommerce Bundles Without Destroying Margin",
    description: "The goal is not the highest bundle adoption rate. It is a bigger, more profitable basket without excessive conversion loss.",
    url: "https://www.attribix.app/resources/how-to-price-ecommerce-bundles",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
