import type { Metadata } from 'next'
import { DollarSign, Shield, TrendingUp, CheckCircle2 } from 'lucide-react'
import NewsletterCTA from '@/components/NewsletterCTA'

export const metadata: Metadata = {
  title: 'Pricing for Protection — Build in Your Buffer',
  description: 'Price your offers to include cost protection and margin for the unexpected.',
}

export default function PricingProtectionPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 to-purple-800 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-semibold text-purple-100 uppercase tracking-wider">The Shield — Track 1</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">Pricing for Protection</h1>
            <p className="text-xl text-purple-100 leading-relaxed max-w-2xl">
              Most solopreneurs underprice to win deals. Learn to build protection into your pricing: margin for unexpected costs, taxes, sick days, and business resilience.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-20 bg-gray-50 border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 mb-8">
            <div className="flex gap-4">
              <Shield className="w-8 h-8 text-purple-600 shrink-0 mt-1" />
              <div>
                <p className="text-lg text-gray-900 mb-3">
                  <strong>Underpricing kills businesses faster than overspending.</strong>
                </p>
                <p className="text-gray-600">
                  You quote $5k for a project. Scope creeps. You spend 200 hours. You end up at $25/hour. Meanwhile, you owe quarterly taxes on that $5k, you haven't built a buffer for downtime, and you have zero margin for tools, training, or emergency reserves. Pricing for protection means building in margin that covers reality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Framework */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">The Protected Pricing Framework</h2>

          <div className="space-y-8">
            {/* 1. Cost-Based Floor */}
            <div className="border-l-4 border-purple-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">1. Start with your cost-based floor</h3>
              <p className="text-gray-600 mb-4">
                Calculate: (Your annual expenses) ÷ (Billable hours per year) = Minimum hourly rate
              </p>
              <ul className="space-y-2 text-gray-600 list-disc list-inside mb-4">
                <li>Annual expenses (salary target, tools, taxes, benefits, insurance)</li>
                <li>Billable hours: 52 weeks × 40 hours minus 2 weeks vacation = ~1,920 hours</li>
                <li>Add 20-30% for time not billable (admin, marketing, proposals)</li>
              </ul>
              <p className="text-gray-600 text-sm bg-purple-50 p-3 rounded">Example: $120k annual expenses ÷ 1,500 billable hours = $80/hour minimum</p>
            </div>

            {/* 2. Add Protection Layers */}
            <div className="border-l-4 border-purple-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">2. Add protection layers on top</h3>
              <p className="text-gray-600 mb-4">
                Your base rate covers existing costs. Protection layers cover the unexpected and let you survive downtime:
              </p>
              <ul className="space-y-2 text-gray-600 list-disc list-inside">
                <li><strong>Tax burden (25-35%):</strong> Add this to your rate now, not later</li>
                <li><strong>Sick days / vacation (10-15%):</strong> You don't bill every day</li>
                <li><strong>Scope creep buffer (15-20%):</strong> Most projects expand beyond scope</li>
                <li><strong>Sales & marketing (10-15%):</strong> Time spent hunting clients</li>
                <li><strong>Profit margin (15-25%):</strong> For growth, reserves, and business resilience</li>
              </ul>
            </div>

            {/* 3. Project Pricing */}
            <div className="border-l-4 border-purple-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">3. Convert to project pricing</h3>
              <p className="text-gray-600 mb-4">
                Most solopreneurs quote by project, not hourly. Use your protected rate to set project prices:
              </p>
              <ul className="space-y-2 text-gray-600 list-disc list-inside">
                <li>Estimate realistic hours (not optimistic hours)</li>
                <li>Multiply by your protected rate</li>
                <li>Add 20% contingency for the unforeseen</li>
                <li>Add 10% for the client changing their mind</li>
              </ul>
              <p className="text-gray-600 text-sm bg-purple-50 p-3 rounded mt-4">Example: 40 hours × $125/hour (with protection) × 1.3 (contingency) = $6,500</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Uncomfortable Truth */}
      <section className="py-16 md:py-20 bg-purple-50 border-t border-purple-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">The Uncomfortable Truth About Pricing</h2>
          <div className="bg-white rounded-xl border border-purple-200 p-8">
            <p className="text-gray-600 mb-4">
              <strong>You will lose some deals because of your price.</strong> That's a feature, not a bug. The clients you lose are the ones who would have undervalued you, demanded scope creep, and paid late. The clients you keep are the ones who value good work and can pay for quality.
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Raising your price doesn't hurt as much as you think.</strong> Most solopreneurs discover that a 20-30% price increase loses only 10-15% of *potential* clients, but increases profit by 40-50%. The deal mix improves faster than volume declines.
            </p>
            <p className="text-gray-600">
              <strong>Your protection isn't greed. It's sanity.</strong> You need margin to absorb tax bills, handle emergencies, and stay resilient. Without it, you're running a lifestyle business that collapses under pressure.
            </p>
          </div>
        </div>
      </section>

      {/* Key Takeaway */}
      <section className="py-16 md:py-20 bg-purple-50 border-t border-purple-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border-2 border-purple-200 p-8">
            <p className="text-lg text-gray-900 mb-4"><strong>Your price is a direct line to your resilience:</strong></p>
            <p className="text-gray-600">Underprice and you'll scramble. Price with protection and you'll sleep better. The best part? Clients who can afford to pay your full rate are usually the best clients to work with. Raise your prices today.</p>
          </div>
        </div>
      </section>

      <NewsletterCTA />
    </div>
  )
}
