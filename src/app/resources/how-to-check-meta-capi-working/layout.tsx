import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Check Whether Meta CAPI Is Working",
  description:
    "A healthy CAPI setup isn't simply 'server events are appearing.' How to confirm the right events arrive with useful matching data and that browser/server duplicates are handled correctly.",
  alternates: { canonical: "https://www.attribix.app/resources/how-to-check-meta-capi-working" },
  openGraph: {
    title: "How to Check Whether Meta CAPI Is Working",
    description: "CAPI is working when it sends accurate, compliant business events reliably, not when one dashboard metric turns green.",
    url: "https://www.attribix.app/resources/how-to-check-meta-capi-working",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
