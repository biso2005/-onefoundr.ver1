import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

const geist = localFont({
  src: [
    {
      path: './fonts/GeistVF.woff',
      weight: '100 900',
      style: 'normal',
    },
  ],
  variable: '--font-geist',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'OneFoundr — Build a Profitable Business. By Yourself.',
    template: '%s | OneFoundr',
  },
  description:
    'Practical guides for solo founders. Validate your idea, build your offer, get clients, and grow — on your terms.',
  keywords: [
    'solo founder',
    'solopreneur',
    'start a business',
    'business ideas',
    'freelance',
    'build in public',
    'UK business',
  ],
  authors: [{ name: 'OneFoundr' }],
  creator: 'OneFoundr',
  metadataBase: new URL('https://onefoundr.com'),
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://onefoundr.com',
    siteName: 'OneFoundr',
    title: 'OneFoundr — Build a Profitable Business. By Yourself.',
    description:
      'Practical guides for solo founders. Validate your idea, build your offer, get clients, and grow — on your terms.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OneFoundr — Build a Profitable Business. By Yourself.',
    description:
      'Practical guides for solo founders. Validate your idea, build your offer, get clients, and grow — on your terms.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB" className={geist.variable}>
      <body className="font-sans bg-white text-gray-900 antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
