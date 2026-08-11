import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify Attribution & Tracking Features | Attribix",
  description: "Explore Attribix features for Shopify attribution, Meta and Google conversion tracking, server-side events, ROAS reporting and campaign measurement.",
  alternates: { canonical: "https://www.attribix.app/features" },
  openGraph: { title: "Shopify Attribution & Tracking Features | Attribix", description: "Attribution, server-side tracking, Meta CAPI, Google Ads tracking and ROAS reporting for Shopify stores.", url: "https://www.attribix.app/features" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
