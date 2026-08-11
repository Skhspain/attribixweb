import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meta Ads Broad Targeting vs Interests: What Works Better for Ecommerce?",
  description:
    "Broad and interest targeting solve different problems, not competing philosophies. When each one fits, why creative does some of the audience-selection work, and how to compare them on real outcomes.",
  alternates: { canonical: "https://www.attribix.app/resources/meta-ads-broad-vs-interest-targeting" },
  openGraph: {
    title: "Meta Ads Broad Targeting vs Interests: What Works Better for Ecommerce?",
    description:
      "Why broad targeting became attractive, when interests are still useful, and why the comparison should include more than CPM.",
    url: "https://www.attribix.app/resources/meta-ads-broad-vs-interest-targeting",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
