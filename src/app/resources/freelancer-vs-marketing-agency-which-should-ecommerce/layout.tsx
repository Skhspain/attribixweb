import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Freelancer vs Marketing Agency: Which Should Ecommerce Brands Hire?",
  description: "A strong freelancer can outperform a weak agency, and a strong agency can provide capabilities one person cannot realistically cover.",
  alternates: { canonical: "https://www.attribix.app/resources/freelancer-vs-marketing-agency-which-should-ecommerce" },
  openGraph: {
    title: "Freelancer vs Marketing Agency: Which Should Ecommerce Brands Hire?",
    description: "Who does the work?",
    url: "https://www.attribix.app/resources/freelancer-vs-marketing-agency-which-should-ecommerce",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
