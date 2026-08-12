import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What ROAS Do You Need With a 50% Gross Margin?",
  description: "At a true 50% margin before advertising, the simple break-even ROAS is:",
  alternates: { canonical: "https://www.attribix.app/resources/what-roas-do-you-need-with-a-50-percent-gross-margin" },
  openGraph: {
    title: "What ROAS Do You Need With a 50% Gross Margin?",
    description: "At 50%+ contribution, there may be room to scale at a lower ROAS than the account currently achieves.",
    url: "https://www.attribix.app/resources/what-roas-do-you-need-with-a-50-percent-gross-margin",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
