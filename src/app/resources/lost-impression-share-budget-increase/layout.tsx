import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lost Impression Share Due to Budget: Should You Increase Spend?",
  description: "\"Limited by budget\" can feel like Google is telling you to spend more.",
  alternates: { canonical: "https://www.attribix.app/resources/lost-impression-share-budget-increase" },
  openGraph: {
    title: "Lost Impression Share Due to Budget: Should You Increase Spend?",
    description: "You rarely need to capture every eligible impression.",
    url: "https://www.attribix.app/resources/lost-impression-share-budget-increase",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
