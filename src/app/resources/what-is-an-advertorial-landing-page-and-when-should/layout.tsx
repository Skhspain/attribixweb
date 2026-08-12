import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Is an Advertorial Landing Page and When Should Ecommerce Brands Use One?",
  description: "An advertorial is a sales-oriented educational page written in an article-like format.",
  alternates: { canonical: "https://www.attribix.app/resources/what-is-an-advertorial-landing-page-and-when-should" },
  openGraph: {
    title: "What Is an Advertorial Landing Page and When Should Ecommerce Brands Use One?",
    description: "If the advertorial increases total CPA because too few readers proceed, the educational layer may not be justified.",
    url: "https://www.attribix.app/resources/what-is-an-advertorial-landing-page-and-when-should",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
