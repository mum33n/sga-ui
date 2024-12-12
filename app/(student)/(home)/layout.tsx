import React from "react";
import { Montserrat } from 'next/font/google'
import Header from "@/components/common/Header";

const montserrat = Montserrat({
  subsets: ['latin'], // Choose your subset(s)
  weight: ['400', '500', '600', '700'], // Choose font weights you need
  // variable: '--font-montserrat',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{overflowX: "hidden"}} className={montserrat.className}>
      <body className='min-h-screen font-montserrat overflow-x-hidden'>
        <Header/>
        {children}
      </body>
    </html>
  )
}
