import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Demo — See Attribix in Action",
  description: "Book a free 30-minute demo of Attribix. See how iOS-proof attribution and true ROAS reporting works for your Shopify store.",
  alternates: { canonical: "https://attribix.app/book-demo" },
  openGraph: { title: "Book a Demo | Attribix", description: "See Attribix in action — free 30-minute walkthrough.", url: "https://attribix.app/book-demo" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
