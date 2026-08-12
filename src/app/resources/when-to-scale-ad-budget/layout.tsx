import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Ads Are Profitable: When Should You Increase the Budget?",
  description:
    "A profitable campaign isn't automatically infinitely scalable. Marginal CPA, frequency, creative supply and fulfillment constraints: how to scale as a controlled test, not a one-time decision.",
  alternates: { canonical: "https://www.attribix.app/resources/when-to-scale-ad-budget" },
  openGraph: {
    title: "Your Ads Are Profitable: When Should You Increase the Budget?",
    description: "What actually limits how far a profitable campaign can scale.",
    url: "https://www.attribix.app/resources/when-to-scale-ad-budget",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
