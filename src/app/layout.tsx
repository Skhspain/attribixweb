// src/app/layout.tsx
import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Attribix",
  description: "Smarter Attribution. Bigger Impact.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      {/* you can add a site-wide background, font, etc. here */}
      <body className="bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
