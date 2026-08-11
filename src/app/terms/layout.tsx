import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Attribix",
  description: "Read the Attribix terms of service. Our agreement covers account usage, data handling, payments, and service availability.",
  alternates: { canonical: "https://www.attribix.app/terms" },
  openGraph: { title: "Terms of Service | Attribix", description: "Our terms covering account usage, data, and service availability.", url: "https://www.attribix.app/terms" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
