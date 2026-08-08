import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Attribix Comparisons | Attribix",
  description: "How Attribix compares to other Shopify attribution and tracking tools.",
  alternates: { canonical: "https://www.attribix.app/compare" },
  robots: { index: false, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
