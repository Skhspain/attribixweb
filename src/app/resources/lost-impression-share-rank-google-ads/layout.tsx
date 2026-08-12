import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lost Impression Share Due to Rank: What Should You Fix?",
  description: "When Google reports lost impression share due to rank, your campaign was eligible for searches but did not have enough Ad Rank to win all of the impressions.",
  alternates: { canonical: "https://www.attribix.app/resources/lost-impression-share-rank-google-ads" },
  openGraph: {
    title: "Lost Impression Share Due to Rank: What Should You Fix?",
    description: "Compare lost rank across campaigns and themes.",
    url: "https://www.attribix.app/resources/lost-impression-share-rank-google-ads",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
