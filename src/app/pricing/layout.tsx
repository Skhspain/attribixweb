import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — Plans from $39/month",
  description: "Simple, transparent pricing for Shopify stores. Starter at $39, Growth at $79, Pro at $149. All plans include server-side tracking and full attribution.",
  alternates: { canonical: "https://attribix.app/pricing" },
  openGraph: { title: "Pricing | Attribix", description: "Plans from $39/month. No hidden fees. Cancel anytime.", url: "https://attribix.app/pricing" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
