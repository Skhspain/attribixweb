import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Much Should Ecommerce Brands Spend to Acquire a New Customer?",
  description:
    "The amount you can afford to spend on a new customer should come from the customer's expected contribution value, not an industry benchmark. A worked example.",
  alternates: { canonical: "https://www.attribix.app/resources/how-much-should-ecommerce-spend-to-acquire-customer" },
  openGraph: {
    title: "How Much Should Ecommerce Brands Spend to Acquire a New Customer?",
    description: "Set acquisition targets from actual contribution, retention and cash-flow needs, not what competitors claim to pay.",
    url: "https://www.attribix.app/resources/how-much-should-ecommerce-spend-to-acquire-customer",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
