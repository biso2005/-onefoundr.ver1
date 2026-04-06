import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Clock, Mail, Inbox, Zap } from 'lucide-react'
import NewsletterCTA from '@/components/NewsletterCTA'

export const metadata: Metadata = {
  title: 'Email Marketing',
  description: 'Practical email strategies for building a list, nurturing leads, and generating repeatable revenue.',
}

export default function EmailMarketingPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#1A1A1A] text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/sales" className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to The Engine</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white text-sm font-medium mb-6">
            <Mail className="w-4 h-4" />
            <span>The Engine — Pillar 3</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Email Marketing</h1>

          <p className="text-xl text-gray-300 max-w-3xl">Practical email strategies for building a list, nurturing leads, and generating repeatable revenue.</p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50 border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8">
            <div className="flex gap-4">
              <Clock className="w-8 h-8 text-amber-600 shrink-0 mt-1" />
              <div>
                <p className="text-lg text-gray-900 mb-3"><strong>Start with a tiny list and a clear promise.</strong></p>
                <p className="text-gray-600">A small, engaged list that hears from you regularly converts better than a large, inactive list.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Simple Email System</h2>

          <div className="space-y-6">
            <div className="bg-white rounded-xl border p-6">
              <h3 className="text-xl font-semibold mb-2">1. Lead Magnet</h3>
              <p className="text-sm text-gray-600">Offer a single, high-value resource that solves an immediate problem. Keep the signup flow quick.</p>
            </div>

            <div className="bg-white rounded-xl border p-6">
              <h3 className="text-xl font-semibold mb-2">2. Welcome Sequence</h3>
              <p className="text-sm text-gray-600">3–5 emails that deliver value, set expectations, and invite a small action (reply, calendar, or mini-offer).</p>
            </div>

            <div className="bg-white rounded-xl border p-6">
              <h3 className="text-xl font-semibold mb-2">3. Weekly Touch</h3>
              <p className="text-sm text-gray-600">Send one valuable email per week: a case study, a short lesson, or an update. Consistency builds trust.</p>
            </div>

            <div className="bg-white rounded-xl border p-6">
              <h3 className="text-xl font-semibold mb-2">4. Offer Windows</h3>
              <p className="text-sm text-gray-600">Run short, focused offer periods with clear CTAs. Use email to warm and convert the list you already have.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-amber-50 border-t border-amber-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Deliverability & Hygiene</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Inbox className="w-5 h-5 text-amber-600 shrink-0 mt-1" />
              <p className="text-sm text-gray-700">Use a reputable ESP, keep your list engaged, and remove inactive subscribers periodically.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border-2 border-amber-200 p-8">
            <p className="text-gray-600 text-sm"><strong>Focus on value and clarity. Ship predictable sequences that scale with your time.</strong> Your list is an owned channel — treat it like a product.</p>
          </div>
        </div>
      </section>

      <NewsletterCTA />
    </div>
  )
}
