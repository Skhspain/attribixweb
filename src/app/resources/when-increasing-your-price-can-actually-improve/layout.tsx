import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "When Increasing Your Price Can Actually Improve Advertising Performance",
  description: "Increasing price normally creates more purchase friction.",
  alternates: { canonical: "https://www.attribix.app/resources/when-increasing-your-price-can-actually-improve" },
  openGraph: {
    title: "When Increasing Your Price Can Actually Improve Advertising Performance",
    description: "Test changes carefully.",
    url: "https://www.attribix.app/resources/when-increasing-your-price-can-actually-improve",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
