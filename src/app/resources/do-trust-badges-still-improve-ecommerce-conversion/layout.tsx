import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Do Trust Badges Still Improve Ecommerce Conversion Rates?",
  description: "Trust badges can reassure customers when they communicate something useful.",
  alternates: { canonical: "https://www.attribix.app/resources/do-trust-badges-still-improve-ecommerce-conversion" },
  openGraph: {
    title: "Do Trust Badges Still Improve Ecommerce Conversion Rates?",
    description: "Payment logos near payment information make sense.",
    url: "https://www.attribix.app/resources/do-trust-badges-still-improve-ecommerce-conversion",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
