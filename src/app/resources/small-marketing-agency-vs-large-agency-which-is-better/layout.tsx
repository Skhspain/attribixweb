import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Small Marketing Agency vs Large Agency: Which Is Better?",
  description: "Large agencies offer scale, established processes and deeper staffing.",
  alternates: { canonical: "https://www.attribix.app/resources/small-marketing-agency-vs-large-agency-which-is-better" },
  openGraph: {
    title: "Small Marketing Agency vs Large Agency: Which Is Better?",
    description: "A multinational retailer may need capabilities a three-person agency cannot provide.",
    url: "https://www.attribix.app/resources/small-marketing-agency-vs-large-agency-which-is-better",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
