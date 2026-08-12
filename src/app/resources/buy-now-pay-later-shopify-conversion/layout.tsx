import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Should Shopify Stores Offer Buy Now, Pay Later?",
  description:
    "Buy Now, Pay Later can reduce the psychological size of a purchase and help conversion on higher-AOV products, but it introduces fees and a different way of presenting price. When it's actually worth it.",
  alternates: { canonical: "https://www.attribix.app/resources/buy-now-pay-later-shopify-conversion" },
  openGraph: {
    title: "Should Shopify Stores Offer Buy Now, Pay Later?",
    description: "BNPL matters more when the purchase is expensive enough that affordability creates hesitation. Test it as a commercial change, not a magic CRO plugin.",
    url: "https://www.attribix.app/resources/buy-now-pay-later-shopify-conversion",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
