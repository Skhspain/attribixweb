import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Demo",
  description: "Book a free demo of Attribix and see how we recover missing conversions and improve your ROAS.",
  alternates: { canonical: "https://attribix.app/book-demo" },
  openGraph: { url: "https://attribix.app/book-demo" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
