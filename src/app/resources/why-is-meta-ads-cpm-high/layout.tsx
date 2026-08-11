import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Is Your Meta Ads CPM So High?",
  description:
    "CPM rising isn't automatically a problem. What actually drives it, and why CPA and ROAS matter more than the CPM number on its own.",
  alternates: { canonical: "https://www.attribix.app/resources/why-is-meta-ads-cpm-high" },
  openGraph: {
    title: "Why Is Your Meta Ads CPM So High?",
    description:
      "Geography, competition, seasonality, creative relevance and objective all move CPM. Here's how to tell if it's actually hurting you.",
    url: "https://www.attribix.app/resources/why-is-meta-ads-cpm-high",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
