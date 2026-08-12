import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Does Klarna Increase Ecommerce Conversion Rate?",
  description:
    "Klarna can increase conversion for some Shopify stores, but it is not a universal law. How product price, visibility, fees and customer quality determine whether it actually helps.",
  alternates: { canonical: "https://www.attribix.app/resources/does-klarna-increase-conversion-rate" },
  openGraph: {
    title: "Does Klarna Increase Ecommerce Conversion Rate?",
    description: "Klarna can remove a real payment barrier. Test it as a commercial change, not a magic CRO plugin.",
    url: "https://www.attribix.app/resources/does-klarna-increase-conversion-rate",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
