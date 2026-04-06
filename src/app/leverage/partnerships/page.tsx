import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Clock, TrendingUp } from 'lucide-react'
import NewsletterCTA from '@/components/NewsletterCTA'

export const metadata: Metadata = {
  title: 'Partnerships — OneFoundr',
  description: 'Build strategic partnerships that expand your reach, share resources, and create mutual value without equity dilution.',
}

export default function PartnershipsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#1A1A1A] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/leverage"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to The Leverage</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-400 to-rose-500 text-white text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4" />
            <span>The Leverage — Pillar 5</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Partnerships</h1>

          <p className="text-xl text-gray-300 max-w-3xl">Build strategic partnerships that expand your reach, share resources, and create mutual value without equity dilution.</p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 mb-6">
            <Clock className="w-8 h-8 text-orange-600" />
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">Guide Coming Soon</h2>
          <p className="text-lg text-gray-600 mb-8">We're crafting an in-depth guide on building strategic partnerships. Want to be notified when it's ready? Join our newsletter for updates and early access to new content.</p>

          <Link href="/newsletter" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-orange-400 to-rose-500 text-white font-semibold hover:shadow-lg transition-shadow">
            <span>Get Notified</span>
            <ArrowLeft className="w-5 h-5 rotate-180" />
          </Link>
        </div>
      </section>

      <NewsletterCTA />
    </div>
  )
}
