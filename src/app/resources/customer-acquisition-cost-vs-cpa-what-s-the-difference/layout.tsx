import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Acquisition Cost vs CPA: What's the Difference?",
  description: "CPA and CAC are often used interchangeably, but they can describe different scopes.",
  alternates: { canonical: "https://www.attribix.app/resources/customer-acquisition-cost-vs-cpa-what-s-the-difference" },
  openGraph: {
    title: "Customer Acquisition Cost vs CPA: What's the Difference?",
    description: "A $40 Meta CPA and a $70 company CAC can both be correct because they measure different things.",
    url: "https://www.attribix.app/resources/customer-acquisition-cost-vs-cpa-what-s-the-difference",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
