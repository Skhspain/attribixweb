import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meta Ads Shows Sales but Shopify Has No Matching Orders",
  description:
    "Meta reporting purchases that Shopify shows zero orders for is almost always a measurement configuration issue, not phantom sales. Here's the order to check things in.",
  alternates: { canonical: "https://www.attribix.app/resources/meta-ads-shows-sales-shopify-no-orders" },
  openGraph: {
    title: "Meta Ads Shows Sales but Shopify Has No Matching Orders",
    description:
      "A binary mismatch — Meta reports purchases, Shopify shows none — has a short list of real causes. Work through them in order.",
    url: "https://www.attribix.app/resources/meta-ads-shows-sales-shopify-no-orders",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
