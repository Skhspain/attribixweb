import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Are You Sending Too Many Marketing Emails?",
  description: "You are sending too many emails when the marginal message creates less value than the fatigue it causes.",
  alternates: { canonical: "https://www.attribix.app/resources/are-you-sending-too-many-marketing-emails" },
  openGraph: {
    title: "Are You Sending Too Many Marketing Emails?",
    description: "Segmentation, product interest and lifecycle timing often create more value than another generic campaign to the full list.",
    url: "https://www.attribix.app/resources/are-you-sending-too-many-marketing-emails",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
