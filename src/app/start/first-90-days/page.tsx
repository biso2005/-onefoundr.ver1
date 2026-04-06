import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import NewsletterCTA from '@/components/NewsletterCTA'

export const metadata: Metadata = {
  title: 'First 90 Days — OneFoundr',
  description: 'A focused plan for the first 90 days as a solo founder.',
}

export default function First90DaysPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#1A1A1A] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/start" className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-500 mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to The Spark</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white text-sm font-medium mb-6">
            <Calendar className="w-4 h-4" />
            <span>The Spark — Pillar 1</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">The First 90 Days</h1>
          <p className="text-xl text-gray-300 max-w-3xl">A focused 90-day plan to ship your first product, validate customers, and get paid.</p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 mb-6">
            <Clock className="w-8 h-8 text-orange-500" />
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">Playbook Coming Soon</h2>
          <p className="text-lg text-gray-600 mb-8">We're building a practical, week-by-week playbook for your first 90 days. Subscribe for updates and templates.</p>

          <Link href="/newsletter" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold hover:shadow-lg">
            <span>Get Notified</span>
          </Link>
        </div>
      </section>

      <NewsletterCTA />
    </div>
  )
}
