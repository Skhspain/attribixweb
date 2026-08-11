import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Ads Search Terms: What Should Ecommerce Advertisers Look For?",
  description:
    "How to read the Google Ads search terms report for a Shopify store — classifying intent, spotting wasted spend, finding overlooked opportunities, and judging queries by profit instead of CPC.",
  alternates: { canonical: "https://www.attribix.app/resources/google-ads-search-terms-ecommerce" },
  openGraph: {
    title: "Google Ads Search Terms: What Should Ecommerce Advertisers Look For?",
    description: "Keywords are what you targeted. Search terms are what you paid for. How to read the gap between them.",
    url: "https://www.attribix.app/resources/google-ads-search-terms-ecommerce",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
