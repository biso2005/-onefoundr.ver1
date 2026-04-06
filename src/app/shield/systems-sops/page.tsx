import type { Metadata } from 'next'
import { Zap, CheckCircle2, AlertCircle } from 'lucide-react'
import NewsletterCTA from '@/components/NewsletterCTA'

export const metadata: Metadata = {
  title: 'Systems & SOPs',
  description: 'Document your workflows so your business runs without you in the room.',
}

export default function SystemsSOPsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-600 to-slate-800 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-semibold text-slate-100 uppercase tracking-wider">The Shield — Track 3</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">Systems & SOPs</h1>
            <p className="text-xl text-slate-100 leading-relaxed max-w-2xl">
              Without documented processes, everything lives in your head. You become the bottleneck. Here's how to build systems that run without you.
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
                  <strong>You are not scalable. Your systems are.</strong>
                </p>
                <p className="text-gray-600">
                  You handle 10 client requests per week. Same person, same brain, same time. You need SOPs — systems that delegate work to documentation, templates, or automation instead of your memory.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Five Benefits of Written SOPs</h2>
          
          <div className="space-y-4 mb-12">
            <div className="border-l-4 border-slate-600 pl-6 bg-white p-4 rounded">
              <h3 className="font-bold text-gray-900">1. Hiring becomes possible</h3>
              <p className="text-sm text-gray-600">You can onboard a VA or contractor in days, not weeks. They follow the playbook.</p>
            </div>
            <div className="border-l-4 border-slate-600 pl-6 bg-white p-4 rounded">
              <h3 className="font-bold text-gray-900">2. Quality becomes consistent</h3>
              <p className="text-sm text-gray-600">Every client deliverable follows the same checklist. No missed steps. No variations.</p>
            </div>
            <div className="border-l-4 border-slate-600 pl-6 bg-white p-4 rounded">
              <h3 className="font-bold text-gray-900">3. You get your time back</h3>
              <p className="text-sm text-gray-600">Stop deciding how to do the same task for the 50th time. The SOP decides for you.</p>
            </div>
            <div className="border-l-4 border-slate-600 pl-6 bg-white p-4 rounded">
              <h3 className="font-bold text-gray-900">4. Your business survives your absence</h3>
              <p className="text-sm text-gray-600">Vacation, illness, emergency — work continues. Team follows the playbook.</p>
            </div>
            <div className="border-l-4 border-slate-600 pl-6 bg-white p-4 rounded">
              <h3 className="font-bold text-gray-900">5. Your business becomes sellable</h3>
              <p className="text-sm text-gray-600">A buyer wants repeatable, documented processes, not your brain. Systems = higher valuation.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-12">How to Create an SOP (5 Steps)</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-slate-600 pl-6 bg-white p-6 rounded">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Step 1: Pick Your First Process</h3>
              <p className="text-sm text-gray-600">Choose something you do weekly and takes 15–60 minutes. Client onboarding. Invoice process. Content publishing. Start here.</p>
            </div>

            <div className="border-l-4 border-slate-600 pl-6 bg-white p-6 rounded">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Step 2: Do It Once While Recording (or Writing)</h3>
              <p className="text-sm text-gray-600">Loom video or Notion doc. Just document:
              <div className="text-xs mt-2 space-y-1">
                <div>• What's the goal?</div>
                <div>• What info do you need upfront?</div>
                <div>• Step-by-step walkthrough (each click, each input)</div>
                <div>• Tools/templates needed</div>
                <div>• Checkpoints (where do you verify quality?)</div>
                <div>• Common mistakes to avoid</div>
              </div>
              </p>
            </div>

            <div className="border-l-4 border-slate-600 pl-6 bg-white p-6 rounded">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Step 3: Create a Template or Checklist</h3>
              <p className="text-sm text-gray-600">If it's repetitive, build a template (email swipe, invoice framework, client brief form). If it's sequential, build a checklist.</p>
            </div>

            <div className="border-l-4 border-slate-600 pl-6 bg-white p-6 rounded">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Step 4: Have Someone Else Test It</h3>
              <p className="text-sm text-gray-600">Give your SOP to a friend or hire a VA to follow it without asking you questions. Where do they get stuck? Update the SOP.</p>
            </div>

            <div className="border-l-4 border-slate-600 pl-6 bg-white p-6 rounded">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Step 5: Store It & Commit to Updates</h3>
              <p className="text-sm text-gray-600">Notion, Google Drive, or wiki. Every time the process changes, update the SOP same day. Outdated docs are worse than no docs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What to Document First (Priority Order)</h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700"><strong>Client Onboarding:</strong> First impression. Sets tone. Most important to nail.</p>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700"><strong>Core Deliverable:</strong> Your main product/service. How do you execute it consistently?</p>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700"><strong>Quality Checklist:</strong> Before you deliver anything, what must be checked?</p>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700"><strong>Client Communication:</strong> Templates for emails, follow-ups, issue resolution.</p>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700"><strong>Billing & Invoicing:</strong> How/when you invoice, payment terms, overdue follow-up.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border-2 border-slate-200 p-8">
            <p className="text-gray-600 text-sm"><strong>You're not paid to do the work. You're paid to design the system that does the work.</strong> Start with one process this week. Document it. Test it with someone else. You'll immediately see the value. Then do the next one.</p>
          </div>
        </div>
      </section>

      <NewsletterCTA />
    </div>
  )
}
