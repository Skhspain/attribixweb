import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Build an Ecommerce Creative Testing System That Produces Useful Learnings",
  description: "Creative testing becomes expensive when every new ad is simply another piece of content.",
  alternates: { canonical: "https://www.attribix.app/resources/ecommerce-creative-testing-system" },
  openGraph: {
    title: "How to Build an Ecommerce Creative Testing System That Produces Useful Learnings",
    description: "The final winner is not the ad with the highest hook rate or most comments.",
    url: "https://www.attribix.app/resources/ecommerce-creative-testing-system",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
