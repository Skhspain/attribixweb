import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Does Free Shipping Increase Shopify Conversion Rate?",
  description: "Free shipping can increase conversion because it removes one of ecommerce's most disliked surprises.",
  alternates: { canonical: "https://www.attribix.app/resources/does-free-shipping-increase-conversion-rate" },
  openGraph: {
    title: "Does Free Shipping Increase Shopify Conversion Rate?",
    description: "If shipping is free or free over a threshold, tell customers before checkout.",
    url: "https://www.attribix.app/resources/does-free-shipping-increase-conversion-rate",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
