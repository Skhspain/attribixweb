import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Much of Your Meta Ads Budget Should Go to Retargeting?",
  description:
    "There's no fixed percentage that works for every store. Why retargeting budget should be set by audience size and saturation signals, not a copied rule.",
  alternates: { canonical: "https://www.attribix.app/resources/how-much-meta-ads-budget-retargeting" },
  openGraph: {
    title: "How Much of Your Meta Ads Budget Should Go to Retargeting?",
    description:
      "Audience volume, saturation signals and prospecting demand should set your retargeting budget, not a percentage borrowed from someone else's ad account.",
    url: "https://www.attribix.app/resources/how-much-meta-ads-budget-retargeting",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
