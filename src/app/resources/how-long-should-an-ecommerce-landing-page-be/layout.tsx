import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Long Should an Ecommerce Landing Page Be?",
  description: "A landing page should be long enough to answer the questions preventing the purchase and no longer.",
  alternates: { canonical: "https://www.attribix.app/resources/how-long-should-an-ecommerce-landing-page-be" },
  openGraph: {
    title: "How Long Should an Ecommerce Landing Page Be?",
    description: "Scroll depth and section interaction can provide clues, but do not assume people must read the entire page to buy.",
    url: "https://www.attribix.app/resources/how-long-should-an-ecommerce-landing-page-be",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
