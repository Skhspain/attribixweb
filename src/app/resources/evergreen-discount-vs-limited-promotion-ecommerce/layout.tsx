import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Should You Run Evergreen Discounts or Short Promotions?",
  description:
    "Evergreen discounts provide consistency. Short promotions create a genuine reason to act now. How to choose based on urgency, margin and the job the offer needs to do.",
  alternates: { canonical: "https://www.attribix.app/resources/evergreen-discount-vs-limited-promotion-ecommerce" },
  openGraph: {
    title: "Should You Run Evergreen Discounts or Short Promotions?",
    description: "The right choice depends on whether the offer is part of your normal pricing strategy or an event.",
    url: "https://www.attribix.app/resources/evergreen-discount-vs-limited-promotion-ecommerce",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
