import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Percentage Discount vs Fixed Discount: Which Works Better?",
  description: "“20% off” and “$20 off” can represent the same economic value on a $100 order and feel different to the customer.",
  alternates: { canonical: "https://www.attribix.app/resources/percentage-discount-vs-fixed-discount-which-works" },
  openGraph: {
    title: "Percentage Discount vs Fixed Discount: Which Works Better?",
    description: "The psychologically strongest offer is not automatically the financially strongest offer.",
    url: "https://www.attribix.app/resources/percentage-discount-vs-fixed-discount-which-works",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
