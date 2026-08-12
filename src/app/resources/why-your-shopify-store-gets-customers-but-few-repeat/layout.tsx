import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Your Shopify Store Gets Customers but Few Repeat Purchases",
  description: "Strong first-order acquisition and weak retention can indicate that marketing is selling the first purchase more effectively than the product experience earns the second.",
  alternates: { canonical: "https://www.attribix.app/resources/why-your-shopify-store-gets-customers-but-few-repeat" },
  openGraph: {
    title: "Why Your Shopify Store Gets Customers but Few Repeat Purchases",
    description: "Reviews, support tickets and surveys often explain retention faster than analytics.",
    url: "https://www.attribix.app/resources/why-your-shopify-store-gets-customers-but-few-repeat",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
