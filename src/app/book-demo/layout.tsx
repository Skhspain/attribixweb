import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Free Consultation — Attribix",
  description: "Book a free 30-minute consultation with our paid ads team. We'll review your Meta and Google setup and tell you honestly what we see.",
  alternates: { canonical: "https://attribix.app/book-demo" },
  openGraph: { title: "Book a Free Consultation | Attribix", description: "30 minutes. We review your ad accounts and tell you what we find. No pitch, no obligation.", url: "https://attribix.app/book-demo" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
