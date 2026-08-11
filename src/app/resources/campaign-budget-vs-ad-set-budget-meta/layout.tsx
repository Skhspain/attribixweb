import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meta Ads Campaign Budget vs Ad Set Budget: Which Should You Use?",
  description:
    "Campaign budget optimization and ad set budgets answer different questions. How to choose between them based on whether you need efficiency or control.",
  alternates: { canonical: "https://www.attribix.app/resources/campaign-budget-vs-ad-set-budget-meta" },
  openGraph: {
    title: "Meta Ads Campaign Budget vs Ad Set Budget: Which Should You Use?",
    description:
      "CBO lets Meta allocate spend toward the strongest opportunities; ad set budgets guarantee delivery. Which fits your goal.",
    url: "https://www.attribix.app/resources/campaign-budget-vs-ad-set-budget-meta",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
