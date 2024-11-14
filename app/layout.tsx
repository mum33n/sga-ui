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
  display: 'swap',
  // weight: ['400','500','600','700'],  // You can customize the font weights you need
  variable: '--font-cabin',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cabin.className}>
      <body className='min-h-screen bg-white'>{children}</body>
    </html>
  )
}
