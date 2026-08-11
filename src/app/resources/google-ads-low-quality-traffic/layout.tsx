import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Google Search Ads Get Clicks but Low-Quality Traffic",
  description:
    "A click from a search engine isn't automatically high intent. Poor traffic usually comes from a mismatch between the keyword, the actual search term and the landing page.",
  alternates: { canonical: "https://www.attribix.app/resources/google-ads-low-quality-traffic" },
  openGraph: {
    title: "Why Google Search Ads Get Clicks but Low-Quality Traffic",
    description: "Clearer intent mapping — search term, ad, landing page, offer — beats simply narrowing keywords.",
    url: "https://www.attribix.app/resources/google-ads-low-quality-traffic",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
