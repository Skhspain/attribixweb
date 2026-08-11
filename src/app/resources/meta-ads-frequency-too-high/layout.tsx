import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meta Ads Frequency Too High: When Does It Become a Problem?",
  description:
    "There's no universal frequency ceiling. How to pair frequency with CTR, CPA and reach to tell whether repeated exposure is actually hurting performance.",
  alternates: { canonical: "https://www.attribix.app/resources/meta-ads-frequency-too-high" },
  openGraph: {
    title: "Meta Ads Frequency Too High: When Does It Become a Problem?",
    description:
      "A frequency of 4 can be fine in one campaign and a real problem in another. What to check before reacting to the number alone.",
    url: "https://www.attribix.app/resources/meta-ads-frequency-too-high",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
