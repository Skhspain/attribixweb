import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Measure the True Impact of Email Marketing",
  description:
    "Platform metrics, Shopify outcomes, holdout tests, profit and list health: a fuller way to measure what email actually contributes, beyond attributed revenue.",
  alternates: { canonical: "https://www.attribix.app/resources/measure-email-marketing-true-impact-ecommerce" },
  openGraph: {
    title: "How to Measure the True Impact of Email Marketing",
    description: "The strongest email measurement asks how customer behaviour changes because the emails were sent, not just what the platform attributes.",
    url: "https://www.attribix.app/resources/measure-email-marketing-true-impact-ecommerce",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
