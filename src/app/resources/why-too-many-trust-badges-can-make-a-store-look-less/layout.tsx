import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Too Many Trust Badges Can Make a Store Look Less Trustworthy",
  description: "Trust signals work best when they feel natural.",
  alternates: { canonical: "https://www.attribix.app/resources/why-too-many-trust-badges-can-make-a-store-look-less" },
  openGraph: {
    title: "Why Too Many Trust Badges Can Make a Store Look Less Trustworthy",
    description: "If customers worry about returns, explain returns.",
    url: "https://www.attribix.app/resources/why-too-many-trust-badges-can-make-a-store-look-less",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
