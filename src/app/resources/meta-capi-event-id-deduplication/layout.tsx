import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Purchase Event IDs Matter for Meta CAPI",
  description:
    "When the same purchase is sent from both the browser Pixel and CAPI, Meta needs a way to know those are two representations of one event. The event ID is the key part of that deduplication.",
  alternates: { canonical: "https://www.attribix.app/resources/meta-capi-event-id-deduplication" },
  openGraph: {
    title: "Why Purchase Event IDs Matter for Meta CAPI",
    description: "Consistency is more important than complexity: both sides need the same intended identifier.",
    url: "https://www.attribix.app/resources/meta-capi-event-id-deduplication",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
