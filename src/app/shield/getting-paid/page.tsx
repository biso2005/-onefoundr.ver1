import type { Metadata } from 'next'
import { ArrowRight, CheckCircle2, AlertCircle, Clock, DollarSign } from 'lucide-react'
import NewsletterCTA from '@/components/NewsletterCTA'
import EmailSignupForm from '@/components/EmailSignupForm'

export const metadata: Metadata = {
  title: 'Getting Paid — The Complete Playbook',
  description: 'Prevent late payments, collect on outstanding invoices, and recover from bad debts. A complete system built for solopreneurs.',
}

export default function GettingPaidPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-600 to-teal-800 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-semibold text-teal-100 uppercase tracking-wider">The Shield — Track 1</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">Getting Paid</h1>
            <p className="text-xl text-teal-100 leading-relaxed max-w-2xl">
              63% of solopreneurs wait more than 30 days to get paid. 40% have missed their own personal bills because a client didn't pay. This is not a cash flow problem. This is a systems problem. Here is the complete fix.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 md:py-20 bg-gray-50 border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">The Reality</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="text-3xl font-bold text-teal-600 mb-2">63%</div>
              <p className="text-sm text-gray-600">Wait more than 30 days to get paid</p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="text-3xl font-bold text-teal-600 mb-2">40%</div>
              <p className="text-sm text-gray-600">Have missed personal bills due to late client payments</p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="text-3xl font-bold text-teal-600 mb-2">Median 37–42 days</div>
              <p className="text-sm text-gray-600">After invoice, before payment arrives</p>
            </div>
          </div>
        </div>
      </section>

      {/* Part 1: Prevention */}
      <section className="py-16 md:py-20 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 mb-8">
            <CheckCircle2 className="w-8 h-8 text-teal-600 shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Part 1: Prevention</h2>
              <p className="text-gray-600">Systems that make late payment less likely in the first place.</p>
            </div>
          </div>

          <div className="space-y-8">
            {/* Payment Terms */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 md:p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Payment Terms That Actually Work</h3>
              <div className="space-y-4 text-gray-600 text-sm md:text-base">
                <p><strong>7 days vs 30 days:</strong> Solopreneurs who invoice with 7-day payment terms get paid faster than those using 30-day terms. Shorter terms create urgency.</p>
                <p><strong>Deposits & upfront payments:</strong> Requiring 25–50% upfront on project start removes payment risk and signals professional boundaries.</p>
                <p><strong>Milestone payments:</strong> For longer projects, break invoicing into milestones (e.g., 50% at start, 50% on completion). Never deliver everything before final payment.</p>
                <p><strong>Payment on delivery vs invoice:</strong> Collect payment before handing over the finished work when possible (especially for digital products or fixed deliverables).</p>
              </div>
            </div>

            {/* The Invoice */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 md:p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Invoice That Gets Paid Faster</h3>
              <div className="space-y-4 text-gray-600 text-sm md:text-base">
                <p><strong>What to include:</strong> Invoice number, date issued, due date (prominently), description of work, amount due, payment method(s), your contact details, tax ID (if applicable).</p>
                <p><strong>Subject line:</strong> Use "Invoice #[number] – Due [date]" to get opened and routed to the right person.</p>
                <p><strong>Timing:</strong> Send immediately after work is completed. Don't batch invoices at month end.</p>
                <p><strong>Payment options:</strong> Offer multiple payment methods (bank transfer, card, PayPal). Make it effortless to pay.</p>
                <p><strong>Friendly reminder:</strong> Include a soft reminder before due date: "This invoice is due on [date]. Let me know if you have any questions."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Part 2: Collection */}
      <section className="py-16 md:py-20 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 mb-8">
            <Clock className="w-8 h-8 text-teal-600 shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Part 2: Collection</h2>
              <p className="text-gray-600">What to do when payment is late.</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-teal-50 rounded-xl border border-teal-200 p-6 md:p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">The Chase Sequence</h3>
              <p className="text-gray-600 mb-6">Follow this timeline and use the templates below. Stay professional and friendly at every stage.</p>

              <div className="space-y-6">
                <div className="border-l-4 border-teal-600 pl-4">
                  <p className="font-semibold text-gray-900 mb-2">Day 1 Overdue: Friendly Reminder</p>
                  <div className="bg-white rounded p-4 text-sm text-gray-600 font-mono">
                    Hi [name], I just noticed that invoice [#] due on [date] hasn't come through yet. No worries — just checking in to make sure you have everything you need. Let me know if you have any questions!
                  </div>
                </div>

                <div className="border-l-4 border-teal-600 pl-4">
                  <p className="font-semibold text-gray-900 mb-2">Day 7 Overdue: Direct Follow-up</p>
                  <div className="bg-white rounded p-4 text-sm text-gray-600 font-mono">
                    Hi [name], Following up on invoice [#] which is now [X] days overdue (due [date]). Can you let me know the status? If there's an issue or you need an invoice revised, I'm happy to help sort it out.
                  </div>
                </div>

                <div className="border-l-4 border-teal-600 pl-4">
                  <p className="font-semibold text-gray-900 mb-2">Day 14 Overdue: Formal Notice</p>
                  <div className="bg-white rounded p-4 text-sm text-gray-600 font-mono">
                    Hi [name], Invoice [#] is now seriously overdue (14 days past due). I need payment by [date] to avoid further action. If there's a dispute or issue, please let me know immediately so we can resolve it.
                  </div>
                </div>

                <div className="border-l-4 border-teal-600 pl-4">
                  <p className="font-semibold text-gray-900 mb-2">Day 30 Overdue: Final Demand</p>
                  <div className="bg-white rounded p-4 text-sm text-gray-600 font-mono">
                    This is formal notice: Invoice [#] is 30 days overdue. Payment of [amount] is due by [date]. If payment is not received or we don't hear from you by this date, I will pursue collection and/or legal action.
                  </div>
                </div>

                <div className="border-l-4 border-teal-600 pl-4">
                  <p className="font-semibold text-gray-900 mb-2">Day 45 Overdue: Escalation</p>
                  <p className="text-sm text-gray-600">Consider: formal letter before action, debt collection agency, small claims court, or writing off after documenting everything.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-6 md:p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">The Awkward Payment Conversation</h3>
              <p className="text-gray-600 mb-4">If a client is avoiding payment or delaying, have a direct conversation:</p>
              <div className="bg-gray-50 rounded p-4 text-sm text-gray-600 font-mono">
                "I notice we haven't connected about invoice [#] yet. I want to make sure everything is okay. Is there a problem with the work, or is payment just backed up on your end? Let's sort this out so we can keep things moving."
              </div>
              <p className="text-gray-600 text-sm mt-4">This keeps the relationship intact while getting honest answers about what's blocking payment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Part 3: Escalation */}
      <section className="py-16 md:py-20 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 mb-8">
            <AlertCircle className="w-8 h-8 text-teal-600 shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Part 3: Escalation</h2>
              <p className="text-gray-600">When chasing doesn't work, escalate in this order.</p>
            </div>
          </div>

          <div className="space-y-4 text-gray-600">
            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <h3 className="font-semibold text-gray-900 mb-2">1. Formal Letter Before Action</h3>
              <p className="text-sm">A legal-looking letter often triggers payment. It signals you're serious without court costs. Available from template sites or a lawyer (usually £50–200).</p>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <h3 className="font-semibold text-gray-900 mb-2">2. Debt Collection Agency</h3>
              <p className="text-sm">Agency takes 15–25% of recovered amount. Only worth it for invoices over £500. They handle follow-up; you're removed from the conversation.</p>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <h3 className="font-semibold text-gray-900 mb-2">3. Small Claims Court</h3>
              <p className="text-sm">Filing cost is low (£25–355 depending on region). Faster and cheaper than civil court. Client gets official notice; most settle rather than face court.</p>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <h3 className="font-semibold text-gray-900 mb-2">4. Write It Off</h3>
              <p className="text-sm">After 6+ months with no response and all other options exhausted, document everything and write it off for tax purposes. Move on.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Part 4: Recovery */}
      <section className="py-16 md:py-20 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Part 4: Recovery</h2>

          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-gray-100 p-6 md:p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">After a Bad Debt</h3>
              <p className="text-gray-600 mb-4">If you lose money to a non-paying client, recover systematically:</p>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex gap-3">
                  <span className="text-teal-600 font-bold">1.</span>
                  <span><strong>Document everything:</strong> Save all emails, contracts, invoices, and communication about the non-payment.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-600 font-bold">2.</span>
                  <span><strong>Reduce new expenses:</strong> Cut spending to stabilize cash flow while you chase payment.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-600 font-bold">3.</span>
                  <span><strong>Invoice other clients faster:</strong> Accelerate collections from good clients to offset the loss.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-600 font-bold">4.</span>
                  <span><strong>If the client is a non-payer, stop working:</strong> Don't continue providing services to someone who doesn't pay.</span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 rounded-xl border border-amber-200 p-6 md:p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Preventing It Happening Again</h3>
              <p className="text-gray-600 mb-4">The single biggest change: <strong>Tighten your payment terms and boundaries.</strong></p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Require 50% upfront on new projects</li>
                <li>✓ Invoice immediately after work is done (not at month end)</li>
                <li>✓ Use 7-day payment terms, not 30</li>
                <li>✓ No work beyond agreed scope without a changed invoice</li>
                <li>✓ Stop working the moment payment is late</li>
                <li>✓ Fire clients who consistently pay late</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaway */}
      <section className="py-16 md:py-20 bg-teal-50 border-t border-teal-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border-2 border-teal-200 p-8">
            <p className="text-lg text-gray-900 mb-2"><strong>The core principle:</strong></p>
            <p className="text-gray-600">Getting paid is not about being aggressive or uncomfortable. It's about clear systems, professional boundaries, and consequences. Clients who don't pay are choosing not to respect those boundaries. They're the exception — design your processes around the majority who will pay fairly.</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border border-gray-100 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Get the Complete Getting Paid Playbook</h3>
            <p className="text-gray-600 mb-6">A downloadable, email-gated guide containing the full playbook, templates, and chase sequences.</p>
            <EmailSignupForm
              variant="stacked"
              buttonText="Get the full playbook"
              placeholder="your@email.com"
              successMessage="Thanks — the download is ready"
              leadMagnetFile="/downloads/getting-paid-playbook.pdf"
            />
          </div>
        </div>
      </section>

      <NewsletterCTA />
    </div>
  )
}
