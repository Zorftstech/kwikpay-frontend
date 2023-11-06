import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'KwikPay',
  description: "Say goodbye to the hassle of cash and checks. With KwikPay, you can make payments and transfer funds with a few simple taps on your device, whether you're at the store, dining out, or sending money to a friend. Our app is designed to work everywhere you go.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
