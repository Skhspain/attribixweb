import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Where Should Customer Reviews Appear on a Shopify Product Page?",
  description:
    "Reviews should appear where they help customers answer questions, not only in one giant block at the bottom of the page. A guide to placement across the buying journey.",
  alternates: { canonical: "https://www.attribix.app/resources/where-to-put-reviews-shopify-product-page" },
  openGraph: {
    title: "Where Should Customer Reviews Appear on a Shopify Product Page?",
    description: "Reviews are not one page section. They are a trust resource that can support several stages of the decision.",
    url: "https://www.attribix.app/resources/where-to-put-reviews-shopify-product-page",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
