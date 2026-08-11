import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meta Ads Sales Drop on Weekends: Is That Normal?",
  description:
    "Weekend Meta Ads performance can look worse than weekdays without anything being broken. How to tell a real day-of-week pattern apart from ordinary week-to-week noise.",
  alternates: { canonical: "https://www.attribix.app/resources/meta-ads-sales-drop-weekends" },
  openGraph: {
    title: "Meta Ads Sales Drop on Weekends: Is That Normal?",
    description:
      "The question isn't whether Saturday's ROAS is lower. It's whether the pattern is consistent enough across enough weekends to act on.",
    url: "https://www.attribix.app/resources/meta-ads-sales-drop-weekends",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
