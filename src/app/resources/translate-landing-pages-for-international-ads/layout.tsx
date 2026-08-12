import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Should You Translate Shopify Landing Pages for Paid Ads?",
  description:
    "If you run ads in a customer's local language, the landing page should normally continue in that language. What to translate first, and what localization requires beyond words.",
  alternates: { canonical: "https://www.attribix.app/resources/translate-landing-pages-for-international-ads" },
  openGraph: {
    title: "Should You Translate Shopify Landing Pages for Paid Ads?",
    description: "Sending a Spanish-language Meta ad to an English product page breaks the experience immediately.",
    url: "https://www.attribix.app/resources/translate-landing-pages-for-international-ads",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
