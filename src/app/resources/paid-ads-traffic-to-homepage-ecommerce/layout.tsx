import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Sending All Paid Traffic to Your Homepage Is Usually a Mistake",
  description:
    "Your homepage serves many jobs. A paid campaign usually has one. Why sending every Meta and Google click to the homepage often creates unnecessary friction.",
  alternates: { canonical: "https://www.attribix.app/resources/paid-ads-traffic-to-homepage-ecommerce" },
  openGraph: {
    title: "Why Sending All Paid Traffic to Your Homepage Is Usually a Mistake",
    description: "The customer already told you what they want. Sending them to the homepage makes them find it again.",
    url: "https://www.attribix.app/resources/paid-ads-traffic-to-homepage-ecommerce",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
