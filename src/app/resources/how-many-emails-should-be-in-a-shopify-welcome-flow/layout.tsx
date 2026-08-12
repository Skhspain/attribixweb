import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Many Emails Should Be in a Shopify Welcome Flow?",
  description: "A welcome flow should stop when it has said the important things, not when it reaches a template's recommended email count.",
  alternates: { canonical: "https://www.attribix.app/resources/how-many-emails-should-be-in-a-shopify-welcome-flow" },
  openGraph: {
    title: "How Many Emails Should Be in a Shopify Welcome Flow?",
    description: "A welcome flow should build value, not teach every new subscriber to wait for a coupon.",
    url: "https://www.attribix.app/resources/how-many-emails-should-be-in-a-shopify-welcome-flow",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
