import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Can You Add Meta and Google ROAS Together?",
  description:
    "No. Adding ROAS percentages together doesn't produce a meaningful total, and adding Meta-attributed revenue to Google-attributed revenue can double-count the same orders. Use total spend and one consistent revenue number instead.",
  alternates: { canonical: "https://www.attribix.app/resources/can-you-add-meta-and-google-roas-together" },
  openGraph: {
    title: "Can You Add Meta and Google ROAS Together?",
    description: "One metric cannot answer every question, but mathematically combining unrelated ROAS percentages answers none of them.",
    url: "https://www.attribix.app/resources/can-you-add-meta-and-google-roas-together",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
