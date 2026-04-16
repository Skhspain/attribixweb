import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Attribix — setup, attribution, integrations, pricing and more.",
  alternates: { canonical: "https://attribix.app/faq" },
  openGraph: { url: "https://attribix.app/faq" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
