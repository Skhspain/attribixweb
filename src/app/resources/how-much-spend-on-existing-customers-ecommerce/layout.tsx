import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Much Should Ecommerce Brands Spend on Existing Customers?",
  description:
    "There is no fixed percentage of marketing budget that belongs to existing customers. Budget should follow incremental contribution, not a predetermined split.",
  alternates: { canonical: "https://www.attribix.app/resources/how-much-spend-on-existing-customers-ecommerce" },
  openGraph: {
    title: "How Much Should Ecommerce Brands Spend on Existing Customers?",
    description: "Retention monetizes the base you already have. New-customer acquisition expands that base.",
    url: "https://www.attribix.app/resources/how-much-spend-on-existing-customers-ecommerce",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
