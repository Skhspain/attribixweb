import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meta Ads ROAS Dropped Suddenly? Ads, Website or Tracking",
  description:
    "A sudden ROAS drop can mean real performance decline or a tracking gap making performance look worse than it is. Here's how to tell which one you're looking at.",
  alternates: { canonical: "https://www.attribix.app/resources/meta-ads-roas-dropped" },
  openGraph: {
    title: "Meta Ads ROAS Dropped Suddenly? Ads, Website or Tracking",
    description:
      "Before you rebuild the campaign, check whether Shopify revenue actually dropped too — or just what Meta is reporting.",
    url: "https://www.attribix.app/resources/meta-ads-roas-dropped",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
