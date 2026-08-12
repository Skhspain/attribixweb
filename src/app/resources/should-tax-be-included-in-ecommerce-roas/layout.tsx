import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Should Tax Be Included in Ecommerce ROAS?",
  description: "Tax collected from the customer is usually money the business collects on behalf of a tax authority rather than economic revenue it gets to keep.",
  alternates: { canonical: "https://www.attribix.app/resources/should-tax-be-included-in-ecommerce-roas" },
  openGraph: {
    title: "Should Tax Be Included in Ecommerce ROAS?",
    description: "VAT/sales-tax treatment differs by market and accounting setup.",
    url: "https://www.attribix.app/resources/should-tax-be-included-in-ecommerce-roas",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
