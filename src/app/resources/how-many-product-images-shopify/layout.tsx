import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Many Product Images Should a Shopify Product Page Have?",
  description:
    "There is no ideal image count for a Shopify product page. Here's why every image should have a job, when complex products need more visual proof, and how to design a mobile gallery that reduces uncertainty.",
  alternates: { canonical: "https://www.attribix.app/resources/how-many-product-images-shopify" },
  openGraph: {
    title: "How Many Product Images Should a Shopify Product Page Have?",
    description: "The right gallery is the smallest set of images that answers the customer's visual questions properly. The goal is not image count: it's confidence.",
    url: "https://www.attribix.app/resources/how-many-product-images-shopify",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
