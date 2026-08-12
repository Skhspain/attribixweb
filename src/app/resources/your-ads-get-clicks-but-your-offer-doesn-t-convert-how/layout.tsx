import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Ads Get Clicks but Your Offer Doesn't Convert: How to Tell",
  description: "When ads get qualified clicks and the website works technically, the problem may be the offer itself.",
  alternates: { canonical: "https://www.attribix.app/resources/your-ads-get-clicks-but-your-offer-doesn-t-convert-how" },
  openGraph: {
    title: "Your Ads Get Clicks but Your Offer Doesn't Convert: How to Tell",
    description: "A new ad headline will not solve an uncompetitive offer.",
    url: "https://www.attribix.app/resources/your-ads-get-clicks-but-your-offer-doesn-t-convert-how",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
