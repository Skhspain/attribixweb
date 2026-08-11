import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partners | Attribix",
  description: "Attribix works with Shopify agencies and consultants. Tell us about your business if you'd like to be part of the referral program once it's ready.",
  alternates: { canonical: "https://www.attribix.app/partners" },
  openGraph: { title: "Partners | Attribix", description: "Working with Shopify agencies and consultants — tell us about your business.", url: "https://www.attribix.app/partners" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
