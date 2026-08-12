import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Email Open Rate Is High but Sales Are Low: What Does That Mean?",
  description: "A high open rate tells you that the message was opened or at least recorded as opened.",
  alternates: { canonical: "https://www.attribix.app/resources/email-open-rate-is-high-but-sales-are-low-what-does" },
  openGraph: {
    title: "Email Open Rate Is High but Sales Are Low: What Does That Mean?",
    description: "Those metrics connect communication more closely to commercial performance than open rate alone.",
    url: "https://www.attribix.app/resources/email-open-rate-is-high-but-sales-are-low-what-does",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
