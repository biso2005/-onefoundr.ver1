import type { Metadata } from 'next'
import { FileCheck, AlertCircle, DollarSign, CheckCircle2 } from 'lucide-react'
import NewsletterCTA from '@/components/NewsletterCTA'

export const metadata: Metadata = {
  title: 'Tax Efficiency & Compliance',
  description: 'Minimize tax liability and stay compliant without hiring expensive accountants.',
}

export default function TaxEfficiencyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                <FileCheck className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-semibold text-blue-100 uppercase tracking-wider">The Shield — Track 1</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">Tax Efficiency & Compliance</h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
              Tax strategy separates solopreneurs who keep more money from those who leave it with the government. Learn what's deductible, how to structure your business, and when to hire professional help.
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
                  <strong>Most solopreneurs overpay their taxes by 20-30%.</strong>
                </p>
                <p className="text-gray-600">
                  You don't need a fancy accountant to get this right. You need to know three things: what you can deduct, which business structure works best, and when filing requires professional help. This guide covers the fundamentals that save thousands per year.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Concepts */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Three Pillars of Tax Efficiency</h2>

          <div className="space-y-8">
            {/* 1. Deductions */}
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">1. Know Your Deductions</h3>
              <p className="text-gray-600 mb-4">
                A deduction reduces your taxable income. Most solopreneurs miss legitimate write-offs worth thousands. Track everything business-related:
              </p>
              <ul className="space-y-2 text-gray-600 list-disc list-inside">
                <li>Home office (square footage × IRS rate, or simplified method)</li>
                <li>Equipment, software, subscriptions, and supplies</li>
                <li>Professional services (contractors, tools, courses)</li>
                <li>Travel, meals, and client-related expenses (with receipts)</li>
                <li>Phone, internet (business portion)</li>
                <li>Insurance, accounting, and legal fees</li>
              </ul>
              <p className="text-gray-600 mt-4"><strong>Rule of thumb:</strong> If you had to buy it for your business, you can probably deduct it. Keep receipts for 3-7 years.</p>
            </div>

            {/* 2. Business Structure */}
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">2. Choose the Right Business Structure</h3>
              <p className="text-gray-600 mb-4">
                Your legal structure affects how much tax you pay. For most solopreneurs, the choice is between Sole Proprietor, LLC, or S-Corp.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li><strong>Sole Proprietor:</strong> Simple, no filing. You pay self-employment tax (15.3%) on all income. Good if revenue is under $40k/year.</li>
                <li><strong>LLC:</strong> Separate entity, limited liability. No self-employment tax savings, but protects personal assets. Good if you want liability protection or plan to grow.</li>
                <li><strong>S-Corp:</strong> Complex, but saves 15% on self-employment tax if income is $60k+. Only worth it if you can show a "reasonable salary" to yourself.</li>
              </ul>
            </div>

            {/* 3. Quarterly Obligations */}
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">3. Stay on Top of Quarterly Obligations</h3>
              <p className="text-gray-600 mb-4">
                Solopreneurs pay taxes quarterly (not yearly) to avoid penalties. Missing a deadline costs money and stress.
              </p>
              <ul className="space-y-2 text-gray-600 list-disc list-inside">
                <li>Estimated tax payments are due April 15, June 15, Sept 15, Dec 15</li>
                <li>Calculate: (Income - Deductions) × Tax Rate ÷ 4 (rough estimate)</li>
                <li>Pay via IRS Direct Pay or your bank online</li>
                <li>Use a tax software or spreadsheet to track quarterly numbers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* When to Hire Help */}
      <section className="py-16 md:py-20 bg-blue-50 border-t border-blue-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">When to Hire a CPA or Tax Professional</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-900 mb-1">Income exceeds $100k/year</p>
                <p className="text-sm text-gray-600">Potential S-Corp benefits worth professional optimization</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-900 mb-1">You have multiple income streams</p>
                <p className="text-sm text-gray-600">W-2 job + side business = complex tax situation</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-900 mb-1">You're unsure what you can deduct</p>
                <p className="text-sm text-gray-600">One audit can cost more than a good accountant</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaway */}
      <section className="py-16 md:py-20 bg-blue-50 border-t border-blue-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border-2 border-blue-200 p-8">
            <p className="text-lg text-gray-900 mb-4"><strong>Tax efficiency isn't complex — it's just intentional:</strong></p>
            <p className="text-gray-600">Track your deductions, choose your structure wisely, and pay your quarterly taxes. You'll keep thousands more per year without needing an expensive accountant. Start with a spreadsheet. Upgrade to a professional when you earn enough to justify it.</p>
          </div>
        </div>
      </section>

      <NewsletterCTA />
    </div>
  )
}
