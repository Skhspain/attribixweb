import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Much of Performance Max Revenue Comes From Brand Searches?",
  description: "There is no universal percentage.",
  alternates: { canonical: "https://www.attribix.app/resources/performance-max-brand-revenue" },
  openGraph: {
    title: "How Much of Performance Max Revenue Comes From Brand Searches?",
    description: "Very high PMax ROAS, strong returning-customer volume and weak non-brand Search performance can be clues that brand demand is contributing heavily.",
    url: "https://www.attribix.app/resources/performance-max-brand-revenue",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
