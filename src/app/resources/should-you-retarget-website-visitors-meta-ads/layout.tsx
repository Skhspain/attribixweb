import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Should You Retarget Website Visitors on Meta Ads?",
  description:
    "Retargeting usually converts well because it advertises to people already unusually likely to buy. Why that inflates reported ROAS, and how to judge dedicated retargeting on incremental value instead.",
  alternates: { canonical: "https://www.attribix.app/resources/should-you-retarget-website-visitors-meta-ads" },
  openGraph: {
    title: "Should You Retarget Website Visitors on Meta Ads?",
    description:
      "The attribution trap behind impressive retargeting ROAS, when dedicated retargeting makes sense, and how to avoid drowning a warm audience.",
    url: "https://www.attribix.app/resources/should-you-retarget-website-visitors-meta-ads",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
