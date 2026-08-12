import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quiz Funnel vs Product Page: Which Converts Better?",
  description: "A quiz can improve conversion when the customer genuinely needs help choosing.",
  alternates: { canonical: "https://www.attribix.app/resources/quiz-funnel-vs-product-page-which-converts-better" },
  openGraph: {
    title: "Quiz Funnel vs Product Page: Which Converts Better?",
    description: "Track:",
    url: "https://www.attribix.app/resources/quiz-funnel-vs-product-page-which-converts-better",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
