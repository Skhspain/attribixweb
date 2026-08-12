import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why a 400% ROAS Can Still Lose Money",
  description:
    "A 400% ROAS means $4 of attributed revenue for every $1 of ad spend. It says nothing about what the product costs to make and deliver. A worked example of thin margin eating the contribution.",
  alternates: { canonical: "https://www.attribix.app/resources/400-roas-profitable" },
  openGraph: {
    title: "Why a 400% ROAS Can Still Lose Money",
    description: "At 70% contribution margin, 400% can be extremely strong. At 20%, it may be below break-even.",
    url: "https://www.attribix.app/resources/400-roas-profitable",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
