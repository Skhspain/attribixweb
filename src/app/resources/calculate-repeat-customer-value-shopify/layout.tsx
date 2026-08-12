import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Calculate Repeat Customer Value for a Shopify Store",
  description:
    "Repeat customer value should be based on the contribution customers generate after their first purchase, not just the revenue they spend. A cohort-based method.",
  alternates: { canonical: "https://www.attribix.app/resources/calculate-repeat-customer-value-shopify" },
  openGraph: {
    title: "How to Calculate Repeat Customer Value for a Shopify Store",
    description: "A cohort method for turning repeat revenue into an expected repeat contribution you can use for acquisition decisions.",
    url: "https://www.attribix.app/resources/calculate-repeat-customer-value-shopify",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
