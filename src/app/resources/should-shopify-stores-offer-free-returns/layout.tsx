import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Should Shopify Stores Offer Free Returns?",
  description: "Free returns can reduce purchase risk, particularly for products where size, fit or appearance is difficult to judge online.",
  alternates: { canonical: "https://www.attribix.app/resources/should-shopify-stores-offer-free-returns" },
  openGraph: {
    title: "Should Shopify Stores Offer Free Returns?",
    description: "A policy that increases orders 10% and increases return costs 30% may reduce profit.",
    url: "https://www.attribix.app/resources/should-shopify-stores-offer-free-returns",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
