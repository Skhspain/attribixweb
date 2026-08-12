import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Should Be Included in a Meta Ads Management Service?",
  description: "Meta Ads management should cover more than turning campaigns on and off.",
  alternates: { canonical: "https://www.attribix.app/resources/what-should-be-included-in-a-meta-ads-management" },
  openGraph: {
    title: "What Should Be Included in a Meta Ads Management Service?",
    description: "ROAS, CPA and platform purchases matter, but Shopify revenue, new customers and margin should influence interpretation.",
    url: "https://www.attribix.app/resources/what-should-be-included-in-a-meta-ads-management",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
