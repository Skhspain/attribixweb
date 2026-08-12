import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Is a Good Abandoned Cart Recovery Rate?",
  description:
    "Recovery rate depends on audience definition, price, buying cycle and attribution window. Why your own baseline matters more than an external benchmark.",
  alternates: { canonical: "https://www.attribix.app/resources/good-abandoned-cart-recovery-rate-ecommerce" },
  openGraph: {
    title: "What Is a Good Abandoned Cart Recovery Rate?",
    description: "Platform-attributed recovery tends to be higher than true incremental lift. How to separate the two.",
    url: "https://www.attribix.app/resources/good-abandoned-cart-recovery-rate-ecommerce",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
