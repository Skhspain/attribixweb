import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Shopping Feed Optimization: What Actually Matters?",
  description: "Feed optimization is often sold as a bag of hacks.",
  alternates: { canonical: "https://www.attribix.app/resources/google-shopping-feed-optimization" },
  openGraph: {
    title: "Google Shopping Feed Optimization: What Actually Matters?",
    description: "The best feed is not the one with the most attributes filled for vanity.",
    url: "https://www.attribix.app/resources/google-shopping-feed-optimization",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
