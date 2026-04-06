import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Clock, Zap } from 'lucide-react'
import NewsletterCTA from '@/components/NewsletterCTA'

export const metadata: Metadata = {
  title: 'Proposals — OneFoundr',
  description: 'Create compelling proposals that communicate value, address objections, and win high-value clients.',
}

export default function ProposalsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#1A1A1A] text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/sales" className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to The Engine</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            <span>The Engine — Pillar 3</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Proposals</h1>

          <p className="text-xl text-gray-300 max-w-3xl">Create compelling proposals that communicate value, address objections, and win high-value clients.</p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 mb-6">
            <Clock className="w-8 h-8 text-amber-600" />
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">Guide Coming Soon</h2>
          <p className="text-lg text-gray-600 mb-8">We're crafting an in-depth guide on writing winning proposals. Want to be notified when it's ready? Join our newsletter for updates and early access to new content.</p>

          <Link href="/newsletter" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold hover:shadow-lg transition-shadow">
            <span>Get Notified</span>
            <ArrowLeft className="w-5 h-5 rotate-180" />
          </Link>
        </div>
      </section>

      <NewsletterCTA />
    </div>
  )
}
