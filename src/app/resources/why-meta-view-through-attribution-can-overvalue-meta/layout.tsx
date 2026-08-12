import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Meta View-Through Attribution Can Overvalue Meta Ads",
  description: "View-through attribution gives Meta credit when a person sees an ad, does not click it and later purchases within the relevant window.",
  alternates: { canonical: "https://www.attribix.app/resources/why-meta-view-through-attribution-can-overvalue-meta" },
  openGraph: {
    title: "Why Meta View-Through Attribution Can Overvalue Meta Ads",
    description: "The only perfect attribution would know what the shopper would have done without the impression.",
    url: "https://www.attribix.app/resources/why-meta-view-through-attribution-can-overvalue-meta",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
