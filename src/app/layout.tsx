// src/app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "Attribix",
  description: "Smarter Attribution. Bigger Impact.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}