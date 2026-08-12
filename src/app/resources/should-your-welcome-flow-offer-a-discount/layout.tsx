import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Should Your Welcome Flow Offer a Discount?",
  description: "A welcome discount can accelerate a first purchase.",
  alternates: { canonical: "https://www.attribix.app/resources/should-your-welcome-flow-offer-a-discount" },
  openGraph: {
    title: "Should Your Welcome Flow Offer a Discount?",
    description: "Free shipping, a small gift or exclusive access can create signup value without reducing the product price.",
    url: "https://www.attribix.app/resources/should-your-welcome-flow-offer-a-discount",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
