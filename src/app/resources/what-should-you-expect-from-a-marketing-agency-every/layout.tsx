import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Should You Expect From a Marketing Agency Every Month?",
  description: "A good agency month should contain more than a report showing what happened.",
  alternates: { canonical: "https://www.attribix.app/resources/what-should-you-expect-from-a-marketing-agency-every" },
  openGraph: {
    title: "What Should You Expect From a Marketing Agency Every Month?",
    description: "Some clients need weekly calls.",
    url: "https://www.attribix.app/resources/what-should-you-expect-from-a-marketing-agency-every",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
