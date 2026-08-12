import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Good Email Click Rate but No Sales: What to Check",
  description: "If email recipients click and do not buy, stop optimizing the subject line.",
  alternates: { canonical: "https://www.attribix.app/resources/good-email-click-rate-but-no-sales-what-to-check" },
  openGraph: {
    title: "Good Email Click Rate but No Sales: What to Check",
    description: "Some customers click, return later directly and buy.",
    url: "https://www.attribix.app/resources/good-email-click-rate-but-no-sales-what-to-check",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
