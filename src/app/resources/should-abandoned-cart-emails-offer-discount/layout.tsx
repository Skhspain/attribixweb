import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Should You Offer a Discount in Your Abandoned Cart Emails?",
  description:
    "A discount can recover carts, but it can also teach customers to abandon on purpose. When an incentive is commercially sensible, and how to calculate its real cost.",
  alternates: { canonical: "https://www.attribix.app/resources/should-abandoned-cart-emails-offer-discount" },
  openGraph: {
    title: "Should You Offer a Discount in Your Abandoned Cart Emails?",
    description: "A discount should be a deliberate recovery tool, not the automatic final email in every template.",
    url: "https://www.attribix.app/resources/should-abandoned-cart-emails-offer-discount",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
