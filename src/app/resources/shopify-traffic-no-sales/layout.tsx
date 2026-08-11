import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify Traffic but No Sales? Find Where the Funnel Is Breaking",
  description:
    "Sessions are up but orders aren't. A stage-by-stage way to read your Shopify funnel — product views, add-to-cart, checkout — and find exactly where visitors are dropping off.",
  alternates: { canonical: "https://www.attribix.app/resources/shopify-traffic-no-sales" },
  openGraph: {
    title: "Shopify Traffic but No Sales? Find Where the Funnel Is Breaking",
    description:
      "A diagnostic walkthrough of the Shopify funnel — sessions, product views, add-to-cart, checkout, purchase — to find exactly where traffic is falling out.",
    url: "https://www.attribix.app/resources/shopify-traffic-no-sales",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
