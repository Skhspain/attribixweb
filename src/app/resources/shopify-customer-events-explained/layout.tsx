import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify Customer Events Explained for Marketers",
  description:
    "Shopify Customer Events is a framework for pixels and customer-behaviour events. What marketers actually need to know: which actions are available and how your tracking tool consumes them.",
  alternates: { canonical: "https://www.attribix.app/resources/shopify-customer-events-explained" },
  openGraph: {
    title: "Shopify Customer Events Explained for Marketers",
    description: "Not the developer terminology: which customer actions are available and how your tracking tool consumes them.",
    url: "https://www.attribix.app/resources/shopify-customer-events-explained",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
