import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Ads and GA4 Don't Match: Which Numbers Should You Trust?",
  description:
    "Google Ads and GA4 report different conversion counts because they run different attribution models on different data. What actually causes the gap, and which number to use for what decision.",
  alternates: { canonical: "https://www.attribix.app/resources/google-ads-ga4-dont-match" },
  openGraph: {
    title: "Google Ads and GA4 Don't Match: Which Numbers Should You Trust?",
    description: "Google Ads and GA4 report different conversion counts because they run different attribution models on different data. Here's why, and which number to use for what.",
    url: "https://www.attribix.app/resources/google-ads-ga4-dont-match",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
