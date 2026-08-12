import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Attribution vs Incrementality: What's the Difference?",
  description:
    "Attribution assigns credit. Incrementality estimates what advertising caused. Why the same campaign can look completely different depending on which question you ask.",
  alternates: { canonical: "https://www.attribix.app/resources/attribution-vs-incrementality" },
  openGraph: {
    title: "Attribution vs Incrementality: What's the Difference?",
    description: "A retargeting campaign can have high attributed ROAS and low incremental lift. Here's why.",
    url: "https://www.attribix.app/resources/attribution-vs-incrementality",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
