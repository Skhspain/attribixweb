import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Ads Clicks Don't Match Shopify Sessions: Why?",
  description:
    "A gap between reported Google Ads clicks and Shopify sessions is normal to a degree. What causes it, and why the ratio matters more than chasing an exact match.",
  alternates: { canonical: "https://www.attribix.app/resources/google-ads-clicks-vs-shopify-sessions" },
  openGraph: {
    title: "Google Ads Clicks Don't Match Shopify Sessions: Why?",
    description: "A click and a session are counted by two different systems, measuring two different things.",
    url: "https://www.attribix.app/resources/google-ads-clicks-vs-shopify-sessions",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
