import './globals.css'
import type { Metadata } from 'next'
import React from "react";

export const metadata: Metadata = {
  title: 'Spicy Guitar Academy',
  description: 'Spicy Guitar Academy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='min-h-screen bg-white font-montserrat'>{children}</body>
    </html>
  )
}
