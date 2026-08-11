import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Meta Ads Performance Changes After Increasing the Budget",
  description:
    "A campaign that hits a $30 CPA at $200 a day isn't guaranteed to hold it at $2,000. Why scaling spend changes the auction, and how to judge marginal ROAS instead of the old blended number.",
  alternates: { canonical: "https://www.attribix.app/resources/meta-ads-performance-changes-after-budget-increase" },
  openGraph: {
    title: "Why Meta Ads Performance Changes After Increasing the Budget",
    description:
      "Scaling changes the opportunity set Meta is bidding into. Performance shifting after a budget increase is often normal economics, not proof the campaign broke.",
    url: "https://www.attribix.app/resources/meta-ads-performance-changes-after-budget-increase",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
