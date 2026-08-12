import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Does a Meta Ads Agency Actually Do?",
  description:
    "A real service-scope breakdown of Meta Ads agency work: account audits, creative testing, audience strategy, budget pacing, conversion tracking and reporting, not a sales pitch.",
  alternates: { canonical: "https://www.attribix.app/resources/what-does-a-meta-ads-agency-do" },
  openGraph: {
    title: "What Does a Meta Ads Agency Actually Do?",
    description:
      "Account structure, creative testing cadence, audience strategy, budget pacing, tracking setup and reporting: what the work actually involves, day to day.",
    url: "https://www.attribix.app/resources/what-does-a-meta-ads-agency-do",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
