import './globals.css'
import type { Metadata } from 'next'
import React from "react";
import { Cabin } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Spicy Guitar Academy',
  description: 'Spicy Guitar Academy',
}

const cabin = Cabin({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', ], // Specify the weights you need
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cabin.className}>
      <body className='min-h-screen'>{children}</body>
    </html>
  )
}
