import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features",
  description: "Ad tracking, attribution, email marketing, reviews, social scheduling and SEO audit — all in one Shopify dashboard.",
  alternates: { canonical: "https://attribix.app/features" },
  openGraph: { url: "https://attribix.app/features" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
