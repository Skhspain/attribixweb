import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "iOS, Ad Blockers and Privacy: How Much Shopify Tracking Are You Losing?",
  description:
    "Safari's Intelligent Tracking Prevention, ad blockers and privacy defaults each remove a share of Shopify's browser-based ad tracking. What's actually happening, what it does to reported ROAS, and what server-side tracking can and can't fix.",
  alternates: { canonical: "https://www.attribix.app/resources/ios-ad-blockers-shopify-tracking-loss" },
  openGraph: {
    title: "iOS, Ad Blockers and Privacy: How Much Shopify Tracking Are You Losing?",
    description:
      "Why some real Shopify orders never reach Meta or Google's ads reporting at all, and an honest look at what server-side tracking recovers versus what it can't.",
    url: "https://www.attribix.app/resources/ios-ad-blockers-shopify-tracking-loss",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
