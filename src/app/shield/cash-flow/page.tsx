import type { Metadata } from 'next'
import { TrendingUp, DollarSign, AlertCircle, CheckCircle2 } from 'lucide-react'
import NewsletterCTA from '@/components/NewsletterCTA'

export const metadata: Metadata = {
  title: 'Cash Flow Management — Runway & Forecasting',
  description: 'Manage cash flow, build runway, and forecast revenue gaps before they become crises.',
}

export default function CashFlowPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-600 to-emerald-800 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-semibold text-emerald-100 uppercase tracking-wider">The Shield — Track 1</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">Cash Flow Management</h1>
            <p className="text-xl text-emerald-100 leading-relaxed max-w-2xl">
              Cash flow is the difference between revenue and survival. Learn to forecast, build runway, and spot gaps before they become crises.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-20 bg-gray-50 border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 mb-8">
            <div className="flex gap-4">
              <AlertCircle className="w-8 h-8 text-amber-600 shrink-0 mt-1" />
              <div>
                <p className="text-lg text-gray-900 mb-3">
                  <strong>You can be profitable and run out of cash.</strong>
                </p>
                <p className="text-gray-600">
                  Most solo founders have no cash flow forecasting. You have revenue, but you don't know when it hits your account. You have expenses, but you don't know which months will strain you. You wake up at 2am wondering if you can make payroll (even if it's just you). Cash flow management prevents the panic and gives you time to act.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Four Pillars of Cash Flow */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">The Four Pillars of Cash Flow</h2>

          <div className="space-y-8">
            {/* 1. Forecasting */}
            <div className="border-l-4 border-emerald-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">1. Forecasting — See Three Months Ahead</h3>
              <p className="text-gray-600 mb-4">
                Map your revenue and expenses across the next 90 days. Which months are strong? Which are thin? When do annual expenses hit? Build a simple spreadsheet or use cash flow software.
              </p>
              <ul className="space-y-2 text-gray-600 list-disc list-inside">
                <li>Track when revenue actually lands (not when you invoice)</li>
                <li>List all monthly, quarterly, and annual expenses</li>
                <li>Calculate your minimum cash balance each month</li>
                <li>Identify the two-three months where you're tightest</li>
              </ul>
            </div>

            {/* 2. Runway */}
            <div className="border-l-4 border-emerald-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">2. Runway — Know How Long You Can Last</h3>
              <p className="text-gray-600 mb-4">
                Your runway is: (Current Cash Balance) ÷ (Average Monthly Burn). It answers: How many months can I operate if revenue stops tomorrow?
              </p>
              <ul className="space-y-2 text-gray-600 list-disc list-inside">
                <li>Calculate your monthly burn rate (expenses minus revenue)</li>
                <li>Update this monthly as your business changes</li>
                <li>Aim for 3-6 months minimum as a solo founder</li>
                <li>If it drops below 2 months, prioritize revenue or cut expenses</li>
              </ul>
            </div>

            {/* 3. Seasonality */}
            <div className="border-l-4 border-emerald-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">3. Seasonality — Prepare for Predictable Dips</h3>
              <p className="text-gray-600 mb-4">
                Most solopreneurs have revenue patterns. Q4 might be strong; January weak. Summer might be slow. Build cash reserves during strong months to weather predictable dips.
              </p>
              <ul className="space-y-2 text-gray-600 list-disc list-inside">
                <li>Track your revenue patterns over the past 2-3 years</li>
                <li>Identify your strong and weak periods</li>
                <li>Save 20-30% of strong-month revenue for weak months</li>
                <li>Plan marketing/outreach to smooth valleys</li>
              </ul>
            </div>

            {/* 4. Flexibility */}
            <div className="border-l-4 border-emerald-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">4. Flexibility — Control What You Can</h3>
              <p className="text-gray-600 mb-4">
                You can't control revenue, but you can control expenses. Know which costs are fixed and which are variable. Build the ability to cut or defer expenses quickly if needed.
              </p>
              <ul className="space-y-2 text-gray-600 list-disc list-inside">
                <li>List fixed costs (rent, subscriptions, insurance)</li>
                <li>List variable costs that can be cut quickly</li>
                <li>Negotiate payment terms with vendors (30-60 day terms help you)</li>
                <li>Keep 2-3 months of fixed costs as emergency reserve</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Win */}
      <section className="py-16 md:py-20 bg-emerald-50 border-t border-emerald-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Quick Start</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-900 mb-1">This week: Build a 90-day cash forecast</p>
                <p className="text-sm text-gray-600">List expected revenue and all known expenses for the next quarter.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-900 mb-1">This month: Calculate your runway</p>
                <p className="text-sm text-gray-600">Divide your current cash by monthly burn. Is it where you want it?</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-900 mb-1">Going forward: Review monthly</p>
                <p className="text-sm text-gray-600">Update your forecast the first week of each month. 15 minutes of clarity saves months of stress.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaway */}
      <section className="py-16 md:py-20 bg-emerald-50 border-t border-emerald-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border-2 border-emerald-200 p-8">
            <p className="text-lg text-gray-900 mb-4"><strong>Cash flow is where dreams die and reality hits:</strong></p>
            <p className="text-gray-600">You don't go out of business because you're not profitable. You go out of business because you run out of cash. Forecasting, runway, and flexibility turn cash flow from anxiety to strategy. Spend 2 hours now to sleep better every night.</p>
          </div>
        </div>
      </section>

      <NewsletterCTA />
    </div>
  )
}
