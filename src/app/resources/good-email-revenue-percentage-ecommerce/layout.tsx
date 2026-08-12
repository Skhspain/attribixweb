import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Is a Good Email Marketing Revenue Percentage for Ecommerce?",
  description:
    "There is no percentage every store should try to reach. What a high or low email revenue share can actually mean, and which metrics matter more than the headline number.",
  alternates: { canonical: "https://www.attribix.app/resources/good-email-revenue-percentage-ecommerce" },
  openGraph: {
    title: "What Is a Good Email Marketing Revenue Percentage for Ecommerce?",
    description: "A high percentage can mean excellent retention, or it can mean generous attribution windows and discount dependence.",
    url: "https://www.attribix.app/resources/good-email-revenue-percentage-ecommerce",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
