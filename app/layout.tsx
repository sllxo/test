import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Slit Bot',
  description: 'Invite Slit Discord Bot',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
