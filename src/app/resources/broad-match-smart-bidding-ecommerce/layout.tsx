import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Should Ecommerce Stores Use Broad Match With Smart Bidding?",
  description: "Broad match with automated bidding can discover valuable searches you would never build manually.",
  alternates: { canonical: "https://www.attribix.app/resources/broad-match-smart-bidding-ecommerce" },
  openGraph: {
    title: "Should Ecommerce Stores Use Broad Match With Smart Bidding?",
    description: "The relevant question is not whether broad match is theoretically good.",
    url: "https://www.attribix.app/resources/broad-match-smart-bidding-ecommerce",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
