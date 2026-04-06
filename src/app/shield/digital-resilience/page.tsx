import type { Metadata } from 'next'
import { Lock, CheckCircle2, AlertCircle } from 'lucide-react'
import NewsletterCTA from '@/components/NewsletterCTA'

export const metadata: Metadata = {
  title: 'Digital Resilience',
  description: 'Backups, security, and redundancy so one disaster doesn\'t end your business.',
}

export default function DigitalResiliencePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-cyan-600 to-cyan-800 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-semibold text-cyan-100 uppercase tracking-wider">The Shield — Track 3</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">Digital Resilience</h1>
            <p className="text-xl text-cyan-100 leading-relaxed max-w-2xl">
              Your laptop crashes. Your email gets hacked. Your payment processor goes down. You lose everything. Or... you don't.
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
                  <strong>Most solopreneurs have zero resilience.</strong>
                </p>
                <p className="text-gray-600">
                  Everything lives on one laptop. If it gets stolen or dies, your business dies. You can rebuild this in 7 days with the right setup.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">7-Day Resilience Setup</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-cyan-600 pl-6 bg-white p-6 rounded">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Step 1: Implement 3-2-1 Backup Rule</h3>
              <p className="text-sm text-gray-600 mb-3">3 copies of your data. 2 different storage types. 1 offsite.</p>
              <div className="space-y-2 text-xs text-gray-700">
                <div className="flex gap-2">
                  <span className="text-cyan-600 font-bold">•</span>
                  <p><strong>Copy 1:</strong> Your working files (laptop, desktop)</p>
                </div>
                <div className="flex gap-2">
                  <span className="text-cyan-600 font-bold">•</span>
                  <p><strong>Copy 2:</strong> External hard drive (physically different media type)</p>
                </div>
                <div className="flex gap-2">
                  <span className="text-cyan-600 font-bold">•</span>
                  <p><strong>Copy 3:</strong> Cloud storage offsite (Google Drive, Dropbox, iCloud, OneDrive)</p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-cyan-600 pl-6 bg-white p-6 rounded">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Step 2: Device Protection (Encryption)</h3>
              <p className="text-sm text-gray-600 mb-3">Laptop stolen? They can't access your data. 10-minute setup.</p>
              <div className="space-y-2 text-xs text-gray-700">
                <div className="flex gap-2">
                  <span className="text-cyan-600 font-bold">•</span>
                  <p><strong>Mac:</strong> FileVault (Settings → Security → FileVault) — Free, fully encrypted</p>
                </div>
                <div className="flex gap-2">
                  <span className="text-cyan-600 font-bold">•</span>
                  <p><strong>Windows:</strong> BitLocker or Windows Defender Encryption — Free on Pro/Enterprise versions</p>
                </div>
                <div className="flex gap-2">
                  <span className="text-cyan-600 font-bold">•</span>
                  <p><strong>Linux:</strong> LUKS encryption — Built-in during install</p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-cyan-600 pl-6 bg-white p-6 rounded">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Step 3: Account Security (2FA + Strong Passwords)</h3>
              <p className="text-sm text-gray-600 mb-3">Email hacked? Attacker can reset everything. 2FA prevents that.</p>
              <div className="space-y-2 text-xs text-gray-700">
                <div className="flex gap-2">
                  <span className="text-cyan-600 font-bold">•</span>
                  <p><strong>Email:</strong> Enable 2FA (authenticator app, not SMS if possible). This is your master key.</p>
                </div>
                <div className="flex gap-2">
                  <span className="text-cyan-600 font-bold">•</span>
                  <p><strong>Password manager:</strong> Use Bitwarden, 1Password, or LastPass. One strong master password, random strong ones for everything else.</p>
                </div>
                <div className="flex gap-2">
                  <span className="text-cyan-600 font-bold">•</span>
                  <p><strong>Critical services:</strong> Banking, email, cloud storage, payment processors = 2FA mandatory</p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-cyan-600 pl-6 bg-white p-6 rounded">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Step 4: Payment Processor Redundancy</h3>
              <p className="text-sm text-gray-600 mb-3">Stripe account suspended? You lose all revenue. Have a backup.</p>
              <div className="space-y-2 text-xs text-gray-700">
                <div className="flex gap-2">
                  <span className="text-cyan-600 font-bold">•</span>
                  <p><strong>Primary:</strong> Stripe, Paddle, or Square (industry standard)</p>
                </div>
                <div className="flex gap-2">
                  <span className="text-cyan-600 font-bold">•</span>
                  <p><strong>Secondary:</strong> PayPal or Gumroad (different underwriting, less likely both banned simultaneously)</p>
                </div>
                <div className="flex gap-2">
                  <span className="text-cyan-600 font-bold">•</span>
                  <p><strong>Tertiary:</strong> Bank ACH transfers as fallback (slower, but independent)</p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-cyan-600 pl-6 bg-white p-6 rounded">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Step 5: Communication Continuity</h3>
              <p className="text-sm text-gray-600 mb-3">Email provider down? You can't reach clients. Have backups.</p>
              <div className="space-y-2 text-xs text-gray-700">
                <div className="flex gap-2">
                  <span className="text-cyan-600 font-bold">•</span>
                  <p><strong>Email backup:</strong> Use a secondary email address for critical accounts (not the same domain)</p>
                </div>
                <div className="flex gap-2">
                  <span className="text-cyan-600 font-bold">•</span>
                  <p><strong>Backup communication:</strong> Phone number in your website footer and invoices for client emergency contact</p>
                </div>
                <div className="flex gap-2">
                  <span className="text-cyan-600 font-bold">•</span>
                  <p><strong>Offline client list:</strong> Keep important client contact info physically written down somewhere secure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-cyan-50 border-t border-cyan-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Implementation Timeline</h2>
          <div className="space-y-2">
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700"><strong>Day 1:</strong> Enable device encryption (5 min) + enable 2FA on email (5 min)</p>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700"><strong>Day 2:</strong> Set up password manager (10 min) + update passwords for 5 critical services (15 min)</p>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700"><strong>Day 3:</strong> Buy external hard drive ($50–80) + backup to it (30 min)</p>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700"><strong>Day 4–5:</strong> Set up cloud backup (Backblaze, Carbonite, or native OS backup) (20 min setup)</p>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700"><strong>Day 6–7:</strong> Test recovery (restore from backup, verify 2FA works) + document your payment processor backup</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-cyan-50 border-t border-cyan-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border-2 border-cyan-200 p-8">
            <p className="text-gray-600 text-sm"><strong>Resilience isn't optional. Disasters happen to 20% of small businesses every year.</strong> Encrypt your device. Back up your files. Use 2FA. Have payment processor backup. Total cost: $50–$150 and 2–3 hours of work. Total payoff: Peace of mind and business continuity when others panic.</p>
          </div>
        </div>
      </section>

      <NewsletterCTA />
    </div>
  )
}
