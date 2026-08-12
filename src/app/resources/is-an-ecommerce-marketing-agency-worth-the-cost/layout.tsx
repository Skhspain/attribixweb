import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Is an Ecommerce Marketing Agency Worth the Cost?",
  description: "An ecommerce agency is worth the cost when it solves a problem more valuable than the fee.",
  alternates: { canonical: "https://www.attribix.app/resources/is-an-ecommerce-marketing-agency-worth-the-cost" },
  openGraph: {
    title: "Is an Ecommerce Marketing Agency Worth the Cost?",
    description: "Avoid agencies guaranteeing unrealistic ROAS or sales outcomes they cannot control.",
    url: "https://www.attribix.app/resources/is-an-ecommerce-marketing-agency-worth-the-cost",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
