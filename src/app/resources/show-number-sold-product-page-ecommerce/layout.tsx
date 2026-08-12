import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Should Shopify Stores Show the Number of Products Sold?",
  description:
    "Showing purchase counts can create useful social proof when the number is genuine and meaningful, and look manipulative when it exists only to fake popularity.",
  alternates: { canonical: "https://www.attribix.app/resources/show-number-sold-product-page-ecommerce" },
  openGraph: {
    title: "Should Shopify Stores Show the Number of Products Sold?",
    description: "Real popularity can be persuasive. Artificial popularity makes the store look less credible.",
    url: "https://www.attribix.app/resources/show-number-sold-product-page-ecommerce",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
