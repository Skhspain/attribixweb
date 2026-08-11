import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Meta and Google Both Claim the Same Shopify Sale",
  description:
    "Meta and Google Ads often report more combined revenue than Shopify actually took in. Why both platforms can claim the same order, and why summing their numbers is the wrong fix.",
  alternates: { canonical: "https://www.attribix.app/resources/ad-platforms-report-more-revenue-than-shopify" },
  openGraph: {
    title: "Why Meta and Google Both Claim the Same Shopify Sale",
    description:
      "Overlapping attribution windows and view-through credit let two platforms take credit for one order. What to check instead of adding platform numbers together.",
    url: "https://www.attribix.app/resources/ad-platforms-report-more-revenue-than-shopify",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
