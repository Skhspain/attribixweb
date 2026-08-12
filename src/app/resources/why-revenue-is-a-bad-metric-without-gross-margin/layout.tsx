import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Revenue Is a Bad Metric Without Gross Margin",
  description: "Revenue tells you how much customers paid.",
  alternates: { canonical: "https://www.attribix.app/resources/why-revenue-is-a-bad-metric-without-gross-margin" },
  openGraph: {
    title: "Why Revenue Is a Bad Metric Without Gross Margin",
    description: "Gross margin is a strong starting point, but include payment, fulfilment, shipping subsidy and returns when they materially vary per order.",
    url: "https://www.attribix.app/resources/why-revenue-is-a-bad-metric-without-gross-margin",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
