import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Currency Differences Affect Ecommerce ROAS",
  description:
    "ROAS can become confusing when ad spend, Shopify revenue and product costs are recorded in different currencies. How to normalize reporting so the numbers reconcile.",
  alternates: { canonical: "https://www.attribix.app/resources/currency-affects-ecommerce-roas" },
  openGraph: {
    title: "How Currency Differences Affect Ecommerce ROAS",
    description: "For international stores, currency normalization should be part of measurement rather than an afterthought.",
    url: "https://www.attribix.app/resources/currency-affects-ecommerce-roas",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
