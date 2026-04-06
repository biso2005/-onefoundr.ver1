import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Clock, MessageSquare, Repeat, Heart } from 'lucide-react'
import NewsletterCTA from '@/components/NewsletterCTA'

export const metadata: Metadata = {
  title: 'Social Media',
  description: 'Tactical social media strategies for building an audience and turning followers into customers.',
}

export default function SocialMediaPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#1A1A1A] text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/sales" className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to The Engine</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white text-sm font-medium mb-6">
            <MessageSquare className="w-4 h-4" />
            <span>The Engine — Pillar 3</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Social Media</h1>

          <p className="text-xl text-gray-300 max-w-3xl">Tactical social media strategies for building an audience and turning followers into customers.</p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50 border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8">
            <div className="flex gap-4">
              <Clock className="w-8 h-8 text-amber-600 shrink-0 mt-1" />
              <div>
                <p className="text-lg text-gray-900 mb-3"><strong>Quality over quantity, with a repeatable system.</strong></p>
                <p className="text-gray-600">Pick 1–2 platforms, publish consistently, and focus on formats that convert to conversations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">A Practical 6-Week Social System</h2>

          <div className="space-y-6">
            <div className="bg-white rounded-xl border p-6">
              <h3 className="text-xl font-semibold mb-2">Week 1 — Profile & Offer Clarity</h3>
              <p className="text-sm text-gray-600">Clarify your audience, craft a simple profile bio, and pin a clear call-to-action linking to your lead magnet or contact page.</p>
            </div>

            <div className="bg-white rounded-xl border p-6">
              <h3 className="text-xl font-semibold mb-2">Weeks 2–3 — Content Core</h3>
              <p className="text-sm text-gray-600">Create 3 content pillars: teach, prove, invite. Produce 2 pieces per week and reuse across formats.</p>
            </div>

            <div className="bg-white rounded-xl border p-6">
              <h3 className="text-xl font-semibold mb-2">Weeks 4–5 — Engagement & Systems</h3>
              <p className="text-sm text-gray-600">Batch responses, schedule DMs, and follow up on comments that show buying signals. Turn interested followers into email subscribers.</p>
            </div>

            <div className="bg-white rounded-xl border p-6">
              <h3 className="text-xl font-semibold mb-2">Week 6 — Conversion Push</h3>
              <p className="text-sm text-gray-600">Run a simple offer window: story-driven posts, direct CTA in bio, and a sequence of follow-up messages to warm leads.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-amber-50 border-t border-amber-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Formats That Convert</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Repeat className="w-5 h-5 text-amber-600 shrink-0 mt-1" />
              <p className="text-sm text-gray-700">Short how-to videos and carousel posts with clear next steps perform well across platforms.</p>
            </div>
            <div className="flex items-start gap-3">
              <Heart className="w-5 h-5 text-amber-600 shrink-0 mt-1" />
              <p className="text-sm text-gray-700">Use testimonials and case snippets to build credibility rapidly.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border-2 border-amber-200 p-8">
            <p className="text-gray-600 text-sm"><strong>Choose one platform and one format. Ship consistently for 6 weeks.</strong> Measure conversations, not vanity metrics.</p>
          </div>
        </div>
      </section>

      <NewsletterCTA />
    </div>
  )
}
