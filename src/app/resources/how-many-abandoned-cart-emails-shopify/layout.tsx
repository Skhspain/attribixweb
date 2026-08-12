import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Many Abandoned Cart Emails Should a Shopify Store Send?",
  description:
    "One abandoned-cart email is better than none, but there's no universal reason every store needs exactly three: how to build the sequence around objections and buying cycle.",
  alternates: { canonical: "https://www.attribix.app/resources/how-many-abandoned-cart-emails-shopify" },
  openGraph: {
    title: "How Many Abandoned Cart Emails Should a Shopify Store Send?",
    description: "Give each email in the sequence a different job (reminder, reassurance, final prompt) instead of repeating the same message.",
    url: "https://www.attribix.app/resources/how-many-abandoned-cart-emails-shopify",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
