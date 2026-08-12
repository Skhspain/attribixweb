import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Many Ad Angles Should You Test Before Changing the Offer?",
  description: "There is no magic number of ad angles that proves an offer is bad.",
  alternates: { canonical: "https://www.attribix.app/resources/how-many-ad-angles-should-you-test-before-changing-the" },
  openGraph: {
    title: "How Many Ad Angles Should You Test Before Changing the Offer?",
    description: "Some teams produce 100 new ads because admitting the product or offer is weak is harder.",
    url: "https://www.attribix.app/resources/how-many-ad-angles-should-you-test-before-changing-the",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
