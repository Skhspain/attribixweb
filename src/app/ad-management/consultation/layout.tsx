import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Free Consultation Call | Attribix",
  description: "Pick a time to talk through your Meta and Google Ads setup with the team behind Attribix.",
  alternates: { canonical: "https://www.attribix.app/ad-management/consultation" },
  robots: { index: false, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
