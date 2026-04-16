import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — Common Questions About Attribix",
  description: "Answers to the most common questions about Attribix — how attribution works, iOS tracking, integrations, pricing and getting started.",
  alternates: { canonical: "https://attribix.app/faq" },
  openGraph: { title: "FAQ | Attribix", description: "Common questions about attribution tracking for Shopify.", url: "https://attribix.app/faq" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
