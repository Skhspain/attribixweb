import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "When Is Your Meta Ads Account Ready to Optimize for Purchases?",
  description:
    "You don't need weeks of traffic or add-to-cart campaigns before optimizing for purchases. What actually determines whether the purchase event is a usable signal from day one.",
  alternates: { canonical: "https://www.attribix.app/resources/when-meta-ads-account-ready-optimize-purchases" },
  openGraph: {
    title: "When Is Your Meta Ads Account Ready to Optimize for Purchases?",
    description:
      "A new account with clean tracking is in a better position than an old account with thousands of misleading events.",
    url: "https://www.attribix.app/resources/when-meta-ads-account-ready-optimize-purchases",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
