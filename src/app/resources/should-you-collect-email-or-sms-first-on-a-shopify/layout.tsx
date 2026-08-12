import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Should You Collect Email or SMS First on a Shopify Popup?",
  description: "Email generally creates less signup friction.",
  alternates: { canonical: "https://www.attribix.app/resources/should-you-collect-email-or-sms-first-on-a-shopify" },
  openGraph: {
    title: "Should You Collect Email or SMS First on a Shopify Popup?",
    description: "A form collecting name, email, phone, birthday and product preference may produce richer profiles and fewer completed signups.",
    url: "https://www.attribix.app/resources/should-you-collect-email-or-sms-first-on-a-shopify",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
