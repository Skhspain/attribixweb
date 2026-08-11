import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meta Ads Clicks but No Sales? Diagnose It First",
  description:
    "A step-by-step way to find where clicks stop turning into Shopify orders — ad-page mismatch, weak offer, checkout friction, or a tracking problem — before you touch the campaign.",
  alternates: { canonical: "https://www.attribix.app/resources/meta-ads-clicks-no-sales" },
  openGraph: {
    title: "Meta Ads Clicks but No Sales? Diagnose It First",
    description:
      "Clicks and no orders can mean five different things. Here's how to isolate which one before you rewrite the campaign.",
    url: "https://www.attribix.app/resources/meta-ads-clicks-no-sales",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
