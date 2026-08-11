import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inquiry Received | Attribix",
  description: "We've received your inquiry and will reply within 1–2 business days.",
  robots: { index: false, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
