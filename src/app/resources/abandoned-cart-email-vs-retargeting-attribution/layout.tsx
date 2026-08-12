import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abandoned Cart Email vs Meta Retargeting: Which Should Get the Credit?",
  description:
    "A cart abandoner can be recovered by email or by a Meta retargeting ad, and both systems may claim the sale. Why the right question is incremental recovery, not credit.",
  alternates: { canonical: "https://www.attribix.app/resources/abandoned-cart-email-vs-retargeting-attribution" },
  openGraph: {
    title: "Abandoned Cart Email vs Meta Retargeting: Which Should Get the Credit?",
    description: "One Shopify order remains one order regardless of how many recovery channels interacted with it.",
    url: "https://www.attribix.app/resources/abandoned-cart-email-vs-retargeting-attribution",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
