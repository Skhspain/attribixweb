import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Ads Search Impression Share Explained for Ecommerce",
  description: "Search impression share estimates how often your ads appeared compared with the number of times Google believed they were eligible to appear.",
  alternates: { canonical: "https://www.attribix.app/resources/google-ads-search-impression-share-explained" },
  openGraph: {
    title: "Google Ads Search Impression Share Explained for Ecommerce",
    description: "Ask: Are profitable campaigns losing share due to budget?",
    url: "https://www.attribix.app/resources/google-ads-search-impression-share-explained",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
