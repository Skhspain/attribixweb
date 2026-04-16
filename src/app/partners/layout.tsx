import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner Program — Earn 15–25% Recurring Commission",
  description: "Join the Attribix partner program. Earn recurring commissions by referring Shopify stores. Affiliate, Silver and Gold tiers with co-branded reports and priority support.",
  alternates: { canonical: "https://attribix.app/partners" },
  openGraph: { title: "Partner Program | Attribix", description: "Earn 15–25% recurring commission referring Shopify stores.", url: "https://attribix.app/partners" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
