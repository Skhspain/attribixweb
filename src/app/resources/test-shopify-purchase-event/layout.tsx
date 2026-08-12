import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Test a Shopify Purchase Event",
  description:
    "A purchase event should represent one completed order with the correct commercial data. Testing it once across every marketing platform after changing tracking.",
  alternates: { canonical: "https://www.attribix.app/resources/test-shopify-purchase-event" },
  openGraph: {
    title: "How to Test a Shopify Purchase Event",
    description: "A single Shopify order should not become two purchases because two integrations fire.",
    url: "https://www.attribix.app/resources/test-shopify-purchase-event",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
