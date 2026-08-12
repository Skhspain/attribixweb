import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Does \"Only X Left\" Increase Conversion or Hurt Trust?",
  description:
    "\"Only 3 left\" can help a genuinely limited-stock customer decide to buy now, or make your entire store feel dishonest when the same message appears every day.",
  alternates: { canonical: "https://www.attribix.app/resources/only-x-left-ecommerce-conversion" },
  openGraph: {
    title: "Does \"Only X Left\" Increase Conversion or Hurt Trust?",
    description: "Use accurate inventory information to help the customer decide. Do not manufacture shortages as a permanent sales technique.",
    url: "https://www.attribix.app/resources/only-x-left-ecommerce-conversion",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
