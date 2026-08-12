import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Returning Customer Revenue Can Make Your ROAS Look Better Than It Is",
  description: "Returning customers often convert at a lower marketing cost because they already know and trust the brand.",
  alternates: { canonical: "https://www.attribix.app/resources/why-returning-customer-revenue-can-make-your-roas-look" },
  openGraph: {
    title: "Why Returning Customer Revenue Can Make Your ROAS Look Better Than It Is",
    description: "Ads to existing customers can still create incremental value, especially for launches or replenishment.",
    url: "https://www.attribix.app/resources/why-returning-customer-revenue-can-make-your-roas-look",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
