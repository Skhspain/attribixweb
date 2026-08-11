import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Many Variations of a Winning Meta Ad Should You Make?",
  description:
    "There's no magic number. How to find the element that made a Meta ad win, iterate one layer at a time, and avoid burning a winning concept on cosmetic edits.",
  alternates: { canonical: "https://www.attribix.app/resources/how-many-variations-winning-meta-ad" },
  openGraph: {
    title: "How Many Variations of a Winning Meta Ad Should You Make?",
    description:
      "Discover why an ad won, then build a family of related creatives around it instead of copying it thirty times.",
    url: "https://www.attribix.app/resources/how-many-variations-winning-meta-ad",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
