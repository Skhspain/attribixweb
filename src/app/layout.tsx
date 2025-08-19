import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Attribix",
  description: "Smarter Attribution. Bigger Impact.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#0f172a] text-white antialiased">{children}</body>
    </html>
  );
}
