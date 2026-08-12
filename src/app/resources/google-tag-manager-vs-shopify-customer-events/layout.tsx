import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Tag Manager vs Shopify Customer Events",
  description:
    "GTM is a tag-management system. Customer Events is Shopify's framework for customer-event/pixel integrations. Why the two aren't direct substitutes, and how to choose between them.",
  alternates: { canonical: "https://www.attribix.app/resources/google-tag-manager-vs-shopify-customer-events" },
  openGraph: {
    title: "Google Tag Manager vs Shopify Customer Events",
    description: "Embedding GTM doesn't automatically grant access to every Shopify checkout event or bypass Shopify's sandbox and privacy model.",
    url: "https://www.attribix.app/resources/google-tag-manager-vs-shopify-customer-events",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
