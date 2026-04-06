import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, FileText, DollarSign, CheckSquare } from 'lucide-react'
import NewsletterCTA from '@/components/NewsletterCTA'

export const metadata: Metadata = {
  title: 'Proposals',
  description: 'Write clear, persuasive proposals that communicate outcomes, pricing options, and next steps.',
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
            <FileText className="w-4 h-4" />
            <span>The Engine — Proposals</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Proposals</h1>

          <p className="text-xl text-gray-300 max-w-3xl">Write clear, persuasive proposals that communicate outcomes, pricing options, and next steps.</p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50 border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8">
            <div className="flex gap-4">
              <CheckSquare className="w-8 h-8 text-amber-600 shrink-0 mt-1" />
              <div>
                <p className="text-lg text-gray-900 mb-3"><strong>Proposals are sales documents — not contracts.</strong></p>
                <p className="text-gray-600">Lead with outcomes, show pricing clearly, and end with a simple next step that the client can say yes to.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Proposal Structure That Converts</h2>

          <div className="space-y-6">
            <div className="bg-white rounded-xl border p-6">
              <h3 className="text-xl font-semibold mb-2">1. One-Page Summary</h3>
              <p className="text-sm text-gray-600">Start with a concise summary of the problem, your proposed solution, and the expected outcome.</p>
            </div>

            <div className="bg-white rounded-xl border p-6">
              <h3 className="text-xl font-semibold mb-2">2. Scope & Deliverables</h3>
              <p className="text-sm text-gray-600">List what you'll deliver, what you won't, and any client responsibilities to avoid scope creep.</p>
            </div>

            <div className="bg-white rounded-xl border p-6">
              <h3 className="text-xl font-semibold mb-2">3. Pricing Options</h3>
              <p className="text-sm text-gray-600">Offer 2–3 pricing tiers (Good / Better / Best) and a recommended option. Make the decision obvious.</p>
            </div>

            <div className="bg-white rounded-xl border p-6">
              <h3 className="text-xl font-semibold mb-2">4. Timeline & Next Steps</h3>
              <p className="text-sm text-gray-600">Be explicit about timelines, milestones, and the simple action the client must take to start.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-amber-50 border-t border-amber-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Proposal Checklist</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Clear outcome-driven headline</li>
            <li>Pricing with an obvious recommended option</li>
            <li>Simple next step (call, sign, invoice)</li>
            <li>Contact details and optional legal appendix</li>
          </ul>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border-2 border-amber-200 p-8">
            <p className="text-gray-600 text-sm"><strong>Ship a short, clear proposal and follow up within 48 hours.</strong> Speed and clarity increase close rates.</p>
          </div>
        </div>
      </section>

      <NewsletterCTA />
    </div>
  )
}
