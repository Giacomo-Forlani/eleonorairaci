import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Portfolio di Architettura',
  description: 'Portfolio personale con contenuti gestiti da Sanity.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <body className="bg-background text-text">
        {children}
      </body>
    </html>
  )
}
