import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Is a Good Google Ads Conversion Rate for Ecommerce?",
  description: "A \"good\" Google Ads conversion rate is the rate that produces profitable customers at the traffic cost you are paying.",
  alternates: { canonical: "https://www.attribix.app/resources/good-google-ads-conversion-rate-ecommerce" },
  openGraph: {
    title: "What Is a Good Google Ads Conversion Rate for Ecommerce?",
    description: "Your historical conversion rate segmented by campaign, market, device and new/returning customer is often more useful than a generic benchmark.",
    url: "https://www.attribix.app/resources/good-google-ads-conversion-rate-ecommerce",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
