import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Create Different Ad Angles for the Same Product",
  description: "One product can solve several customer problems.",
  alternates: { canonical: "https://www.attribix.app/resources/how-to-create-different-ad-angles-for-the-same-product" },
  openGraph: {
    title: "How to Create Different Ad Angles for the Same Product",
    description: "If “leak-proof” clearly outperforms “temperature retention,” you have learned something useful about customer motivation.",
    url: "https://www.attribix.app/resources/how-to-create-different-ad-angles-for-the-same-product",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
