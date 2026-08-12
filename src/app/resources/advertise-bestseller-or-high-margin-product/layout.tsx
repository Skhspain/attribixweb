import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Should You Advertise Your Best Seller or Highest-Margin Product?",
  description:
    "The best seller has proven demand. The highest-margin product gives you more room to buy customers. How to classify products by role and allocate marketing accordingly.",
  alternates: { canonical: "https://www.attribix.app/resources/advertise-bestseller-or-high-margin-product" },
  openGraph: {
    title: "Should You Advertise Your Best Seller or Highest-Margin Product?",
    description: "Sometimes the same product is both the best seller and the highest-margin item; often it is not.",
    url: "https://www.attribix.app/resources/advertise-bestseller-or-high-margin-product",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
