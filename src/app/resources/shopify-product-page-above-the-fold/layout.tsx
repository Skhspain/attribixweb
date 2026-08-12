import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Should Be Above the Fold on a Shopify Product Page?",
  description: "The first screen of a product page should help a customer answer one question: \"Is this worth looking at?\" It does not need to contain every sales argument on the page.",
  alternates: { canonical: "https://www.attribix.app/resources/shopify-product-page-above-the-fold" },
  openGraph: {
    title: "What Should Be Above the Fold on a Shopify Product Page?",
    description: "\"Above the fold\" varies by device.",
    url: "https://www.attribix.app/resources/shopify-product-page-above-the-fold",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
