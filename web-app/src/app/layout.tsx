import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Faith Miller-Sethi | Pharmaceutical Career Mapping',
  description: 'Interactive career mapping and skills analysis for pharmaceutical industry transition',
  keywords: 'pharmaceutical, career mapping, medical affairs, business development, health economics',
  authors: [{ name: 'Faith Miller-Sethi, DrPH, MPH' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-gray-50`}>
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}
