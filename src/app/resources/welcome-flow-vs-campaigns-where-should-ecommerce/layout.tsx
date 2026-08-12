import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome Flow vs Campaigns: Where Should Ecommerce Brands Focus First?",
  description: "If the store has steady new list growth, a strong welcome flow is one of the first email assets worth building because every future subscriber can experience it automatically.",
  alternates: { canonical: "https://www.attribix.app/resources/welcome-flow-vs-campaigns-where-should-ecommerce" },
  openGraph: {
    title: "Welcome Flow vs Campaigns: Where Should Ecommerce Brands Focus First?",
    description: "Flows often touch high-intent new subscribers automatically and can report impressive revenue.",
    url: "https://www.attribix.app/resources/welcome-flow-vs-campaigns-where-should-ecommerce",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
