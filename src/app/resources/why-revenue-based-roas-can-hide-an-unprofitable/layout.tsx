import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Revenue-Based ROAS Can Hide an Unprofitable Business",
  description: "Revenue-based ROAS treats every dollar of sales as equally valuable.",
  alternates: { canonical: "https://www.attribix.app/resources/why-revenue-based-roas-can-hide-an-unprofitable" },
  openGraph: {
    title: "Why Revenue-Based ROAS Can Hide an Unprofitable Business",
    description: "Track platform ROAS for optimization, but add:",
    url: "https://www.attribix.app/resources/why-revenue-based-roas-can-hide-an-unprofitable",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
