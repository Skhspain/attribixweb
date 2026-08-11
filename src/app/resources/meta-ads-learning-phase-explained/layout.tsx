import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meta Ads Learning Phase Explained: Should You Worry About It?",
  description:
    "What the learning phase actually measures, what disrupts it, and why a campaign labeled \"Learning Limited\" isn't automatically a bad one. A practical read on delivery status vs. business outcome.",
  alternates: { canonical: "https://www.attribix.app/resources/meta-ads-learning-phase-explained" },
  openGraph: {
    title: "Meta Ads Learning Phase Explained: Should You Worry About It?",
    description:
      "Why learning exists, what disrupts it, and why judging performance against real business outcomes matters more than the delivery label.",
    url: "https://www.attribix.app/resources/meta-ads-learning-phase-explained",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
