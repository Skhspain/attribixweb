import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Testing New Creatives Won't Fix a Weak Offer",
  description: "Creative determines how the product is presented.",
  alternates: { canonical: "https://www.attribix.app/resources/why-testing-new-creatives-won-t-fix-a-weak-offer" },
  openGraph: {
    title: "Why Testing New Creatives Won't Fix a Weak Offer",
    description: "If a customer can get an equivalent product delivered faster for half the price, creative needs an extremely strong reason to justify the difference.",
    url: "https://www.attribix.app/resources/why-testing-new-creatives-won-t-fix-a-weak-offer",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
