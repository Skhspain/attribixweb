import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Calculate True ROAS on Shopify",
  description:
    "Platform ROAS, blended ROAS and true ROAS are three different numbers. How cross-channel overlap, refunds, discounts and revenue windows separate what you spent from what you actually made.",
  alternates: { canonical: "https://www.attribix.app/resources/true-roas-shopify" },
  openGraph: {
    title: "How to Calculate True ROAS on Shopify",
    description: "Platform ROAS vs. blended ROAS vs. true ROAS, and what actually separates them.",
    url: "https://www.attribix.app/resources/true-roas-shopify",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
