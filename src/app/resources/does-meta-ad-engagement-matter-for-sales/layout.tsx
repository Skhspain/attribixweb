import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Does Meta Ad Engagement Actually Matter for Sales?",
  description:
    "Likes, comments and shares can be useful, or they can be a distraction from the metric that matters. When engagement predicts sales, and when it's just entertainment.",
  alternates: { canonical: "https://www.attribix.app/resources/does-meta-ad-engagement-matter-for-sales" },
  openGraph: {
    title: "Does Meta Ad Engagement Actually Matter for Sales?",
    description: "An ad with 10,000 likes and no profitable sales is not a successful sales ad.",
    url: "https://www.attribix.app/resources/does-meta-ad-engagement-matter-for-sales",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
