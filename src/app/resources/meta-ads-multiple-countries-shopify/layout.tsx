import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Should Shopify Stores Run Meta Ads in Multiple Countries?",
  description:
    "Adding countries to Meta can grow your audience or quietly hurt margin. What to check before expanding, and when to separate markets instead of combining them.",
  alternates: { canonical: "https://www.attribix.app/resources/meta-ads-multiple-countries-shopify" },
  openGraph: {
    title: "Should Shopify Stores Run Meta Ads in Multiple Countries?",
    description: "Yes, but only when the business can actually serve those countries competitively. Here's what to check first.",
    url: "https://www.attribix.app/resources/meta-ads-multiple-countries-shopify",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
