import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Know Whether Your Ecommerce Offer Is the Problem",
  description: "An offer problem often appears when customers understand the product, show interest and stop before committing money.",
  alternates: { canonical: "https://www.attribix.app/resources/how-to-know-whether-your-ecommerce-offer-is-the-problem" },
  openGraph: {
    title: "How to Know Whether Your Ecommerce Offer Is the Problem",
    description: "Why did people not buy?",
    url: "https://www.attribix.app/resources/how-to-know-whether-your-ecommerce-offer-is-the-problem",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
