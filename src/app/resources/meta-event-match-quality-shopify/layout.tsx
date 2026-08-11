import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meta Event Match Quality for Shopify Explained",
  description:
    "What Event Match Quality actually measures, which customer parameters move it, and why a higher score doesn't mean your attribution became perfect.",
  alternates: { canonical: "https://www.attribix.app/resources/meta-event-match-quality-shopify" },
  openGraph: {
    title: "Meta Event Match Quality for Shopify Explained",
    description: "What EMQ measures, what moves it, and why a higher score isn't the same as better attribution.",
    url: "https://www.attribix.app/resources/meta-event-match-quality-shopify",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
