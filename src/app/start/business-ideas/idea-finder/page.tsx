import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Lightbulb, Zap } from 'lucide-react'
import NewsletterCTA from '@/components/NewsletterCTA'

export const metadata: Metadata = {
  title: 'Business Idea Finder — OneFoundr',
  description:
    'Answer 5 questions and get a shortlist of business ideas matched to your skills, budget, and income goal.',
}

export default function IdeaFinderPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Dark Hero */}
      <section className="bg-[#1A1A1A] text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <Link
            href="/start/business-ideas"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Business Ideas</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            <span>Free Tool</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            The Business Idea Finder
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl">
            Answer 5 questions. Get a shortlist of business ideas matched to your skills, budget, income goal, and how you want to work.
          </p>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-orange-50 border border-orange-100 rounded-xl p-10 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-orange-100 mb-6">
              <Lightbulb className="w-7 h-7 text-orange-500" />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              This tool is being built
            </h2>

            <p className="text-gray-600 mb-2">
              The Business Idea Finder will ask you 5 questions about your skills, budget, income goal, and work preferences — then match you to the ideas most likely to work for your situation.
            </p>

            <p className="text-gray-600 mb-8">
              Join the newsletter and we will let you know the moment it goes live.
            </p>

            <Link
              href="/newsletter"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold hover:shadow-lg transition-shadow"
            >
              Notify me when it is ready
            </Link>
          </div>

          {/* What it will do */}
          <div className="mt-12">
            <h3 className="text-lg font-bold text-gray-900 mb-6">
              What the tool will do
            </h3>
            <div className="space-y-4">
              {[
                {
                  step: '01',
                  title: 'Tell us what you want to sell',
                  description:
                    'Service, physical product, digital product, knowledge, content, software, or community.',
                },
                {
                  step: '02',
                  title: 'Tell us where you are right now',
                  description:
                    'Starting fresh, just started, established but scattered, or ready to pivot.',
                },
                {
                  step: '03',
                  title: 'Set your income goal',
                  description:
                    'From £1,000 to £10,000+ per month. We will only show ideas that can realistically hit your number.',
                },
                {
                  step: '04',
                  title: 'Tell us how you want to work',
                  description:
                    'From home, in person locally, or either. No point recommending ideas that do not fit your life.',
                },
                {
                  step: '05',
                  title: 'Tell us your strongest asset',
                  description:
                    'A skill, a network, a product idea, a personal story, or a technical ability.',
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-4 bg-white rounded-xl border border-gray-100 p-5"
                >
                  <span className="text-2xl font-bold text-orange-200 shrink-0 w-8">
                    {item.step}
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">{item.title}</p>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Back link */}
          <div className="mt-10 text-center">
            <Link
              href="/start/business-ideas"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-orange-500 transition-colors font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Browse all business ideas
            </Link>
          </div>
        </div>
      </section>

      <NewsletterCTA />
    </div>
  )
}

