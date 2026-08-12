import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Should You Use Sticky Add-to-Cart Buttons on Shopify?",
  description:
    "When a sticky Add-to-Cart bar helps a long Shopify product page, when it becomes intrusive, and why you should watch the whole funnel rather than just button clicks.",
  alternates: { canonical: "https://www.attribix.app/resources/sticky-add-to-cart-shopify-conversion" },
  openGraph: {
    title: "Should You Use Sticky Add-to-Cart Buttons on Shopify?",
    description: "Sticky purchase controls can help long mobile product pages, or become another intrusive bar fighting for screen space.",
    url: "https://www.attribix.app/resources/sticky-add-to-cart-shopify-conversion",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
