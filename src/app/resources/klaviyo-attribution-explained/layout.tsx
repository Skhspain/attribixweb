import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Klaviyo Attribution Explained for Shopify Stores",
  description:
    "How Klaviyo connects orders to email and SMS interactions, why click and view attribution differ, and how attribution windows change the reported number.",
  alternates: { canonical: "https://www.attribix.app/resources/klaviyo-attribution-explained" },
  openGraph: {
    title: "Klaviyo Attribution Explained for Shopify Stores",
    description: "Klaviyo attribution is useful for comparing campaigns and flows. It isn't a perfect causal model of what created the purchase.",
    url: "https://www.attribix.app/resources/klaviyo-attribution-explained",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
