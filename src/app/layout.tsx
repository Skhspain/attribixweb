// src/app/layout.tsx
import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title:       'Attribix',
  description: 'Smarter Attribution. Bigger Impact.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-gray-50 text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}