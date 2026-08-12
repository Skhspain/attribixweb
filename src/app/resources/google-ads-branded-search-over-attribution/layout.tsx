import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Does Google Ads Over-Attribute Branded Searches?",
  description:
    "Google Ads can validly credit a branded search click while still overstating its incremental value. Why attribution and incrementality diverge on brand campaigns, and how to test the difference.",
  alternates: { canonical: "https://www.attribix.app/resources/google-ads-branded-search-over-attribution" },
  openGraph: {
    title: "Does Google Ads Over-Attribute Branded Searches?",
    description: "A branded click can be attributed correctly and still not be incremental. Here's how to tell the difference.",
    url: "https://www.attribix.app/resources/google-ads-branded-search-over-attribution",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
