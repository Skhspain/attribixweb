import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Should Shopify Product Pages Show Reviews Near the Top?",
  description: "For many products, showing a review summary near the top is useful because it answers an immediate trust question: \"Have other people bought this, and were they happy?\" That does not mean the full review feed belongs above the Add to Cart button.",
  alternates: { canonical: "https://www.attribix.app/resources/reviews-near-top-product-page" },
  openGraph: {
    title: "Should Shopify Product Pages Show Reviews Near the Top?",
    description: "If the product page has strong Add to Cart but poor checkout completion, moving review stars five centimetres higher may not matter.",
    url: "https://www.attribix.app/resources/reviews-near-top-product-page",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
