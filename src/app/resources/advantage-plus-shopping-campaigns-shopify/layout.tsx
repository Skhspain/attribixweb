import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Should You Use Advantage+ Shopping Campaigns for Shopify?",
  description:
    "Automation can't repair a weak offer, slow product page or incorrect purchase event. The business questions that determine whether Advantage+ deserves testing on your Shopify store.",
  alternates: { canonical: "https://www.attribix.app/resources/advantage-plus-shopping-campaigns-shopify" },
  openGraph: {
    title: "Should You Use Advantage+ Shopping Campaigns for Shopify?",
    description:
      "Where automated sales campaigns tend to work well, what they don't solve, and when more manual control still matters.",
    url: "https://www.attribix.app/resources/advantage-plus-shopping-campaigns-shopify",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
