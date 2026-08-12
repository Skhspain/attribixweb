import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Increase Repeat Purchase Rate Without Constant Discounts",
  description: "Discounts can create a second order quickly, but a retention strategy built entirely on cheaper prices becomes difficult to sustain.",
  alternates: { canonical: "https://www.attribix.app/resources/how-to-increase-repeat-purchase-rate-without-constant" },
  openGraph: {
    title: "How to Increase Repeat Purchase Rate Without Constant Discounts",
    description: "Measure whether newer customers are repeating more often at 30/60/90/180 days.",
    url: "https://www.attribix.app/resources/how-to-increase-repeat-purchase-rate-without-constant",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
