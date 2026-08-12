import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Increase Shopify Average Order Value Without Hurting Conversion Rate",
  description:
    "Increasing AOV is only useful if customers still buy: natural cross-sells, thresholds, bundles and why too many upsell popups can turn a simple purchase into a negotiation.",
  alternates: { canonical: "https://www.attribix.app/resources/increase-shopify-average-order-value" },
  openGraph: {
    title: "How to Increase Shopify Average Order Value Without Hurting Conversion Rate",
    description: "An upsell strategy that raises average basket size while reducing the number of orders can leave revenue or profit unchanged.",
    url: "https://www.attribix.app/resources/increase-shopify-average-order-value",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
