// src/app/layout.tsx
import React, { ReactNode } from 'react'
import './globals.css'

export const metadata = {
  title:       'Attribix',
  description: 'Smarter Attribution. Bigger Impact.',
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head />
      <body className="bg-gray-50 text-gray-900 antialiased">
        {children}
      </body>
    </html>
  )
}