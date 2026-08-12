import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discount Code vs Automatic Discount: Which Converts Better?",
  description:
    "Automatic discounts remove a step at checkout. Discount codes give you more control over distribution and attribution. Which is right depends on how the promotion is meant to work.",
  alternates: { canonical: "https://www.attribix.app/resources/discount-code-vs-automatic-discount-shopify" },
  openGraph: {
    title: "Discount Code vs Automatic Discount: Which Converts Better?",
    description: "The better choice depends on how the promotion is meant to work: universal offer or targeted distribution.",
    url: "https://www.attribix.app/resources/discount-code-vs-automatic-discount-shopify",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
