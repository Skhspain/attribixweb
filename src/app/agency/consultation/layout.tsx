import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paid Ad Account Consultation — Attribix Managed Services",
  description: "Book a paid, in-depth consultation with our ads team: a focused session covering your ad account, tracking setup and growth strategy.",
  alternates: { canonical: "https://attribix.app/agency/consultation" },
  openGraph: { title: "Paid Ad Account Consultation | Attribix", description: "A focused, one-on-one session covering your ad account, tracking and strategy.", url: "https://attribix.app/agency/consultation" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
