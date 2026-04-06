import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Repeat, MailCheck } from 'lucide-react'
import EmailSignupForm from '@/components/EmailSignupForm'
import NewsletterCTA from '@/components/NewsletterCTA'

export const metadata: Metadata = {
  title: 'Follow-up Systems',
  description: 'Proven follow-up sequences, templates, and timing to turn initial interest into closed clients (downloadable templates).',
}

export default function FollowUpSystemsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#1A1A1A] text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/sales" className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to The Engine</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white text-sm font-medium mb-6">
            <Repeat className="w-4 h-4" />
            <span>The Engine — Follow-up Systems (MOAT)</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Follow-up Systems</h1>

          <p className="text-xl text-gray-300 max-w-3xl">Templates and sequences to follow up without being annoying — win more clients by following a predictable cadence. Submit your email to download the templates.</p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50 border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8">
            <div className="flex gap-4 items-start">
              <MailCheck className="w-8 h-8 text-amber-600 shrink-0 mt-1" />
              <div>
                <p className="text-lg text-gray-900 mb-3"><strong>Follow-up is a system, not luck.</strong></p>
                <p className="text-gray-600">Use short templates, scheduled reminders, and a simple priority list to move prospects through your pipeline. The downloadable pack contains sequence templates and email copy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Download Follow-up Templates</h2>

          <div className="bg-white rounded-xl border p-6 md:p-8">
            <p className="text-gray-700 mb-4">Enter your email to receive the follow-up templates and a 7-step sequence you can copy into your CRM or messages.</p>

            <EmailSignupForm
              variant="stacked"
              placeholder="your@email.com"
              buttonText="Send me the templates"
              leadMagnetFile="/downloads/follow-up-systems.pdf"
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border-2 border-amber-200 p-8">
            <p className="text-gray-600 text-sm"><strong>One follow-up sequence run well beats ten poorly executed attempts.</strong> Automate reminders and keep copy short.</p>
          </div>
        </div>
      </section>

      <NewsletterCTA />
    </div>
  )
}
