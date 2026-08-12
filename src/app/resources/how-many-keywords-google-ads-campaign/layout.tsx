import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Many Keywords Should a Google Ads Campaign Have?",
  description: "The correct number of keywords is the number needed to cover meaningful search intent without creating a structure you cannot manage.",
  alternates: { canonical: "https://www.attribix.app/resources/how-many-keywords-google-ads-campaign" },
  openGraph: {
    title: "How Many Keywords Should a Google Ads Campaign Have?",
    description: "Putting every product category into one generic ad group makes it harder to align search, ad and landing page.",
    url: "https://www.attribix.app/resources/how-many-keywords-google-ads-campaign",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
