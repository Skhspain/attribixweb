import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Much Budget Should Go to Brand vs Non-Brand Google Ads?",
  description:
    "There's no rule that says 10% belongs to brand and 90% to non-brand. Brand demand is constrained by how many people already search for you: let marginal opportunity set the split.",
  alternates: { canonical: "https://www.attribix.app/resources/google-ads-brand-vs-non-brand-budget" },
  openGraph: {
    title: "How Much Budget Should Go to Brand vs Non-Brand Google Ads?",
    description: "Why brand and non-brand shouldn't be judged against the same efficiency expectation.",
    url: "https://www.attribix.app/resources/google-ads-brand-vs-non-brand-budget",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
