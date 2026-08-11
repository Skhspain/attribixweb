import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Attribix",
  description:
    "Attribix is built by the team behind bevit, a Meta and Google Ads agency, after years of dealing with incomplete and conflicting platform reporting for Shopify clients.",
  alternates: { canonical: "https://www.attribix.app/about" },
  openGraph: {
    title: "About Attribix",
    description: "Why Attribix exists, and who built it.",
    url: "https://www.attribix.app/about",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
