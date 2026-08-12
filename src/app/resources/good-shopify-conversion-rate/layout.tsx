import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Is a Good Shopify Conversion Rate?",
  description: "A good Shopify conversion rate is one that supports profitable customer acquisition for your product, traffic mix and margins.",
  alternates: { canonical: "https://www.attribix.app/resources/good-shopify-conversion-rate" },
  openGraph: {
    title: "What Is a Good Shopify Conversion Rate?",
    description: "A store falling from its stable 3.2% baseline to 1.9% deserves investigation even if an industry article says 2% is \"normal.\" Your own historical trend is often the strongest benchmark.",
    url: "https://www.attribix.app/resources/good-shopify-conversion-rate",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
