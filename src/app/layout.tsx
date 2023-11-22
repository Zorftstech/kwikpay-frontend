import type { Metadata } from 'next'
import './globals.css'
import StyledComponentsRegistry from "./lib/registry";


export const metadata: Metadata = {
  title: 'KwikPay',
  description: "Say goodbye to long queues and hello to digital fee payments, Pay your school fees digitally, anytime, anywhere.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
        </body>
    </html>
  )
}
