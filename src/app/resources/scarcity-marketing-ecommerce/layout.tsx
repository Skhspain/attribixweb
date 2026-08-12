import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Is Scarcity Marketing Hurting Your Ecommerce Brand?",
  description:
    "Scarcity works because people value opportunities they may lose, which makes it powerful enough to be abused. Genuine scarcity vs permanent scarcity that trains distrust.",
  alternates: { canonical: "https://www.attribix.app/resources/scarcity-marketing-ecommerce" },
  openGraph: {
    title: "Is Scarcity Marketing Hurting Your Ecommerce Brand?",
    description: "Scarcity should explain a genuine constraint, not replace customer value.",
    url: "https://www.attribix.app/resources/scarcity-marketing-ecommerce",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
