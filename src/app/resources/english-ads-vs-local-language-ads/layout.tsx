import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "English Ads vs Local-Language Ads: Which Perform Better?",
  description:
    "Local-language ads often improve relevance because customers process familiar language more naturally, but English can still work well in some categories and markets.",
  alternates: { canonical: "https://www.attribix.app/resources/english-ads-vs-local-language-ads" },
  openGraph: {
    title: "English Ads vs Local-Language Ads: Which Perform Better?",
    description: "A bad local-language ad can perform worse than clear English. Test language as one part of local relevance.",
    url: "https://www.attribix.app/resources/english-ads-vs-local-language-ads",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
