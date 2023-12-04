import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import React from "react";

const poppins = Poppins({ subsets: ["latin"], weight: ["200", "600"]})

export const metadata: Metadata = {
  title: 'AirB2B',
  description: 'A bare parody of airbnb based on the Learn React tutorial on Scrimba',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
