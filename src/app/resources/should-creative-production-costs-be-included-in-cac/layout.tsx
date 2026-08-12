import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Should Creative Production Costs Be Included in CAC?",
  description: "If creative production exists primarily to acquire customers, it belongs somewhere in the cost of acquisition.",
  alternates: { canonical: "https://www.attribix.app/resources/should-creative-production-costs-be-included-in-cac" },
  openGraph: {
    title: "Should Creative Production Costs Be Included in CAC?",
    description: "Higher creative cost is not automatically bad.",
    url: "https://www.attribix.app/resources/should-creative-production-costs-be-included-in-cac",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
