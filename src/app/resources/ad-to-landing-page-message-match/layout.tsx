import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ad-to-Landing-Page Message Match: Why It Matters for Conversion Rate",
  description:
    "Paid advertising creates an expectation before the visitor reaches your store. Why the landing page must confirm it, and how message mismatch wastes strong ads.",
  alternates: { canonical: "https://www.attribix.app/resources/ad-to-landing-page-message-match" },
  openGraph: {
    title: "Ad-to-Landing-Page Message Match: Why It Matters for Conversion Rate",
    description: "Search/ad message, landing-page headline, product/offer, proof, CTA: each step should be the logical continuation of the last.",
    url: "https://www.attribix.app/resources/ad-to-landing-page-message-match",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
