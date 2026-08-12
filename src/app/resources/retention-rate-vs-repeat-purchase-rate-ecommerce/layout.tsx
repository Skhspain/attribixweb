import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Retention Rate vs Repeat Purchase Rate: What's the Difference?",
  description:
    "Repeat purchase rate and customer retention are related but not always calculated the same way. Why the definitions matter and how to pick a consistent cohort view.",
  alternates: { canonical: "https://www.attribix.app/resources/retention-rate-vs-repeat-purchase-rate-ecommerce" },
  openGraph: {
    title: "Customer Retention Rate vs Repeat Purchase Rate: What's the Difference?",
    description: "A company can report 40% retention while another reports 25% repeat purchase rate and both be describing healthy behaviour.",
    url: "https://www.attribix.app/resources/retention-rate-vs-repeat-purchase-rate-ecommerce",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
