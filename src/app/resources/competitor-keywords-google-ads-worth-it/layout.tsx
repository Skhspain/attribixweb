import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Are Competitor Keywords Worth Bidding on in Google Ads?",
  description:
    "Competitor keywords put your brand in front of people already shopping your category, at a real cost in CTR and conversion rate. When they make commercial sense.",
  alternates: { canonical: "https://www.attribix.app/resources/competitor-keywords-google-ads-worth-it" },
  openGraph: {
    title: "Are Competitor Keywords Worth Bidding on in Google Ads?",
    description: "The intent behind a competitor-name search isn't neutral — what that costs you and when it's still worth it.",
    url: "https://www.attribix.app/resources/competitor-keywords-google-ads-worth-it",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
