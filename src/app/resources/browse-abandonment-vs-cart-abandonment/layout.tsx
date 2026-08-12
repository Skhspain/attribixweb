import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Browse Abandonment vs Cart Abandonment: What's the Difference?",
  description:
    "Browse abandonment and cart abandonment sit at different levels of intent and need different messages. How to build each flow without overwhelming the same customer.",
  alternates: { canonical: "https://www.attribix.app/resources/browse-abandonment-vs-cart-abandonment" },
  openGraph: {
    title: "Browse Abandonment vs Cart Abandonment: What's the Difference?",
    description: "A browser looked at a product and left. A cart abandoner took the stronger action of adding something to the basket.",
    url: "https://www.attribix.app/resources/browse-abandonment-vs-cart-abandonment",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
