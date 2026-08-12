import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Where Should Ecommerce Brands Get Ideas for New Ad Creatives?",
  description: "Good ad ideas come from the market more often than from other ads.",
  alternates: { canonical: "https://www.attribix.app/resources/where-should-ecommerce-brands-get-ideas-for-new-ad" },
  openGraph: {
    title: "Where Should Ecommerce Brands Get Ideas for New Ad Creatives?",
    description: "Use competitor ads to understand category conventions and gaps, not as templates to duplicate.",
    url: "https://www.attribix.app/resources/where-should-ecommerce-brands-get-ideas-for-new-ad",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
