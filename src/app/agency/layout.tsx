import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agency — Performance Marketing",
  description: "Top-rated performance marketing agency since 2019. We scale Meta and Google ads for Shopify stores with proven attribution strategies.",
  alternates: { canonical: "https://attribix.app/agency" },
  openGraph: { url: "https://attribix.app/agency" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
