import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Your Abandoned Cart Emails Get Clicks but No Sales",
  description:
    "If recovery emails get clicks but not purchases, the email likely did its job. What to check on the store side: landing page, shipping, payment, and purchase tracking.",
  alternates: { canonical: "https://www.attribix.app/resources/abandoned-cart-emails-clicks-no-sales" },
  openGraph: {
    title: "Why Your Abandoned Cart Emails Get Clicks but No Sales",
    description: "A reminder cannot fix expensive shipping, payment failure or price resistance. Follow the customer beyond the click.",
    url: "https://www.attribix.app/resources/abandoned-cart-emails-clicks-no-sales",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
