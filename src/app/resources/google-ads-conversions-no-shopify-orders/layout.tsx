import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Ads Says I Have Conversions but Shopify Has No Orders",
  description:
    "Google Ads reporting conversions that don't show up as Shopify orders is almost always a configuration or labeling issue, not a fake conversion. What's usually behind it and how to identify which conversion action is actually firing.",
  alternates: { canonical: "https://www.attribix.app/resources/google-ads-conversions-no-shopify-orders" },
  openGraph: {
    title: "Google Ads Says I Have Conversions but Shopify Has No Orders",
    description: "Google Ads reporting conversions that don't show up as Shopify orders is almost always a configuration or labeling issue. Here's how to find which one.",
    url: "https://www.attribix.app/resources/google-ads-conversions-no-shopify-orders",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
