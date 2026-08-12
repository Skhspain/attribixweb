import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Should Your Free Shipping Threshold Be Above Your Current AOV?",
  description:
    "A threshold usually needs to sit above a meaningful portion of current orders to increase basket size, but simply adding 20% to AOV is not a formula. What order distribution and margin change.",
  alternates: { canonical: "https://www.attribix.app/resources/free-shipping-threshold-above-aov" },
  openGraph: {
    title: "Should Your Free Shipping Threshold Be Above Your Current AOV?",
    description: "Use AOV as a starting reference, then use basket distribution and product prices to choose a threshold customers can realistically reach.",
    url: "https://www.attribix.app/resources/free-shipping-threshold-above-aov",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
