import type { Metadata } from 'next'
import { AlertTriangle, CheckCircle2, AlertCircle } from 'lucide-react'
import NewsletterCTA from '@/components/NewsletterCTA'

export const metadata: Metadata = {
  title: 'Platform Risk',
  description: 'Map your dependencies and survive when platforms change, ban, or die.',
}

export default function PlatformRiskPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-600 to-rose-800 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-semibold text-rose-100 uppercase tracking-wider">The Shield — Track 3</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">Platform Risk</h1>
            <p className="text-xl text-rose-100 leading-relaxed max-w-2xl">
              You're one algorithm change, policy violation, or platform failure away from losing your business. Here's how to map your exposure and survive it.
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
                  <strong>You don't own your platform relationships. They're rent.</strong>
                </p>
                <p className="text-gray-600">
                  A Shopify seller wakes up to a banned account: $100k revenue lost overnight. A YouTube creator demonetized: $5k/month income gone. Your email list is hostage to an ESP's terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Dependency Risk Scoring Framework</h2>
          
          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Risk Level Matrix</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-red-600 pl-6 bg-white p-6 rounded">
                <h4 className="font-bold text-red-700 mb-2">🔴 CRITICAL (Revenue risk if it fails)</h4>
                <p className="text-sm text-gray-700 mb-3">Example: Payment processor, hosting platform, email list provider</p>
                <p className="text-xs text-gray-600"><strong>Action Required:</strong> Identify immediately. Build redundancy today.</p>
              </div>
              <div className="border-l-4 border-yellow-600 pl-6 bg-white p-6 rounded">
                <h4 className="font-bold text-yellow-700 mb-2">🟡 HIGH (Workflow blocked if it fails)</h4>
                <p className="text-sm text-gray-700 mb-3">Example: Analytics tool, project management software, design platform</p>
                <p className="text-xs text-gray-600"><strong>Action Required:</strong> Have alternative + offline documentation.</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-6 bg-white p-6 rounded">
                <h4 className="font-bold text-blue-700 mb-2">🔵 MEDIUM (Slows you down if it fails)</h4>
                <p className="text-sm text-gray-700 mb-3">Example: Scheduling tool, note-taking app, social media scheduler</p>
                <p className="text-xs text-gray-600"><strong>Action Required:</strong> Know the workaround. Document data export process.</p>
              </div>
              <div className="border-l-4 border-green-600 pl-6 bg-white p-6 rounded">
                <h4 className="font-bold text-green-700 mb-2">🟢 LOW (Nice to have, not critical)</h4>
                <p className="text-sm text-gray-700 mb-3">Example: Aesthetic tools, bonus features, experimental services</p>
                <p className="text-xs text-gray-600"><strong>Action Required:</strong> None. Accept the risk.</p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-6">Your Failure Protocol</h3>
          <div className="space-y-3">
            <div className="flex gap-3 text-sm">
              <span className="text-rose-600 font-bold">Step 1:</span>
              <p className="text-gray-700"><strong>Detect:</strong> "Service is down" email or monitoring alert</p>
            </div>
            <div className="flex gap-3 text-sm">
              <span className="text-rose-600 font-bold">Step 2:</span>
              <p className="text-gray-700"><strong>Assess:</strong> Is this temporary outage (6 hours) or permanent failure?</p>
            </div>
            <div className="flex gap-3 text-sm">
              <span className="text-rose-600 font-bold">Step 3:</span>
              <p className="text-gray-700"><strong>If temporary:</strong> Use documented workaround. Notify affected users of ETA.</p>
            </div>
            <div className="flex gap-3 text-sm">
              <span className="text-rose-600 font-bold">Step 4:</span>
              <p className="text-gray-700"><strong>If permanent:</strong> Activate backup service. Data recovery from backups. Client communication within 2 hours.</p>
            </div>
            <div className="flex gap-3 text-sm">
              <span className="text-rose-600 font-bold">Step 5:</span>
              <p className="text-gray-700"><strong>Post-mortem:</strong> How could we have prevented this? Update dependency map.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-rose-50 border-t border-rose-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Build Your Dependency Map Today</h2>
          <div className="space-y-3">
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700"><strong>List every tool/service:</strong> Write them down. Who owns it? What does it do?</p>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700"><strong>Score each one:</strong> Critical / High / Medium / Low. Be honest.</p>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700"><strong>For each CRITICAL:</strong> Identify a backup. Document the switch process (copy/paste URL, no thinking).</p>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700"><strong>Test it once:</strong> Actually switch to the backup. Verify it works. Document time-to-switch.</p>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700"><strong>Review quarterly:</strong> New dependencies emerge. Re-score them.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-rose-50 border-t border-rose-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border-2 border-rose-200 p-8">
            <p className="text-gray-600 text-sm"><strong>Platform risk is real. Platform redundancy is cheap insurance.</strong> Spend 2 hours mapping your dependencies and identifying backup services. It could save your business when a platform fails or bans you.</p>
          </div>
        </div>
      </section>

      <NewsletterCTA />
    </div>
  )
}
