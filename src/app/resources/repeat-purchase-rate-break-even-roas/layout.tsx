import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why High Repeat Purchase Rate Changes Your Break-Even ROAS",
  description:
    "A store with strong retention can afford a lower first-order ROAS than a business where every customer buys once, but the first order's math never changes.",
  alternates: { canonical: "https://www.attribix.app/resources/repeat-purchase-rate-break-even-roas" },
  openGraph: {
    title: "Why High Repeat Purchase Rate Changes Your Break-Even ROAS",
    description: "Retention turns ROAS from an order-level metric into a customer-economics discussion.",
    url: "https://www.attribix.app/resources/repeat-purchase-rate-break-even-roas",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
