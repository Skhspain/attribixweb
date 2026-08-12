import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Many CTAs Should an Ecommerce Landing Page Have?",
  description: "A landing page can have several CTA buttons without having several competing goals.",
  alternates: { canonical: "https://www.attribix.app/resources/how-many-ctas-should-an-ecommerce-landing-page-have" },
  openGraph: {
    title: "How Many CTAs Should an Ecommerce Landing Page Have?",
    description: "Excessive CTAs make the page feel aggressive and reduce visual hierarchy.",
    url: "https://www.attribix.app/resources/how-many-ctas-should-an-ecommerce-landing-page-have",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
