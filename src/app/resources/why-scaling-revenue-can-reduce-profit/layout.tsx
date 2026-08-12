import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Scaling Revenue Can Reduce Profit",
  description: "Revenue can grow while profit falls when the next sales are more expensive to acquire or less profitable to fulfil.",
  alternates: { canonical: "https://www.attribix.app/resources/why-scaling-revenue-can-reduce-profit" },
  openGraph: {
    title: "Why Scaling Revenue Can Reduce Profit",
    description: "Ask what each additional block of spend and sales adds after variable cost.",
    url: "https://www.attribix.app/resources/why-scaling-revenue-can-reduce-profit",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
