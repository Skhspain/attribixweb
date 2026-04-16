import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features — Ad Tracking, Attribution, Email, Reviews, SEO",
  description: "Attribix combines ad tracking, iOS-proof attribution, email marketing, review collection, social scheduling and SEO audits into one Shopify dashboard.",
  alternates: { canonical: "https://attribix.app/features" },
  openGraph: { title: "Features | Attribix", description: "All 6 tools Shopify stores need — in one dashboard.", url: "https://attribix.app/features" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
