import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Should Meta Ads Get Credit for Returning Customer Purchases?",
  description:
    "Meta can legitimately claim a returning-customer conversion under its attribution model, but that doesn't mean the ad caused the purchase. How to separate acquisition from retention in your reporting.",
  alternates: { canonical: "https://www.attribix.app/resources/should-meta-ads-get-credit-returning-customers" },
  openGraph: {
    title: "Should Meta Ads Get Credit for Returning Customer Purchases?",
    description: "Sometimes yes, sometimes only partly. Do not confuse repeat-customer attribution with new-customer acquisition.",
    url: "https://www.attribix.app/resources/should-meta-ads-get-credit-returning-customers",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
