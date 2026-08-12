import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Performance Max vs Standard Shopping: Which Is Better?",
  description: "Performance Max offers more automation and access to broader Google inventory.",
  alternates: { canonical: "https://www.attribix.app/resources/performance-max-vs-standard-shopping" },
  openGraph: {
    title: "Performance Max vs Standard Shopping: Which Is Better?",
    description: "A PMax campaign may report higher ROAS partly because it captures branded or other assisted demand.",
    url: "https://www.attribix.app/resources/performance-max-vs-standard-shopping",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
