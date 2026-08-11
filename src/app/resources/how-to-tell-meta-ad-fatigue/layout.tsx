import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Do You Know When a Meta Ad Is Fatigued?",
  description:
    "Ad fatigue gets blamed for problems it didn't cause. The signals that actually indicate fatigue, and how to rule out website, tracking or auction issues first.",
  alternates: { canonical: "https://www.attribix.app/resources/how-to-tell-meta-ad-fatigue" },
  openGraph: {
    title: "How Do You Know When a Meta Ad Is Fatigued?",
    description:
      "Frequency, CTR, CVR and CPM trends read together — not in isolation — separate genuine creative fatigue from other Meta Ads problems.",
    url: "https://www.attribix.app/resources/how-to-tell-meta-ad-fatigue",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
