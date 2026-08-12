import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "When Does an Ecommerce Brand Need a Dedicated Landing Page?",
  description: "Build a dedicated landing page when the existing website cannot continue the campaign's message clearly enough.",
  alternates: { canonical: "https://www.attribix.app/resources/when-does-an-ecommerce-brand-need-a-dedicated-landing" },
  openGraph: {
    title: "When Does an Ecommerce Brand Need a Dedicated Landing Page?",
    description: "Purchase events, UTMs, consent and attribution should work identically on dedicated pages.",
    url: "https://www.attribix.app/resources/when-does-an-ecommerce-brand-need-a-dedicated-landing",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
