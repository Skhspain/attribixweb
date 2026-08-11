import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Tell Whether Your Meta Ad Creative Is the Problem",
  description:
    "A way to diagnose whether weak Meta Ads performance is a creative problem or a funnel problem further downstream, before you replace anything.",
  alternates: { canonical: "https://www.attribix.app/resources/how-to-tell-meta-ad-creative-problem" },
  openGraph: {
    title: "How to Tell Whether Your Meta Ad Creative Is the Problem",
    description:
      "CTR, CPC and funnel signals that show whether the ad or the website is behind a Meta Ads slump, and how to compare creatives fairly.",
    url: "https://www.attribix.app/resources/how-to-tell-meta-ad-creative-problem",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
