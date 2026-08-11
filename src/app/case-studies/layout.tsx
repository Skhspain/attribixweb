import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Attribix",
  description: "Real Shopify attribution and tracking implementations, with what changed and what the data showed.",
  alternates: { canonical: "https://www.attribix.app/case-studies" },
  robots: { index: false, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
