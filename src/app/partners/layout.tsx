import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner Program — Earn 15–25% Recurring Commission",
  description: "Join the Attribix partner program. Earn 15–25% recurring commission by referring your Shopify clients. White-label options available.",
  alternates: { canonical: "https://attribix.app/partners" },
  openGraph: { url: "https://attribix.app/partners" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
