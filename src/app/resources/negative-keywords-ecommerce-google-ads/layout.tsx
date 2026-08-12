import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Ads Negative Keywords for Ecommerce: What to Look For",
  description: "Negative keywords stop Google from showing ads for searches you deliberately do not want.",
  alternates: { canonical: "https://www.attribix.app/resources/negative-keywords-ecommerce-google-ads" },
  openGraph: {
    title: "Google Ads Negative Keywords for Ecommerce: What to Look For",
    description: "A negative added years ago can quietly block a new product category.",
    url: "https://www.attribix.app/resources/negative-keywords-ecommerce-google-ads",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
