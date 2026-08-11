import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Is Your Google Ads Brand Campaign Taking Credit for Organic Sales?",
  description:
    "A branded search campaign can report enormous ROAS while creating little incremental revenue. How to check whether paid clicks are just replacing organic ones.",
  alternates: { canonical: "https://www.attribix.app/resources/google-brand-campaign-taking-credit-organic-sales" },
  openGraph: {
    title: "Is Your Google Ads Brand Campaign Taking Credit for Organic Sales?",
    description: "Would the shopper have clicked the organic listing underneath and purchased anyway?",
    url: "https://www.attribix.app/resources/google-brand-campaign-taking-credit-organic-sales",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
