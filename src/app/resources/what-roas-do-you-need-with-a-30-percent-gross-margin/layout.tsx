import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What ROAS Do You Need With a 30% Gross Margin?",
  description: "With a true 30% margin available before advertising, simple break-even ROAS is approximately:",
  alternates: { canonical: "https://www.attribix.app/resources/what-roas-do-you-need-with-a-30-percent-gross-margin" },
  openGraph: {
    title: "What ROAS Do You Need With a 30% Gross Margin?",
    description: "If new customers reliably reorder profitably, you may accept a first-order result below break-even as a deliberate acquisition investment.",
    url: "https://www.attribix.app/resources/what-roas-do-you-need-with-a-30-percent-gross-margin",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
