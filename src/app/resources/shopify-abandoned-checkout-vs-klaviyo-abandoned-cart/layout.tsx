import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify Abandoned Checkout vs Klaviyo Abandoned Cart: Why the Numbers Differ",
  description:
    "Shopify and Klaviyo count different abandonment stages, audiences and eligibility rules. How to compare event definitions before diagnosing a broken integration.",
  alternates: { canonical: "https://www.attribix.app/resources/shopify-abandoned-checkout-vs-klaviyo-abandoned-cart" },
  openGraph: {
    title: "Shopify Abandoned Checkout vs Klaviyo Abandoned Cart: Why the Numbers Differ",
    description: "Two systems can both be correct while counting different populations.",
    url: "https://www.attribix.app/resources/shopify-abandoned-checkout-vs-klaviyo-abandoned-cart",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
