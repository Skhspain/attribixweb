import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Should Advertising Agencies Optimize for ROAS or Profit?",
  description: "An agency can influence ROAS directly through advertising.",
  alternates: { canonical: "https://www.attribix.app/resources/should-advertising-agencies-optimize-for-roas-or-profit" },
  openGraph: {
    title: "Should Advertising Agencies Optimize for ROAS or Profit?",
    description: "Campaign teams can manage CPA/ROAS daily.",
    url: "https://www.attribix.app/resources/should-advertising-agencies-optimize-for-roas-or-profit",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
