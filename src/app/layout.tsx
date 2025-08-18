// File: src/app/layout.tsx
import "./globals.css";
import React from "react";

export const metadata = {
  title: "Attribix",
  description: "Smarter Attribution. Bigger Impact.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log("✅ ROOT LAYOUT RAN");
  return (
    <html lang="en">
      <body className="bg-[#0f172a] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
