import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Should Retargeting Campaigns Include Existing Customers?",
  description:
    "Sometimes. The answer depends on what the campaign is selling: excluding purchasers when the ad is irrelevant, including them when repeat purchase makes sense.",
  alternates: { canonical: "https://www.attribix.app/resources/should-retargeting-include-existing-customers" },
  openGraph: {
    title: "Should Retargeting Campaigns Include Existing Customers?",
    description: "The decision should follow customer relevance, not a blanket always-exclude-purchasers rule.",
    url: "https://www.attribix.app/resources/should-retargeting-include-existing-customers",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
