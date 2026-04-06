import type { Metadata } from 'next'
import { AlertTriangle, Zap, TrendingDown, CheckCircle2 } from 'lucide-react'
import NewsletterCTA from '@/components/NewsletterCTA'

export const metadata: Metadata = {
  title: 'Single Client & Platform Risk — Diversification Strategy',
  description: 'Avoid putting all your revenue eggs in one basket. Learn why concentration risk kills businesses and how to diversify.',
}

export default function ConcentrationRiskPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-600 to-red-800 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-semibold text-red-100 uppercase tracking-wider">The Shield — Track 1</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">Single Client & Platform Risk</h1>
            <p className="text-xl text-red-100 leading-relaxed max-w-2xl">
              One client leaving or one platform changing their policy can destroy your income. Learn why concentration risk is a business killer and how to build a resilient revenue structure.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 md:py-20 bg-gray-50 border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 mb-8">
            <div className="flex gap-4">
              <TrendingDown className="w-8 h-8 text-red-600 shrink-0 mt-1" />
              <div>
                <p className="text-lg text-gray-900 mb-3">
                  <strong>The story you don't want to live:</strong>
                </p>
                <p className="text-gray-600 mb-4">
                  Your biggest client (50% of revenue) hires in-house and drops you. Or the platform you depend on (Facebook Ads Manager, Amazon Associates, Etsy) changes their algorithm or policies. You lose 40% of income overnight. Now you're panicking, cutting expenses, and your business looks broken.
                </p>
                <p className="text-gray-600">
                  Concentration risk isn't theoretical. It happens weekly to solopreneurs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Types */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">The Two Concentration Risks You Face</h2>

          <div className="space-y-8">
            {/* 1. Single Client Risk */}
            <div className="border-l-4 border-red-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">1. Single Client Risk</h3>
              <p className="text-gray-600 mb-4">
                Consultants, freelancers, and service providers often have one client that pays 40-60% of revenue. This is existential risk.
              </p>
              <p className="text-gray-600 mb-3"><strong>Warning signs:</strong></p>
              <ul className="space-y-2 text-gray-600 list-disc list-inside">
                <li>One client makes up more than 30% of your revenue</li>
                <li>You've built your entire offering around one client's needs</li>
                <li>The client has mentioned hiring someone in-house</li>
                <li>You don't have a written contract with renewal clauses</li>
              </ul>
              <p className="text-gray-600 mt-4"><strong>Fix it:</strong></p>
              <ul className="space-y-2 text-gray-600 list-disc list-inside">
                <li>Set a rule: no client should exceed 30% of revenue</li>
                <li>Build your offering for multiple customer types (not for one)</li>
                <li>Start hunting for replacement clients before you need them</li>
                <li>Diversify into recurring revenue (productized services, retainers)</li>
              </ul>
            </div>

            {/* 2. Platform Risk */}
            <div className="border-l-4 border-red-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">2. Platform Risk</h3>
              <p className="text-gray-600 mb-4">
                You build your business on a platform (Amazon, Etsy, Facebook Ads, YouTube, Substack, Stripe, etc.) and the platform changes or closes you. Your income dies overnight.
              </p>
              <p className="text-gray-600 mb-3"><strong>Warning signs:</strong></p>
              <ul className="space-y-2 text-gray-600 list-disc list-inside">
                <li>More than 50% of revenue comes from one platform</li>
                <li>You don't control your audience (they're on the platform, not your email list)</li>
                <li>The platform has recently changed terms or policies</li>
                <li>You have no other revenue channel</li>
              </ul>
              <p className="text-gray-600 mt-4"><strong>Fix it:</strong></p>
              <ul className="space-y-2 text-gray-600 list-disc list-inside">
                <li>Build your email list (own your audience, not the platform)</li>
                <li>Diversify across platforms (YouTube + Substack, Twitter + Email, etc.)</li>
                <li>Create a direct-to-customer revenue stream (your own offer)</li>
                <li>Avoid platforms that make up more than 40% of your income</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Action Plan */}
      <section className="py-16 md:py-20 bg-red-50 border-t border-red-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Your Diversification Roadmap</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <Zap className="w-6 h-6 text-red-600 shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-900 mb-1">Month 1: Diagnose your risk</p>
                <p className="text-sm text-gray-600">List your top 5 revenue sources. Calculate the % each represents. If any exceeds 30%, flag it.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Zap className="w-6 h-6 text-red-600 shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-900 mb-1">Month 2-3: Plant diversification seeds</p>
                <p className="text-sm text-gray-600">Start a secondary revenue channel (second client, second platform, own offer). Don't expect revenue yet; focus on building.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Zap className="w-6 h-6 text-red-600 shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-900 mb-1">Month 4-6: Build your list</p>
                <p className="text-sm text-gray-600">If platform risk is high, build your email list aggressively. Email is the only platform you own.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Zap className="w-6 h-6 text-red-600 shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-900 mb-1">Ongoing: Monitor and rebalance</p>
                <p className="text-sm text-gray-600">Review your revenue sources quarterly. If concentration creeps back, tighten it immediately.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaway */}
      <section className="py-16 md:py-20 bg-red-50 border-t border-red-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border-2 border-red-200 p-8">
            <p className="text-lg text-gray-900 mb-4"><strong>Concentration risk comes for everyone eventually:</strong></p>
            <p className="text-gray-600">Your best client will leave. Your platform will change. Your biggest revenue source will dry up. The question is: will you survive it? Diversification isn't growth—it's insurance. Start today.</p>
          </div>
        </div>
      </section>

      <NewsletterCTA />
    </div>
  )
}
