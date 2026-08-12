import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Turn Customer Objections Into High-Converting Ads",
  description: "An objection is a reason a customer is interested but not yet comfortable buying.",
  alternates: { canonical: "https://www.attribix.app/resources/how-to-turn-customer-objections-into-high-converting" },
  openGraph: {
    title: "How to Turn Customer Objections Into High-Converting Ads",
    description: "Cold audiences may question relevance.",
    url: "https://www.attribix.app/resources/how-to-turn-customer-objections-into-high-converting",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
