import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Long Should an Ecommerce Guarantee Be?",
  description: "There is no conversion rule saying 30 days is always worse than 60 or 90.",
  alternates: { canonical: "https://www.attribix.app/resources/how-long-should-an-ecommerce-guarantee-be" },
  openGraph: {
    title: "How Long Should an Ecommerce Guarantee Be?",
    description: "Consumer laws may grant rights beyond your voluntary guarantee and vary by market.",
    url: "https://www.attribix.app/resources/how-long-should-an-ecommerce-guarantee-be",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
