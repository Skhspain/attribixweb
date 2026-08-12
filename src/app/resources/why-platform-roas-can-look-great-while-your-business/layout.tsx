import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Platform ROAS Can Look Great While Your Business Loses Money",
  description: "ROAS compares attributed revenue with ad spend.",
  alternates: { canonical: "https://www.attribix.app/resources/why-platform-roas-can-look-great-while-your-business" },
  openGraph: {
    title: "Why Platform ROAS Can Look Great While Your Business Loses Money",
    description: "Know:",
    url: "https://www.attribix.app/resources/why-platform-roas-can-look-great-while-your-business",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
