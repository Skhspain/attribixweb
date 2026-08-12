import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Star Ratings vs Written Reviews: Which Matter More?",
  description:
    "Star ratings help customers scan. Written reviews help them understand. Why the two answer different trust questions and how to use both well.",
  alternates: { canonical: "https://www.attribix.app/resources/star-ratings-vs-written-reviews-ecommerce" },
  openGraph: {
    title: "Star Ratings vs Written Reviews: Which Matter More?",
    description: "Rating summary for quick reassurance. Written reviews for decision support. Don't optimize one at the expense of the other.",
    url: "https://www.attribix.app/resources/star-ratings-vs-written-reviews-ecommerce",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
