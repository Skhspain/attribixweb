import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Google Ads and Shopify Revenue Don't Match",
  description:
    "Conversion windows, conversion date vs. order date, duplicate conversion actions, refunds and enhanced conversions all move the gap between Google Ads' reported revenue and Shopify's.",
  alternates: { canonical: "https://www.attribix.app/resources/google-ads-shopify-revenue-doesnt-match" },
  openGraph: {
    title: "Why Google Ads and Shopify Revenue Don't Match",
    description: "What actually causes the gap between Google Ads revenue and Shopify order revenue.",
    url: "https://www.attribix.app/resources/google-ads-shopify-revenue-doesnt-match",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
