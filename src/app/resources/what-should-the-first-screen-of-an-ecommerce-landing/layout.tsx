import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Should the First Screen of an Ecommerce Landing Page Say?",
  description: "The first screen should confirm the visitor came to the right place and give them a reason to keep going.",
  alternates: { canonical: "https://www.attribix.app/resources/what-should-the-first-screen-of-an-ecommerce-landing" },
  openGraph: {
    title: "What Should the First Screen of an Ecommerce Landing Page Say?",
    description: "The first phone screen often has far less room than the desktop mockup.",
    url: "https://www.attribix.app/resources/what-should-the-first-screen-of-an-ecommerce-landing",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
