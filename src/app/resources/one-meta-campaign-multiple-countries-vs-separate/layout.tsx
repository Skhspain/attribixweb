import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "One Meta Campaign for Multiple Countries or Separate Campaigns?",
  description:
    "Combining countries gives Meta more data and freedom. Separating them gives you more control over budget and economics. How to choose the right structure.",
  alternates: { canonical: "https://www.attribix.app/resources/one-meta-campaign-multiple-countries-vs-separate" },
  openGraph: {
    title: "One Meta Campaign for Multiple Countries or Separate Campaigns?",
    description: "The right structure depends on how similar the markets actually are, not on which one is simpler to build.",
    url: "https://www.attribix.app/resources/one-meta-campaign-multiple-countries-vs-separate",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
