import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Should You Scale a Winning Meta Ad or Duplicate It?",
  description:
    "Increasing budget and duplicating a campaign aren't interchangeable. When to raise spend on a winner, when duplication makes sense, and what scaling actually requires.",
  alternates: { canonical: "https://www.attribix.app/resources/scale-winning-meta-ad-or-duplicate" },
  openGraph: {
    title: "Should You Scale a Winning Meta Ad or Duplicate It?",
    description:
      "Duplicating a winning Meta ad doesn't clone its performance. What separates a genuine scaling test from unnecessary fragmentation.",
    url: "https://www.attribix.app/resources/scale-winning-meta-ad-or-duplicate",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
