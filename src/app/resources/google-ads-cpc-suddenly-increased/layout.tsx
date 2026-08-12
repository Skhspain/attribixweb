import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Your Google Ads CPC Suddenly Increased",
  description: "A sudden CPC increase is an auction symptom.",
  alternates: { canonical: "https://www.attribix.app/resources/google-ads-cpc-suddenly-increased" },
  openGraph: {
    title: "Why Your Google Ads CPC Suddenly Increased",
    description: "Automated bidding may increase bids for users or queries it predicts are more valuable.",
    url: "https://www.attribix.app/resources/google-ads-cpc-suddenly-increased",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
