import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Is Your Shopify Discount Code Box Hurting Conversion Rate?",
  description:
    "A visible discount-code field can tell a full-price customer they're paying more than someone else. Here's when to reduce its emphasis, and how automatic promotions can be cleaner.",
  alternates: { canonical: "https://www.attribix.app/resources/discount-code-box-checkout-conversion" },
  openGraph: {
    title: "Is Your Shopify Discount Code Box Hurting Conversion Rate?",
    description: "The objective is not to hide valid promotions. It is to avoid making full-price customers feel they missed one.",
    url: "https://www.attribix.app/resources/discount-code-box-checkout-conversion",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
