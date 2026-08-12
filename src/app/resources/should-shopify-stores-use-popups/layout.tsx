import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Should Shopify Stores Use Popups?",
  description:
    "Popups can turn anonymous traffic into an audience you can contact again, or interrupt the exact customer you paid to bring to the store. Covers timing, mobile design and what to measure beyond signup rate.",
  alternates: { canonical: "https://www.attribix.app/resources/should-shopify-stores-use-popups" },
  openGraph: {
    title: "Should Shopify Stores Use Popups?",
    description: "The right question is not \"Do popups work?\" It is whether your popup creates more lifetime value than friction.",
    url: "https://www.attribix.app/resources/should-shopify-stores-use-popups",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
