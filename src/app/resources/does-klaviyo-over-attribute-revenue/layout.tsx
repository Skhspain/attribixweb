import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Does Klaviyo Over-Attribute Revenue?",
  description:
    "Klaviyo can attribute more revenue to email than is truly incremental. Why loyal customers and channel overlap inflate the number, and how to test for real lift.",
  alternates: { canonical: "https://www.attribix.app/resources/does-klaviyo-over-attribute-revenue" },
  openGraph: {
    title: "Does Klaviyo Over-Attribute Revenue?",
    description: "Attribution and causation are different. How to use Klaviyo's revenue number without overstating email's real impact.",
    url: "https://www.attribix.app/resources/does-klaviyo-over-attribute-revenue",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
