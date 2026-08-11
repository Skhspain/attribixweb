import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meta Ads Cost Per Purchase Increasing: What to Check",
  description:
    "A rising Meta cost per purchase can come from CPC, conversion rate or tracking. How to split the number apart and find which one actually moved.",
  alternates: { canonical: "https://www.attribix.app/resources/meta-ads-cost-per-purchase-increasing" },
  openGraph: {
    title: "Meta Ads Cost Per Purchase Increasing: What to Check",
    description:
      "Cost per purchase is an outcome, not a cause. How to check CPC, CTR, CPM, Shopify conversion rate and tracking before reacting.",
    url: "https://www.attribix.app/resources/meta-ads-cost-per-purchase-increasing",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
