import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Merchant Center Feed Issues That Quietly Hurt Performance",
  description: "Not every Merchant Center problem produces a dramatic red \"account suspended\" warning.",
  alternates: { canonical: "https://www.attribix.app/resources/merchant-center-feed-issues-hurt-performance" },
  openGraph: {
    title: "Merchant Center Feed Issues That Quietly Hurt Performance",
    description: "A store with 5,000 products can have hundreds of affected items without anyone noticing because the campaign continues to spend on the rest.",
    url: "https://www.attribix.app/resources/merchant-center-feed-issues-hurt-performance",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
