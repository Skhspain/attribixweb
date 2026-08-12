import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Ads by Country: Should You Separate Campaigns?",
  description:
    "Separate Google campaigns by country when markets require different budgets, targets, feeds, language or economics, and when combining them is fine.",
  alternates: { canonical: "https://www.attribix.app/resources/separate-google-ads-campaigns-by-country" },
  openGraph: {
    title: "Google Ads by Country: Should You Separate Campaigns?",
    description: "Combining markets can be simpler when they genuinely behave alike. Here's how to tell the difference.",
    url: "https://www.attribix.app/resources/separate-google-ads-campaigns-by-country",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
