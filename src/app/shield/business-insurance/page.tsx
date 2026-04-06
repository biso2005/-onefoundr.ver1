import type { Metadata } from 'next'
import { Shield, CheckCircle2, AlertCircle } from 'lucide-react'
import NewsletterCTA from '@/components/NewsletterCTA'

export const metadata: Metadata = {
  title: 'Business Insurance',
  description: 'The insurance tiers every solopreneur should have coverage for.',
}

export default function BusinessInsurancePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-cyan-600 to-cyan-800 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-semibold text-cyan-100 uppercase tracking-wider">The Shield — Track 3</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">Business Insurance</h1>
            <p className="text-xl text-cyan-100 leading-relaxed max-w-2xl">
              One lawsuit can end your business. Three insurance policies can save it.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50 border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8">
            <div className="flex gap-4">
              <AlertCircle className="w-8 h-8 text-red-600 shrink-0 mt-1" />
              <div>
                <p className="text-lg text-gray-900 mb-3">
                  <strong>No insurance = infinite liability.</strong>
                </p>
                <p className="text-gray-600">
                  You accidentally delete a client's database. They sue for $50k. Without General Liability, your personal assets are fair game.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Three-Tier Insurance Coverage</h2>
          
          <div className="mb-8 border-l-4 border-red-600 pl-6 bg-white p-6 rounded">
            <h3 className="text-xl font-bold text-gray-900 mb-2">🔴 MUST-HAVE (Priority 1)</h3>
            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex gap-2">
                <span className="text-red-600 font-bold">•</span>
                <div>
                  <p><strong>General Liability Insurance</strong> — Covers bodily injury and property damage. Costs $300–600/year. Covers 90% of claims against solopreneurs.</p>
                </div>
              </div>
              <div className="flex gap-2">
                <span className="text-red-600 font-bold">•</span>
                <div>
                  <p><strong>Professional Liability / E&O</strong> — Covers errors in your services. If you give bad advice or deliver broken work, this protects you. $400–800/year depending on industry.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8 border-l-4 border-yellow-600 pl-6 bg-white p-6 rounded">
            <h3 className="text-xl font-bold text-gray-900 mb-2">🟡 SHOULD-HAVE (Priority 2)</h3>
            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex gap-2">
                <span className="text-yellow-600 font-bold">•</span>
                <div>
                  <p><strong>Cyber Liability / Data Breach Insurance</strong> — Covers costs if client data is stolen. Includes legal defense, notification costs, forensics. $500–1500/year for solopreneurs.</p>
                </div>
              </div>
              <div className="flex gap-2">
                <span className="text-yellow-600 font-bold">•</span>
                <div>
                  <p><strong>Business Personal Property / Equipment Coverage</strong> — Your laptop, camera, tools are stolen/damaged. $2k–5k coverage costs $200–400/year.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-green-600 pl-6 bg-white p-6 rounded">
            <h3 className="text-xl font-bold text-gray-900 mb-2">🟢 CONSIDER (Priority 3)</h3>
            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex gap-2">
                <span className="text-green-600 font-bold">•</span>
                <div>
                  <p><strong>Umbrella / Excess Liability</strong> — Additional $1M–2M coverage on top of general liability. $200–400/year once you have base coverage.</p>
                </div>
              </div>
              <div className="flex gap-2">
                <span className="text-green-600 font-bold">•</span>
                <div>
                  <p><strong>Workers Comp (if you hire contractors)</strong> — In many states, required if paying contractors. Varies by state and payroll, typically $1k+/year.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-cyan-50 border-t border-cyan-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Where to Buy Insurance</h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700"><strong>Small biz platforms:</strong> The Hartford, Nationwide, Stride Health (US-focused)</p>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700"><strong>Broker route:</strong> Local insurance broker quotes 3–5 carriers for you. Often finds better rates.</p>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700"><strong>Industry groups:</strong> Your trade association (freelance author org, web designers guild, etc.) often has group rates.</p>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700"><strong>Tax deductible:</strong> Business insurance premiums are 100% tax-deductible. Save receipts.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-cyan-50 border-t border-cyan-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border-2 border-cyan-200 p-8">
            <p className="text-gray-600 text-sm"><strong>Start with General Liability + Professional Liability this month.</strong> Add Cyber Liability once you're handling client data. Costs $800–$1500/year total for full solopreneur protection. One claim could cost $50k–$500k. The math is simple.</p>
          </div>
        </div>
      </section>

      <NewsletterCTA />
    </div>
  )
}
