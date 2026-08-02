import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Send an Inquiry — Managed Services | Attribix",
  description: "Tell us about your Shopify store, current ad spend and what you need help with. We reply within 1–2 business days.",
  alternates: { canonical: "https://attribix.app/managed-services/inquiry" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
