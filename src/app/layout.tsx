// src/app/layout.tsx
import React from 'react'
import './globals.css'

export const metadata = {
  title: 'AttribixWeb',
  description: 'Your dashboard and analytics app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        {children}
      </body>
    </html>
  )
}