import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify Customers Reach Checkout but Don't Buy: What to Check",
  description:
    "Checkout-stage drop-off is narrower than cart abandonment: payment methods, shipping and tax calculation, localization and checkout errors. What to check specifically at this last step.",
  alternates: { canonical: "https://www.attribix.app/resources/shopify-checkout-no-purchase" },
  openGraph: {
    title: "Shopify Customers Reach Checkout but Don't Buy: What to Check",
    description: "The last-mile causes that stop a checkout in progress from finishing.",
    url: "https://www.attribix.app/resources/shopify-checkout-no-purchase",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
