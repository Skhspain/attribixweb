import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "When Is a Shopify Store Ready to Advertise Internationally?",
  description: "A store is ready for international ads when the business can deliver an experience that is competitive enough for the target market.",
  alternates: { canonical: "https://www.attribix.app/resources/when-is-a-shopify-store-ready-to-advertise" },
  openGraph: {
    title: "When Is a Shopify Store Ready to Advertise Internationally?",
    description: "Organic orders, customer inquiries, website traffic and search demand can point toward the strongest first expansion markets.",
    url: "https://www.attribix.app/resources/when-is-a-shopify-store-ready-to-advertise",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
