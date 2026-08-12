import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Is Incrementality in Ecommerce Advertising?",
  description:
    "Incrementality asks a harder question than attribution: how many sales happened because of the advertising that would not have happened otherwise. How it's measured and why it doesn't replace attribution.",
  alternates: { canonical: "https://www.attribix.app/resources/incrementality-ecommerce-advertising" },
  openGraph: {
    title: "What Is Incrementality in Ecommerce Advertising?",
    description: "Attribution asks which interaction gets credit. Incrementality tries to estimate causation.",
    url: "https://www.attribix.app/resources/incrementality-ecommerce-advertising",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
