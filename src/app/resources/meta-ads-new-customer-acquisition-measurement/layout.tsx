import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meta Ads New Customer Acquisition: How Should You Measure It?",
  description:
    "Platform ROAS can look strong while a campaign mostly reaches existing customers. How to separate new-customer acquisition from total attributed revenue using Shopify's own customer data.",
  alternates: { canonical: "https://www.attribix.app/resources/meta-ads-new-customer-acquisition-measurement" },
  openGraph: {
    title: "Meta Ads New Customer Acquisition: How Should You Measure It?",
    description:
      "\"Did Meta get credit for revenue?\" and \"Did Meta help us acquire new customers?\" are different questions with different answers.",
    url: "https://www.attribix.app/resources/meta-ads-new-customer-acquisition-measurement",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
