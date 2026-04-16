import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Simple, transparent pricing for Shopify stores. Start free for 14 days, no credit card required.",
  alternates: { canonical: "https://attribix.app/pricing" },
  openGraph: { url: "https://attribix.app/pricing" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
