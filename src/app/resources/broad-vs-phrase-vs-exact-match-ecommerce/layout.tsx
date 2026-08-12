import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Broad Match vs Phrase Match vs Exact Match for Ecommerce",
  description:
    "What each Google Ads keyword match type actually does now that broad, phrase and exact all use intent and context, and how to judge which one your Shopify account's data and conversion tracking can support.",
  alternates: { canonical: "https://www.attribix.app/resources/broad-vs-phrase-vs-exact-match-ecommerce" },
  openGraph: {
    title: "Broad Match vs Phrase Match vs Exact Match for Ecommerce",
    description: "There's no moral victory in using the most controlled match type. Use the level of freedom your data can support.",
    url: "https://www.attribix.app/resources/broad-vs-phrase-vs-exact-match-ecommerce",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
