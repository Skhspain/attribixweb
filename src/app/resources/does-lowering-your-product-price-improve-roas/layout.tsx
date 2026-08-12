import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Does Lowering Your Product Price Improve ROAS?",
  description: "Lowering price can improve conversion and ROAS while reducing profit.",
  alternates: { canonical: "https://www.attribix.app/resources/does-lowering-your-product-price-improve-roas" },
  openGraph: {
    title: "Does Lowering Your Product Price Improve ROAS?",
    description: "If conversion is weak, the problem might be:",
    url: "https://www.attribix.app/resources/does-lowering-your-product-price-improve-roas",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
