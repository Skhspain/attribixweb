import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Much Data Does Meta Ads Need Before You Can Judge Performance?",
  description:
    "There's no magic number of clicks or conversions. How to match your confidence to the amount of evidence you actually have, and relate spend to your target CPA before judging an ad.",
  alternates: { canonical: "https://www.attribix.app/resources/how-much-data-does-meta-ads-need" },
  openGraph: {
    title: "How Much Data Does Meta Ads Need Before You Can Judge Performance?",
    description:
      "Why ten clicks tell you almost nothing, and how to judge creative, offer and profitability with the right amount of evidence for each.",
    url: "https://www.attribix.app/resources/how-much-data-does-meta-ads-need",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
