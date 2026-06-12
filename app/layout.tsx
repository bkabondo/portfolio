import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Benjamin Kabondo — Full-Stack Developer',
  description: 'Portfolio of Benjamin Kabondo, full-stack developer specializing in AI-powered web applications.',
  openGraph: {
    title: 'Benjamin Kabondo — Full-Stack Developer',
    description: 'Full-stack developer building AI-powered web applications.',
    url: 'https://bkabondo.vercel.app',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
