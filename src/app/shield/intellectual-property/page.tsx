import type { Metadata } from 'next'
import { Lightbulb, CheckCircle2, AlertCircle } from 'lucide-react'
import NewsletterCTA from '@/components/NewsletterCTA'

export const metadata: Metadata = {
  title: 'Intellectual Property',
  description: 'Protect your ideas, methods, and brand from being stolen or copied.',
}

export default function IntellectualPropertyPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-600 to-orange-800 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-semibold text-orange-100 uppercase tracking-wider">The Shield — Track 2</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">Intellectual Property</h1>
            <p className="text-xl text-orange-100 leading-relaxed max-w-2xl">
              Your unique methods, frameworks, and brand are your moat. Learn which IP protections you actually need and how to claim them.
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
                  <strong>Your framework is worthless if competitors copy it for free.</strong>
                </p>
                <p className="text-gray-600">
                  You spend months building a unique process. A competitor reverses it and undercuts your price by 20%. Without IP protection, you lose everything.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">The Four Types of IP Every Solopreneur Should Know</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-orange-600 pl-6 bg-white p-6 rounded">
              <h3 className="text-xl font-bold text-gray-900 mb-2">1. Copyright (Automatic)</h3>
              <p className="text-sm text-gray-600 mb-3">Your blog posts, code, templates, videos, writing = automatically protected from the moment they're created. No registration required.</p>
              <p className="text-xs bg-orange-50 p-3 rounded text-gray-700"><strong>Action:</strong> Add "© 2024 [Your Name]. All rights reserved." to original work. Strengthens legal position if copied.</p>
            </div>

            <div className="border-l-4 border-orange-600 pl-6 bg-white p-6 rounded">
              <h3 className="text-xl font-bold text-gray-900 mb-2">2. Trade Secrets (No Registration Needed)</h3>
              <p className="text-sm text-gray-600 mb-3">Proprietary methods, pricing, client lists, formulas that give you an edge.</p>
              <p className="text-xs bg-orange-50 p-3 rounded text-gray-700"><strong>Action:</strong> Use NDAs with team/subcontractors. Document that you kept it secret. Legally protectable if genuinely confidential.</p>
            </div>

            <div className="border-l-4 border-orange-600 pl-6 bg-white p-6 rounded">
              <h3 className="text-xl font-bold text-gray-900 mb-2">3. Trademark ($225–500 to Register)</h3>
              <p className="text-sm text-gray-600 mb-3">Your brand name, logo, tagline = protected from others using similar marks in the same market.</p>
              <p className="text-xs bg-orange-50 p-3 rounded text-gray-700"><strong>Action:</strong> File with USPTO (US) if you've been using it 6+ months. $225 filing fee. International? Madrid Protocol filing = $350–$500 per country class.</p>
            </div>

            <div className="border-l-4 border-orange-600 pl-6 bg-white p-6 rounded">
              <h3 className="text-xl font-bold text-gray-900 mb-2">4. Patents ($2k–$5k+ to File)</h3>
              <p className="text-sm text-gray-600 mb-3">Novel, non-obvious process or product invention. Rare for solopreneurs unless you build physical products or unique software.</p>
              <p className="text-xs bg-orange-50 p-3 rounded text-gray-700"><strong>Action:</strong> File a provisional patent ($50–$150 filing fee) before disclosing publicly. Gives you 1 year to decide if full patent is worth the cost.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-orange-50 border-t border-orange-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick IP Audit for You</h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700"><strong>Blog/Content:</strong> Add © copyright notice. Done. It's copyrighted.</p>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700"><strong>Proprietary Process:</strong> Document the system. Use NDAs with clients/team. Store securely.</p>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700"><strong>Brand Name/Logo:</strong> Check availability on USPTO.gov. If unique and you use it commercially, file trademark application ($225).</p>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700"><strong>Unique Software/Product:</strong> Consider provisional patent ($50–$150) if truly novel.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-orange-50 border-t border-orange-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border-2 border-orange-200 p-8">
            <p className="text-gray-600 text-sm"><strong>You don't need to register everything, but you do need to protect what you've built.</strong> Copyright is automatic. Trademark ($225) protects your brand. Trade secrets (NDA + documentation) protect your methods. That's the defensive trinity most solopreneurs need.</p>
          </div>
        </div>
      </section>

      <NewsletterCTA />
    </div>
  )
}
