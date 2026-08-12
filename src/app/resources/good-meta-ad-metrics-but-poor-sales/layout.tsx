import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Good Meta Ad Metrics but Poor Sales? Here's Why",
  description:
    "An ad can have an excellent hook rate, watch time and CTR and still be a poor sales ad. Creative metrics describe attention: revenue requires the right attention.",
  alternates: { canonical: "https://www.attribix.app/resources/good-meta-ad-metrics-but-poor-sales" },
  openGraph: {
    title: "Good Meta Ad Metrics but Poor Sales? Here's Why",
    description:
      "Hook rate, watch time and CTR are diagnostic, not goals. How to follow traffic after the click to find where a well-performing ad is failing commercially.",
    url: "https://www.attribix.app/resources/good-meta-ad-metrics-but-poor-sales",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
