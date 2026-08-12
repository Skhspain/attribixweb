import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Tag Assistant Shows Multiple Google Tags: What Does It Mean?",
  description: "Seeing multiple Google tags is not automatically an error.",
  alternates: { canonical: "https://www.attribix.app/resources/google-tag-assistant-shows-multiple-google-tags-what" },
  openGraph: {
    title: "Google Tag Assistant Shows Multiple Google Tags: What Does It Mean?",
    description: "For every purchase destination, know exactly which integration sends it and why.",
    url: "https://www.attribix.app/resources/google-tag-assistant-shows-multiple-google-tags-what",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
