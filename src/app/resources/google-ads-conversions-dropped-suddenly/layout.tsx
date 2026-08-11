import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Ads Conversions Suddenly Dropped: Performance or Tracking?",
  description:
    "A sudden drop in Google Ads conversions is either a real sales problem or a tracking problem, and the two look almost identical from inside Ads Manager alone. How to tell them apart using signals Google Ads doesn't control.",
  alternates: { canonical: "https://www.attribix.app/resources/google-ads-conversions-dropped-suddenly" },
  openGraph: {
    title: "Google Ads Conversions Suddenly Dropped: Performance or Tracking?",
    description: "A sudden drop in Google Ads conversions is either a real sales problem or a tracking problem. Here's how to tell them apart.",
    url: "https://www.attribix.app/resources/google-ads-conversions-dropped-suddenly",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
