import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Is a Good Contribution Margin After Advertising?",
  description: "There is no universal “good” contribution margin after ads because businesses have very different fixed costs, growth goals and repeat-customer economics.",
  alternates: { canonical: "https://www.attribix.app/resources/what-is-a-good-contribution-margin-after-advertising" },
  openGraph: {
    title: "What Is a Good Contribution Margin After Advertising?",
    description: "= contribution available for fixed cost/profit.",
    url: "https://www.attribix.app/resources/what-is-a-good-contribution-margin-after-advertising",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Attribix" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
