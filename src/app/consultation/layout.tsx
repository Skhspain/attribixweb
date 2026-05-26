import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Consultation — Attribix Agency",
  description: "Book a free 30-minute consultation with our paid ads team. We'll review your Meta and Google setup and tell you honestly what we see.",
  alternates: { canonical: "https://attribix.app/consultation" },
  openGraph: {
    title: "Free Consultation | Attribix Agency",
    description: "30 minutes. We review your ad accounts and tell you what we find. No pitch, no obligation.",
    url: "https://attribix.app/consultation",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
