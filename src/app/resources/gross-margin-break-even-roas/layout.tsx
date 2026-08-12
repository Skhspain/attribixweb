import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Gross Margin Changes Your Break-Even ROAS",
  description:
    "Break-even ROAS rises sharply as margin falls because less of each revenue dollar is available to pay for advertising. The simple formula, and why real break-even is often higher.",
  alternates: { canonical: "https://www.attribix.app/resources/gross-margin-break-even-roas" },
  openGraph: {
    title: "How Gross Margin Changes Your Break-Even ROAS",
    description: "Break-even ROAS = 1 ÷ gross margin. Payment fees, fulfilment and returns push the real number higher still.",
    url: "https://www.attribix.app/resources/gross-margin-break-even-roas",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
