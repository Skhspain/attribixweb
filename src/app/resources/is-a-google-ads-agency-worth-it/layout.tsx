import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Is a Google Ads Agency Worth It?",
  description: "A Google Ads agency becomes valuable when the account is important enough that search terms, Shopping feeds, bidding, tracking and budget decisions deserve specialist attention.",
  alternates: { canonical: "https://www.attribix.app/resources/is-a-google-ads-agency-worth-it" },
  openGraph: {
    title: "Is a Google Ads Agency Worth It?",
    description: "Compare total cost, management time, missed opportunities and risk of bad tracking.",
    url: "https://www.attribix.app/resources/is-a-google-ads-agency-worth-it",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
