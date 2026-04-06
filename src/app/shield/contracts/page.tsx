import type { Metadata } from 'next'
import { FileText, CheckCircle2, AlertCircle } from 'lucide-react'
import NewsletterCTA from '@/components/NewsletterCTA'

export const metadata: Metadata = {
  title: 'Contracts & Agreements',
  description: 'Client agreements and legal protections every solopreneur needs.',
}

export default function ContractsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 to-indigo-800 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-semibold text-indigo-100 uppercase tracking-wider">The Shield — Track 2</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">Contracts & Agreements</h1>
            <p className="text-xl text-indigo-100 leading-relaxed max-w-2xl">
              A handshake isn't a contract. Learn which agreements you need to protect yourself from scope creep and payment disputes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50 border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8">
            <div className="flex gap-4">
              <AlertCircle className="w-8 h-8 text-amber-600 shrink-0 mt-1" />
              <div>
                <p className="text-lg text-gray-900 mb-3">
                  <strong>Most disputes start when expectations collide.</strong>
                </p>
                <p className="text-gray-600">
                  You said "30-day turnaround." They expected it yesterday. They said "unlimited revisions." You said "2 rounds." Without a contract, you lose every time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Four Essential Contracts</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-indigo-600 pl-6 bg-white p-4 rounded">
              <h3 className="font-bold text-gray-900 mb-1">1. Service Agreement / Scope of Work</h3>
              <p className="text-sm text-gray-600">Defines what you're delivering, when, payment terms, revision limits, and out-of-scope items.</p>
            </div>
            <div className="border-l-4 border-indigo-600 pl-6 bg-white p-4 rounded">
              <h3 className="font-bold text-gray-900 mb-1">2. NDA (Non-Disclosure Agreement)</h3>
              <p className="text-sm text-gray-600">For sensitive client information. Covers what's confidential and consequences of breach.</p>
            </div>
            <div className="border-l-4 border-indigo-600 pl-6 bg-white p-4 rounded">
              <h3 className="font-bold text-gray-900 mb-1">3. Terms & Conditions</h3>
              <p className="text-sm text-gray-600">For products/services. Covers license terms, liability limits, acceptable use, and refund policy.</p>
            </div>
            <div className="border-l-4 border-indigo-600 pl-6 bg-white p-4 rounded">
              <h3 className="font-bold text-gray-900 mb-1">4. Payment Terms & Invoice</h3>
              <p className="text-sm text-gray-600 mb-1">Specify due date, late fees, accepted payment methods.</p>
              <p className="text-xs text-red-600 font-semibold">CRITICAL: "No work continues until payment clears"</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-indigo-50 border-t border-indigo-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Where to Get Templates</h2>
          <div className="space-y-2">
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700"><strong>Freelance platforms:</strong> Upwork, Fiverr, Toptal have free templates</p>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700"><strong>Indie Hackers / Gumroad:</strong> $5–$20 for real solopreneur contracts</p>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700"><strong>Lawyer review:</strong> $300–$500 to customize templates if you sign 5+ contracts/year</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-indigo-50 border-t border-indigo-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border-2 border-indigo-200 p-8">
            <p className="text-gray-600 text-sm"><strong>A good contract prevents 90% of disputes.</strong> Good clients sign contracts. Bad clients resist them. Your contract is your business's immune system. Get one today.</p>
          </div>
        </div>
      </section>

      <NewsletterCTA />
    </div>
  )
}
