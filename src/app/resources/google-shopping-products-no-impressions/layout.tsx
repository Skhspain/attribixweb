import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Some Shopify Products Never Get Google Shopping Impressions",
  description: "A product can be approved in Merchant Center and still receive almost no Shopping impressions.",
  alternates: { canonical: "https://www.attribix.app/resources/google-shopping-products-no-impressions" },
  openGraph: {
    title: "Why Some Shopify Products Never Get Google Shopping Impressions",
    description: "Review: country/feed targeting; product status; disapprovals or warnings; campaign listing groups; excluded products; inventory; Merchant Center diagnostics.",
    url: "https://www.attribix.app/resources/google-shopping-products-no-impressions",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
