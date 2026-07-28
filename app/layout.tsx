import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'K. Hemalatha Reddy — AI/ML Engineer',
  description: 'AI/ML Engineer building intelligent systems at the intersection of machine learning and real-world impact. Student at Amrita Vishwa Vidyapeetham.',
  keywords: ['AI Engineer', 'ML Engineer', 'Machine Learning', 'Python', 'NLP', 'Deep Learning'],
  authors: [{ name: 'K. Hemalatha Reddy' }],
  openGraph: {
    title: 'K. Hemalatha Reddy — AI/ML Engineer',
    description: 'Building intelligent systems from the ground up.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-void text-slate-200 font-body antialiased">
        {children}
      </body>
    </html>
  )
}
