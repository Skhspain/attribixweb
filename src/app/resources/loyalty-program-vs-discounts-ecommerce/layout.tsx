import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loyalty Program vs Discounts: Which Drives More Repeat Purchases?",
  description:
    "Discounts create immediate price motivation. Loyalty programs create a reason to keep choosing the same brand over time. Neither works if customers didn't like the first purchase.",
  alternates: { canonical: "https://www.attribix.app/resources/loyalty-program-vs-discounts-ecommerce" },
  openGraph: {
    title: "Loyalty Program vs Discounts: Which Drives More Repeat Purchases?",
    description: "Use the system that fits how customers naturally return rather than copying a coffee-shop rewards model onto every Shopify store.",
    url: "https://www.attribix.app/resources/loyalty-program-vs-discounts-ecommerce",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
