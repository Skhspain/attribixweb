import "./globals.css";
import React from 'react';

export const metadata = {
  title: 'Attribix',
  description: 'Smarter Attribution. Bigger Impact.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}