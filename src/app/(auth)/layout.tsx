import type { Metadata } from 'next'
import '../globals.css'

export const metadata: Metadata = {
  title: 'K-COIN | Auth',
  description: 'The icon shop for your perfect application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
