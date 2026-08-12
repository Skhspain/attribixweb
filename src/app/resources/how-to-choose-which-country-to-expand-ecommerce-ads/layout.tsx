import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Choose Which Country to Expand Ecommerce Ads Into Next",
  description: "Do not choose the next country because Meta CPM is cheap.",
  alternates: { canonical: "https://www.attribix.app/resources/how-to-choose-which-country-to-expand-ecommerce-ads" },
  openGraph: {
    title: "How to Choose Which Country to Expand Ecommerce Ads Into Next",
    description: "Launching 15 countries at once makes it difficult to learn what caused success or failure.",
    url: "https://www.attribix.app/resources/how-to-choose-which-country-to-expand-ecommerce-ads",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
