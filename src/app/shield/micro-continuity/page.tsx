import type { Metadata } from 'next'
import { FileText, CheckCircle2, AlertCircle, Users, Download } from 'lucide-react'
import NewsletterCTA from '@/components/NewsletterCTA'

export const metadata: Metadata = {
  title: 'Micro-Continuity Planning — The Business Continuity Kit',
  description: 'If you got hit by a bus tomorrow, what would happen to your business? The 5-document kit that ensures your business survives a crisis.',
}

export default function MicroContinuityPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-600 to-teal-800 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-semibold text-teal-100 uppercase tracking-wider">The Shield — Track 3</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">Micro-Continuity Planning</h1>
            <p className="text-xl text-teal-100 leading-relaxed max-w-2xl">
              If you got hit by a bus tomorrow — not killed, just hospitalised for two weeks — what would happen to your business? Most solopreneurs have no answer. Here is how to fix that in an afternoon.
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
                  <strong>Your business is only as resilient as your ability to not be in it.</strong>
                </p>
                <p className="text-gray-600">
                  Most solopreneur businesses depend entirely on the founder being present and functional. One health crisis, one family emergency, one mental health collapse — and the whole business stops. Clients get abandoned. Revenue stops. Everything gets worse.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Micro-Continuity Kit */}
      <section className="py-16 md:py-20 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">The Micro-Continuity Kit</h2>
          <p className="text-gray-600 mb-12">Five downloadable documents. One afternoon to complete. Enough to keep your business running if you suddenly can't.</p>

          <div className="space-y-6">
            {/* Document 1 */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 md:p-8 hover:shadow-md transition">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-teal-100 rounded-lg p-3 shrink-0">
                  <Download className="w-6 h-6 text-teal-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Document 1: The Emergency Business Card</h3>
                  <p className="text-sm text-gray-500 mb-4">One page. Everything someone needs to keep your business running for 48 hours.</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 mb-4 ml-4">
                <li>✓ Active client list and contacts</li>
                <li>✓ Urgent deadlines in the next 2 weeks</li>
                <li>✓ Login credentials location (NOT the passwords — where to find them)</li>
                <li>✓ Payment systems access</li>
                <li>✓ Key supplier contacts</li>
                <li>✓ Your accountant/bookkeeper contact</li>
                <li>✓ Where your contracts are stored</li>
              </ul>
              <p className="text-xs text-gray-500">Laminate this and give it to someone you trust. Update it every 6 months.</p>
            </div>

            {/* Document 2 */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 md:p-8 hover:shadow-md transition">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-teal-100 rounded-lg p-3 shrink-0">
                  <Download className="w-6 h-6 text-teal-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Document 2: Client Communication Template</h3>
                  <p className="text-sm text-gray-500 mb-4">Done for you. Three versions ready to send.</p>
                </div>
              </div>
              <div className="space-y-4 text-sm text-gray-600 ml-4">
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Version 1: Short Absence (1–2 weeks)</p>
                  <div className="bg-gray-50 rounded p-3 text-xs font-mono">I'm temporarily unavailable due to a personal matter, but I'll be back by [date]. In the meantime, [contact person] can help with urgent issues. I'll respond to all emails by [return date].</div>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Version 2: Extended Absence (1–3 months)</p>
                  <div className="bg-gray-50 rounded p-3 text-xs font-mono">I'm taking an extended break and will return on [date]. [Contact person] will handle all urgent client needs in my absence. For non-urgent matters, I'll get back to you after [return date].</div>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Version 3: Indefinite Absence</p>
                  <div className="bg-gray-50 rounded p-3 text-xs font-mono">Due to unexpected circumstances, I'm unable to work at this time. [Contact person] is taking over all client work. I will be in touch when I'm able to return.</div>
                </div>
              </div>
            </div>

            {/* Document 3 */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 md:p-8 hover:shadow-md transition">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-teal-100 rounded-lg p-3 shrink-0">
                  <Download className="w-6 h-6 text-teal-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Document 3: Active Projects Handover Template</h3>
                  <p className="text-sm text-gray-500 mb-4">One page per project. Fill out before crisis hits.</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 ml-4">
                <li>✓ Project name and client</li>
                <li>✓ Current status (% complete, blockers, decisions pending)</li>
                <li>✓ Next actions required</li>
                <li>✓ Client preferences and quirks</li>
                <li>✓ Files location and access</li>
                <li>✓ Outstanding payments or disputes</li>
              </ul>
            </div>

            {/* Document 4 */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 md:p-8 hover:shadow-md transition">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-teal-100 rounded-lg p-3 shrink-0">
                  <Download className="w-6 h-6 text-teal-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Document 4: Financial Access Instructions</h3>
                  <p className="text-sm text-gray-500 mb-4">How to keep money flowing in your absence.</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 ml-4">
                <li>✓ Where invoices are stored</li>
                <li>✓ How to chase outstanding payments</li>
                <li>✓ Business bank account access (login location)</li>
                <li>✓ Recurring payments and subscriptions</li>
                <li>✓ Tax obligations timeline</li>
                <li>✓ Accountant/bookkeeper contact</li>
              </ul>
            </div>

            {/* Document 5 */}
            <div className="bg-white rounded-xl border border-gray-100 p-6 md:p-8 hover:shadow-md transition">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-teal-100 rounded-lg p-3 shrink-0">
                  <Download className="w-6 h-6 text-teal-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Document 5: The 30-Day Continuity Plan</h3>
                  <p className="text-sm text-gray-500 mb-4">Week-by-week what needs to happen if you can't work for a month.</p>
                </div>
              </div>
              <div className="space-y-3 text-sm text-gray-600 ml-4">
                <p><strong>Week 1:</strong> Communicate with all clients. Assign a continuity contact. Pause new work.</p>
                <p><strong>Week 2:</strong> Send invoices for completed work. Set up payment reminders.</p>
                <p><strong>Week 3:</strong> Chase outstanding payments. File any due tax/compliance items.</p>
                <p><strong>Week 4:</strong> Review cash situation. Plan return-to-work steps.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Continuity Audit */}
      <section className="py-16 md:py-20 border-b border-gray-100 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Does Your Business Pass the Bus Test?</h2>
          <p className="text-gray-600 mb-8">10 quick questions to find out if your business survives if you can't work:</p>

          <div className="space-y-3 text-sm text-gray-600">
            <label className="flex items-center gap-3 bg-white rounded-lg p-4 border border-gray-200 cursor-pointer hover:bg-gray-50">
              <input type="checkbox" className="w-5 h-5 text-teal-600 rounded" />
              <span>Someone knows your client list and contacts</span>
            </label>
            <label className="flex items-center gap-3 bg-white rounded-lg p-4 border border-gray-200 cursor-pointer hover:bg-gray-50">
              <input type="checkbox" className="w-5 h-5 text-teal-600 rounded" />
              <span>Active invoices and payment status are documented</span>
            </label>
            <label className="flex items-center gap-3 bg-white rounded-lg p-4 border border-gray-200 cursor-pointer hover:bg-gray-50">
              <input type="checkbox" className="w-5 h-5 text-teal-600 rounded" />
              <span>Someone can access your urgent logins in an emergency</span>
            </label>
            <label className="flex items-center gap-3 bg-white rounded-lg p-4 border border-gray-200 cursor-pointer hover:bg-gray-50">
              <input type="checkbox" className="w-5 h-5 text-teal-600 rounded" />
              <span>Your accountant/bookkeeper knows about critical tax deadlines</span>
            </label>
            <label className="flex items-center gap-3 bg-white rounded-lg p-4 border border-gray-200 cursor-pointer hover:bg-gray-50">
              <input type="checkbox" className="w-5 h-5 text-teal-600 rounded" />
              <span>Recurring payments and subscriptions are documented</span>
            </label>
            <label className="flex items-center gap-3 bg-white rounded-lg p-4 border border-gray-200 cursor-pointer hover:bg-gray-50">
              <input type="checkbox" className="w-5 h-5 text-teal-600 rounded" />
              <span>Someone knows the status of each active project</span>
            </label>
            <label className="flex items-center gap-3 bg-white rounded-lg p-4 border border-gray-200 cursor-pointer hover:bg-gray-50">
              <input type="checkbox" className="w-5 h-5 text-teal-600 rounded" />
              <span>You have documented processes for client communication</span>
            </label>
            <label className="flex items-center gap-3 bg-white rounded-lg p-4 border border-gray-200 cursor-pointer hover:bg-gray-50">
              <input type="checkbox" className="w-5 h-5 text-teal-600 rounded" />
              <span>Outstanding bills or disputes are noted somewhere</span>
            </label>
            <label className="flex items-center gap-3 bg-white rounded-lg p-4 border border-gray-200 cursor-pointer hover:bg-gray-50">
              <input type="checkbox" className="w-5 h-5 text-teal-600 rounded" />
              <span>You have a backup continuity contact and they know the plan</span>
            </label>
            <label className="flex items-center gap-3 bg-white rounded-lg p-4 border border-gray-200 cursor-pointer hover:bg-gray-50">
              <input type="checkbox" className="w-5 h-5 text-teal-600 rounded" />
              <span>You update your continuity plan at least every 6 months</span>
            </label>
          </div>

          <div className="mt-8 bg-teal-50 rounded-xl border border-teal-200 p-6">
            <p className="text-gray-900"><strong>Score 8–10:</strong> You're protected. Keep updating.</p>
            <p className="text-gray-900 mt-2"><strong>Score 5–7:</strong> You're partially protected. Fill the gaps using the kit above.</p>
            <p className="text-gray-900 mt-2"><strong>Score under 5:</strong> Your business is at high risk. Build your continuity kit now (use the 5 documents above).</p>
          </div>
        </div>
      </section>

      {/* Your Continuity Support Network */}
      <section className="py-16 md:py-20 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 mb-8">
            <Users className="w-8 h-8 text-teal-600 shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Your Continuity Support Network</h2>
              <p className="text-gray-600 mt-2">Documentation is half the battle. The other half is having someone who knows the plan and can act.</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Who is your business continuity contact?</h3>
              <p className="text-sm text-gray-600">Someone who understands your business, has access to critical information, and can make decisions if you're unavailable. Ideally an accountant, business partner, or trusted colleague.</p>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Brief them properly</h3>
              <ul className="space-y-2 text-sm text-gray-600 ml-4">
                <li>✓ Show them where the continuity kit is stored</li>
                <li>✓ Walk through each document</li>
                <li>✓ Give them access to your password manager</li>
                <li>✓ Make sure they know your accountant/bookkeeper</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Annual review (every 6 months)</h3>
              <p className="text-sm text-gray-600">Update your continuity kit before you need it. New clients? Updated it. Changed payment systems? Updated it. New suppliers? Updated it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaway */}
      <section className="py-16 md:py-20 bg-teal-50 border-t border-teal-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border-2 border-teal-200 p-8">
            <p className="text-lg text-gray-900 mb-4"><strong>The compounding benefit of micro-continuity planning:</strong></p>
            <p className="text-gray-600">You'll have reduced anxiety knowing someone else could keep your business running. Your clients will feel more secure. Your continuity contact becomes a trusted advisor. And if something does go wrong, everything is already in place.</p>
          </div>
        </div>
      </section>

      <NewsletterCTA />
    </div>
  )
}
