import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify Attribution & Tracking Features | Attribix",
  description: "See what Attribix does for Shopify stores: an advertising dashboard with spend, revenue and ROAS, campaign review against a target, sales attribution, and Meta CAPI and Google server-side conversion tracking.",
  alternates: { canonical: "https://www.attribix.app/features" },
  openGraph: { title: "Shopify Attribution & Tracking Features | Attribix", description: "Attribution, server-side tracking, Meta CAPI, Google Ads tracking and ROAS reporting for Shopify stores.", url: "https://www.attribix.app/features", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }] },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
