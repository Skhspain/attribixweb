import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Is a Good CPA for Ecommerce?",
  description: "A good CPA is not an industry number.",
  alternates: { canonical: "https://www.attribix.app/resources/what-is-a-good-cpa-for-ecommerce" },
  openGraph: {
    title: "What Is a Good CPA for Ecommerce?",
    description: "New-customer CPA and returning-customer CPA are not the same business question.",
    url: "https://www.attribix.app/resources/what-is-a-good-cpa-for-ecommerce",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
