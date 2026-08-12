import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Should You Create Different Landing Pages for Meta and Google Ads?",
  description:
    "Why Meta and Google traffic often need different landing pages, not because of design but because of how much the customer already knows when they click.",
  alternates: { canonical: "https://www.attribix.app/resources/different-landing-pages-meta-and-google-ads" },
  openGraph: {
    title: "Should You Create Different Landing Pages for Meta and Google Ads?",
    description: "Google often captures an existing need. Meta often creates the interest. That difference should shape the landing page.",
    url: "https://www.attribix.app/resources/different-landing-pages-meta-and-google-ads",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
