import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Attribix",
  description: "Read the Attribix privacy policy. Learn how we collect, use, and protect your data.",
  alternates: { canonical: "https://www.attribix.app/privacy" },
  openGraph: { title: "Privacy Policy | Attribix", description: "How Attribix collects, uses, and protects your data.", url: "https://www.attribix.app/privacy" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
