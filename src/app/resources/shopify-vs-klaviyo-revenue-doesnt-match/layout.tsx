import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify vs Klaviyo Revenue Doesn't Match: Why?",
  description:
    "Shopify records orders. Klaviyo reports attributed revenue. Why the two numbers aren't designed to match, and when a difference is actually worth investigating.",
  alternates: { canonical: "https://www.attribix.app/resources/shopify-vs-klaviyo-revenue-doesnt-match" },
  openGraph: {
    title: "Shopify vs Klaviyo Revenue Doesn't Match: Why?",
    description: "One order can have several marketing influences. Here's how to tell a normal discrepancy from a real problem.",
    url: "https://www.attribix.app/resources/shopify-vs-klaviyo-revenue-doesnt-match",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
