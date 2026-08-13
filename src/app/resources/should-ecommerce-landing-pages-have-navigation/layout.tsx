import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Should Ecommerce Landing Pages Have Navigation?",
  description: "Removing navigation can keep users focused on the offer, but ecommerce shoppers often need to browse before buying. How to decide, and what to measure beyond conversion rate.",
  alternates: { canonical: "https://www.attribix.app/resources/should-ecommerce-landing-pages-have-navigation" },
  openGraph: {
    title: "Should Ecommerce Landing Pages Have Navigation?",
    description: "Removing navigation may increase immediate conversion and reduce average order value if customers stop exploring complementary products.",
    url: "https://www.attribix.app/resources/should-ecommerce-landing-pages-have-navigation",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
