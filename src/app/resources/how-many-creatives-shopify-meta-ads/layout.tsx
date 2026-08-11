import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Many Creatives Does a Shopify Store Need for Meta Ads?",
  description:
    "Creative volume for Meta ads should scale with ad spend, not catalog size. How to size a creative pipeline and avoid depending on one worn-out winner.",
  alternates: { canonical: "https://www.attribix.app/resources/how-many-creatives-shopify-meta-ads" },
  openGraph: {
    title: "How Many Creatives Does a Shopify Store Need for Meta Ads?",
    description:
      "Why creative volume should track spend and audience size, not a flat monthly quota, and how to count concepts instead of exports.",
    url: "https://www.attribix.app/resources/how-many-creatives-shopify-meta-ads",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
