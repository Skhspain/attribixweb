import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Your Klaviyo Welcome Flow Isn't Converting",
  description: "A welcome flow can fail because the emails are weak, but it can also fail because the subscribers themselves have little buying intent.",
  alternates: { canonical: "https://www.attribix.app/resources/why-your-klaviyo-welcome-flow-isn-t-converting" },
  openGraph: {
    title: "Why Your Klaviyo Welcome Flow Isn't Converting",
    description: "Five emails in two days can create fatigue before the customer develops any relationship with the store.",
    url: "https://www.attribix.app/resources/why-your-klaviyo-welcome-flow-isn-t-converting",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
