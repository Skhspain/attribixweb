import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "When Should You Hire an Ecommerce Marketing Agency?",
  description:
    "Realistic signals it's time, and signals it isn't yet. Time spent in ad accounts, spend level, tracking uncertainty, multi-channel capacity, and when the real problem is the product, not the marketing.",
  alternates: { canonical: "https://www.attribix.app/resources/when-to-hire-a-marketing-agency" },
  openGraph: {
    title: "When Should You Hire an Ecommerce Marketing Agency?",
    description: "The signals worth acting on, and the ones that mean an agency won't fix the actual problem.",
    url: "https://www.attribix.app/resources/when-to-hire-a-marketing-agency",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
