import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Improve Shopify Conversion Rate Without Increasing Ad Spend",
  description: "If traffic stays the same and conversion rate improves, revenue can grow without buying another click.",
  alternates: { canonical: "https://www.attribix.app/resources/improve-shopify-conversion-rate" },
  openGraph: {
    title: "How to Improve Shopify Conversion Rate Without Increasing Ad Spend",
    description: "Most ecommerce traffic is often mobile.",
    url: "https://www.attribix.app/resources/improve-shopify-conversion-rate",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
