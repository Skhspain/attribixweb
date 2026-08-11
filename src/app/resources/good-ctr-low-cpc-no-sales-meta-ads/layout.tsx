import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Good CTR and Low CPC but No Sales on Meta Ads: What's Wrong",
  description:
    "Attractive top-funnel metrics don't guarantee buyers. Why CTR measures the ad, not the customer, and how to tell curiosity clicks from buying intent.",
  alternates: { canonical: "https://www.attribix.app/resources/good-ctr-low-cpc-no-sales-meta-ads" },
  openGraph: {
    title: "Good CTR and Low CPC but No Sales on Meta Ads: What's Wrong",
    description:
      "A high CTR proves the ad is interesting. It doesn't prove the people clicking want to buy anything.",
    url: "https://www.attribix.app/resources/good-ctr-low-cpc-no-sales-meta-ads",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
