import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Reviews vs Testimonials: Which Build More Trust?",
  description:
    "Reviews and testimonials answer different customer questions on a Shopify store: when product-specific reviews win, when a broader testimonial matters more, and why authenticity beats format.",
  alternates: { canonical: "https://www.attribix.app/resources/product-reviews-vs-testimonials-ecommerce" },
  openGraph: {
    title: "Product Reviews vs Testimonials: Which Build More Trust?",
    description: "Product reviews reduce risk on a specific item. Testimonials explain a broader outcome. The question is what uncertainty the customer needs removed.",
    url: "https://www.attribix.app/resources/product-reviews-vs-testimonials-ecommerce",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
