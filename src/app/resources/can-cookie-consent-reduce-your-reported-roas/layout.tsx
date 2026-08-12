import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Can Cookie Consent Reduce Your Reported ROAS?",
  description: "Yes.",
  alternates: { canonical: "https://www.attribix.app/resources/can-cookie-consent-reduce-your-reported-roas" },
  openGraph: {
    title: "Can Cookie Consent Reduce Your Reported ROAS?",
    description: "Check:",
    url: "https://www.attribix.app/resources/can-cookie-consent-reduce-your-reported-roas",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
