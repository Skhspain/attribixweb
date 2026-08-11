import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Ads Clicks But No Sales? What to Check First",
  description:
    "Clicks with no Shopify sales usually mean one of two different things: real demand isn't there, or Google Ads simply isn't reporting orders that did happen. How to tell which one you're looking at, and what to check next.",
  alternates: { canonical: "https://www.attribix.app/resources/google-ads-clicks-no-sales" },
  openGraph: {
    title: "Google Ads Clicks But No Sales? What to Check First",
    description: "How to tell a real demand problem apart from a tracking gap, and the diagnostic order to work through either one.",
    url: "https://www.attribix.app/resources/google-ads-clicks-no-sales",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
