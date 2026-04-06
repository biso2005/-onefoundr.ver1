'use client'

import type { Metadata } from 'next'
import { useState } from 'react'
import { Shield, TrendingUp, DollarSign, Heart, Umbrella, Clock, AlertCircle, CheckCircle2 } from 'lucide-react'
import NewsletterCTA from '@/components/NewsletterCTA'
import EmailSignupForm from '@/components/EmailSignupForm'

export default function BenefitsBuilderPage() {
  const [monthlyIncome, setMonthlyIncome] = useState<number>(3000)
  const [showCalculator, setShowCalculator] = useState(false)

  // Calculate recommended insurance amounts (simplified version)
  const recommendedEmergencyFund = Math.round(monthlyIncome * 6)
  const recommendedSickPay = Math.round(monthlyIncome * 3)
  const recommendedLifeInsurance = Math.round(monthlyIncome * 120)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-600 to-teal-800 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-semibold text-teal-100 uppercase tracking-wider">The Shield — Gateway</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">The Solopreneur Benefits Builder</h1>
            <p className="text-xl text-teal-100 leading-relaxed max-w-2xl">
              Employees get sick pay, pensions, health insurance, and paid time off. You get none of it. Here is exactly what you need to build, in what order, with interactive tools to calculate your gaps.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 md:py-20 bg-gray-50 border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8">
            <div className="flex gap-4">
              <AlertCircle className="w-8 h-8 text-amber-600 shrink-0 mt-1" />
              <div>
                <p className="text-lg text-gray-900 mb-3">
                  <strong>Most solopreneurs have zero financial protection if they can't work.</strong>
                </p>
                <p className="text-gray-600">
                  No sick pay. No emergency fund. No pension. When illness, burnout, or injury happens, income stops immediately and expenses keep going. Studies show financial stress is one of the top three reasons solopreneurs quit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 6-Layer Benefits Stack */}
      <section className="py-16 md:py-20 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The 6-Layer Benefits Stack</h2>
          <p className="text-gray-600 mb-12">Build income protection from the ground up. Each layer protects you from a different type of problem.</p>

          {/* Visual Stack */}
          <div className="space-y-4 mb-12">
            {/* Layer 6: Time Off */}
            <div className="bg-gradient-to-r from-violet-50 to-violet-100 border-2 border-violet-200 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-violet-200 rounded-lg p-2 shrink-0">
                  <Clock className="w-6 h-6 text-violet-700" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-violet-900 uppercase tracking-wider">Layer 6: Time Off</p>
                  <p className="text-violet-800 mt-1">Paid holidays, sabbaticals, and break-in periods</p>
                </div>
              </div>
            </div>

            {/* Layer 5: Life Insurance */}
            <div className="bg-gradient-to-r from-red-50 to-red-100 border-2 border-red-200 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-red-200 rounded-lg p-2 shrink-0">
                  <Umbrella className="w-6 h-6 text-red-700" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-red-900 uppercase tracking-wider">Layer 5: Life Insurance</p>
                  <p className="text-red-800 mt-1">Protect dependents and cover loans if something happens to you</p>
                </div>
              </div>
            </div>

            {/* Layer 4: Health Insurance */}
            <div className="bg-gradient-to-r from-pink-50 to-pink-100 border-2 border-pink-200 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-pink-200 rounded-lg p-2 shrink-0">
                  <Heart className="w-6 h-6 text-pink-700" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-pink-900 uppercase tracking-wider">Layer 4: Health Insurance</p>
                  <p className="text-pink-800 mt-1">Dental, vision, medical care, prescriptions</p>
                </div>
              </div>
            </div>

            {/* Layer 3: Pension/Retirement */}
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 border-2 border-orange-200 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-orange-200 rounded-lg p-2 shrink-0">
                  <TrendingUp className="w-6 h-6 text-orange-700" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-orange-900 uppercase tracking-wider">Layer 3: Pension/Retirement</p>
                  <p className="text-orange-800 mt-1">Automatic monthly contributions to long-term savings</p>
                </div>
              </div>
            </div>

            {/* Layer 2: Emergency Fund */}
            <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border-2 border-yellow-200 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-200 rounded-lg p-2 shrink-0">
                  <DollarSign className="w-6 h-6 text-yellow-700" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-yellow-900 uppercase tracking-wider">Layer 2: Emergency Fund</p>
                  <p className="text-yellow-800 mt-1">6 months of expenses saved for unexpected gaps</p>
                </div>
              </div>
            </div>

            {/* Layer 1: Income Protection (foundational) */}
            <div className="bg-gradient-to-r from-teal-50 to-teal-100 border-2 border-teal-300 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-teal-300 rounded-lg p-2 shrink-0">
                  <Shield className="w-6 h-6 text-teal-700" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-teal-900 uppercase tracking-wider">Layer 1: Income Protection Insurance</p>
                  <p className="text-teal-800 mt-1">Pay your income if illness prevents you working</p>
                </div>
              </div>
            </div>
          </div>

          {/* Build Order */}
          <div className="bg-blue-50 rounded-xl border border-blue-200 p-6">
            <p className="text-sm font-semibold text-blue-900 uppercase tracking-wider mb-4">Recommended Build Order</p>
            <ol className="space-y-3 text-sm text-blue-800">
              <li><strong>Year 1:</strong> Start emergency fund (aim for 3 months). Get income protection insurance if available in your country.</li>
              <li><strong>Year 1–2:</strong> Set up health insurance. Start a pension contribution (even small is better than nothing).</li>
              <li><strong>Year 2+:</strong> Build emergency fund to 6 months. Increase pension contributions.</li>
              <li><strong>Year 3+:</strong> Add life insurance. Plan paid time off policy for yourself.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Interactive Calculator */}
      <section className="py-16 md:py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Calculate Your Benefits Gap</h2>
          <p className="text-gray-600 mb-8">Enter your monthly income to see what financial buffers you should build.</p>

          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-4">
                What is your average monthly income (£)?
              </label>
              <input
                type="range"
                min="1000"
                max="15000"
                step="500"
                value={monthlyIncome}
                onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between items-center mt-4">
                <span className="text-3xl font-bold text-teal-600">£{monthlyIncome.toLocaleString()}</span>
                <span className="text-sm text-gray-500">per month</span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8 space-y-6">
              {/* Emergency Fund */}
              <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-100">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">Emergency Fund</p>
                    <p className="text-sm text-gray-600 mt-1">6 months of expenses (equivalent to income)</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-yellow-700">£{recommendedEmergencyFund.toLocaleString()}</p>
                    <p className="text-xs text-gray-500 mt-1">to save</p>
                  </div>
                </div>
              </div>

              {/* Income Protection */}
              <div className="bg-teal-50 rounded-lg p-6 border border-teal-100">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">Income Protection Insurance</p>
                    <p className="text-sm text-gray-600 mt-1">Monthly insurance payout if you can't work (typically covers 60% of income for 3–6 months)</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-teal-700">£{Math.round(monthlyIncome * 0.60).toLocaleString()}</p>
                    <p className="text-xs text-gray-500 mt-1">typical payout</p>
                  </div>
                </div>
              </div>

              {/* Life Insurance */}
              <div className="bg-red-50 rounded-lg p-6 border border-red-100">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">Life Insurance</p>
                    <p className="text-sm text-gray-600 mt-1">10 years salary equivalent (covers dependents and debts)</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-red-700">£{recommendedLifeInsurance.toLocaleString()}</p>
                    <p className="text-xs text-gray-500 mt-1">cover recommended</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Layer Guides */}
      <section className="py-16 md:py-20 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-12">Build Each Layer</h2>

          {/* Layer 1 */}
          <div className="mb-8 bg-white rounded-xl border border-gray-100 p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-teal-100 rounded-lg p-3 shrink-0">
                <Shield className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Layer 1: Income Protection Insurance</h3>
            </div>
            <ul className="space-y-3 text-gray-600 ml-4">
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" /> Replaces 60–70% of income if you can't work due to illness.</li>
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" /> Typically costs £30–100/month depending on age and industry.</li>
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" /> Waiting period: usually 13–52 weeks before payouts begin.</li>
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" /> Shop around: Confused.com, MoneySuperMarket, direct insurers.</li>
            </ul>
          </div>

          {/* Layer 2 */}
          <div className="mb-8 bg-white rounded-xl border border-gray-100 p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-yellow-100 rounded-lg p-3 shrink-0">
                <DollarSign className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Layer 2: Emergency Fund</h3>
            </div>
            <ul className="space-y-3 text-gray-600 ml-4">
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-yellow-600 shrink-0" /> Save 6 months of typical monthly expenses in a high-interest savings account.</li>
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-yellow-600 shrink-0" /> Start with 3 months; build to 6. Most solopreneurs reach 3 months within 12–24 months.</li>
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-yellow-600 shrink-0" /> Rules: Don't touch it except for genuine emergencies. Keep it separate from current account.</li>
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-yellow-600 shrink-0" /> Best for: Invoice payment delays, unexpected business expenses, income gaps.</li>
            </ul>
          </div>

          {/* Layer 3 */}
          <div className="mb-8 bg-white rounded-xl border border-gray-100 p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-orange-100 rounded-lg p-3 shrink-0">
                <TrendingUp className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Layer 3: Pension/Retirement</h3>
            </div>
            <ul className="space-y-3 text-gray-600 ml-4">
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0" /> Automatic monthly contributions to long-term savings (recommended: 10–15% of income).</li>
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0" /> UK option: Self-Invested Personal Pension (SIPP) or Personal Pension.</li>
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0" /> Tax relief: You get basic rate tax relief automatically (20% or more if higher earner).</li>
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0" /> Start small: Even £200/month builds to £2.4k/year + tax relief.</li>
            </ul>
          </div>

          {/* Layer 4 */}
          <div className="mb-8 bg-white rounded-xl border border-gray-100 p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-pink-100 rounded-lg p-3 shrink-0">
                <Heart className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Layer 4: Health Insurance</h3>
            </div>
            <ul className="space-y-3 text-gray-600 ml-4">
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-pink-600 shrink-0" /> Covers dental, vision, mental health, medical treatment, prescriptions.</li>
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-pink-600 shrink-0" /> UK: NHS is free; consider private health insurance for faster treatment access (£40–150/month).</li>
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-pink-600 shrink-0" /> Dental insurance: Most UK health plans include it; budget £15–50/month separately if not.</li>
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-pink-600 shrink-0" /> Mental health: Ensure your plan covers therapist/counsellor visits (critical for burnout prevention).</li>
            </ul>
          </div>

          {/* Layer 5 */}
          <div className="mb-8 bg-white rounded-xl border border-gray-100 p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-red-100 rounded-lg p-3 shrink-0">
                <Umbrella className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Layer 5: Life Insurance</h3>
            </div>
            <ul className="space-y-3 text-gray-600 ml-4">
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-red-600 shrink-0" /> Protects dependents and covers business debts if something happens to you.</li>
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-red-600 shrink-0" /> Recommended: 10 years salary equivalent or enough to clear loans + provide 5 years income replacement.</li>
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-red-600 shrink-0" /> Cost: £10–30/month for £100k–£300k cover (cheaper when you're younger).</li>
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-red-600 shrink-0" /> Types: Term life (fixed period, cheaper) vs. whole life (permanent, more expensive).</li>
            </ul>
          </div>

          {/* Layer 6 */}
          <div className="bg-white rounded-xl border border-gray-100 p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-violet-100 rounded-lg p-3 shrink-0">
                <Clock className="w-6 h-6 text-violet-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Layer 6: Paid Time Off</h3>
            </div>
            <ul className="space-y-3 text-gray-600 ml-4">
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-violet-600 shrink-0" /> Commit to taking financial breaks: holidays, sabbaticals, learning periods.</li>
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-violet-600 shrink-0" /> Build into pricing: Add 20% buffer to workload to create unpaid work time.</li>
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-violet-600 shrink-0" /> Annual target: 4–6 weeks off (continuous break or scattered weeks).</li>
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-violet-600 shrink-0" /> Fund it: Automate 3% of income into "time off" savings account.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Key Takeaway */}
      <section className="py-16 md:py-20 bg-teal-50 border-t border-teal-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border-2 border-teal-200 p-8">
            <p className="text-lg text-gray-900 mb-4"><strong>The solopreneur benefit priority:</strong></p>
            <p className="text-gray-600">You cannot replicate an employer's total benefits package. You don't need to. Build in this order: (1) Income protection insurance, (2) Emergency fund (3 months), (3) Health insurance, (4) Pension (start small), (5) Life insurance if dependents, (6) Emergency fund to 6 months. Revisit annually.</p>
          </div>
        </div>
      </section>

      {/* Gated Benefits Audit CTA */}
      <section className="py-16 md:py-20 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border border-gray-100 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Your Benefits Audit Worksheet</h3>
            <p className="text-gray-600 mb-6">Export your calculator results and receive a personalized benefits audit worksheet (email required). Identify your gaps and create an action plan.</p>
            <EmailSignupForm
              variant="stacked"
              buttonText="Get your audit"
              placeholder="your@email.com"
              successMessage="Your audit worksheet is ready"
              leadMagnetFile="/downloads/benefits-builder-audit.pdf"
            />
          </div>
        </div>
      </section>

      <NewsletterCTA />
    </div>
  )
}
