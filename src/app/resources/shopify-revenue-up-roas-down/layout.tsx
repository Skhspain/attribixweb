import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify Revenue Is Up but Meta and Google ROAS Are Down",
  description:
    "Total revenue growing while platform-reported ROAS falls usually means growth is coming from channels ads don't get credit for, or paid acquisition is genuinely softening. How to tell which.",
  alternates: { canonical: "https://www.attribix.app/resources/shopify-revenue-up-roas-down" },
  openGraph: {
    title: "Shopify Revenue Is Up but Meta and Google ROAS Are Down",
    description: "Why total growth and platform ROAS can move in opposite directions, and what to check before reacting to either.",
    url: "https://www.attribix.app/resources/shopify-revenue-up-roas-down",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
