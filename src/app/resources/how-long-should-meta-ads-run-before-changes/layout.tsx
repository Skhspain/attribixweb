import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Long Should You Let Meta Ads Run Before Making Changes?",
  description:
    "There's no fixed number of days. How to judge whether a Meta campaign has collected enough data to act on, and the failure signs worth checking immediately instead of waiting.",
  alternates: { canonical: "https://www.attribix.app/resources/how-long-should-meta-ads-run-before-changes" },
  openGraph: {
    title: "How Long Should You Let Meta Ads Run Before Making Changes?",
    description:
      "Why the right waiting period depends on data volume, not the clock, and how to tell patience from passivity.",
    url: "https://www.attribix.app/resources/how-long-should-meta-ads-run-before-changes",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
