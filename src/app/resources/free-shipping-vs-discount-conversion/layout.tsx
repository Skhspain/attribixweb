import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Shipping vs Discount: Which Converts Better?",
  description: "A discount reduces the price of the product.",
  alternates: { canonical: "https://www.attribix.app/resources/free-shipping-vs-discount-conversion" },
  openGraph: {
    title: "Free Shipping vs Discount: Which Converts Better?",
    description: "Free shipping thresholds may increase basket size.",
    url: "https://www.attribix.app/resources/free-shipping-vs-discount-conversion",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
