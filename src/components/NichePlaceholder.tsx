import Link from 'next/link'
import { ArrowLeft, ArrowRight, Target } from 'lucide-react'
import NewsletterCTA from '@/components/NewsletterCTA'

type Props = {
  title: string
  description: string
  section: string
  sectionLabel: string
  backHref?: string
  backLabel?: string
}

export default function NichePlaceholder({
  title,
  description,
  section,
  sectionLabel,
  backHref = '/start/niche-selection',
  backLabel = 'Back to Niche Selection',
}: Props) {
  return (
    <div className="min-h-screen bg-white">

      {/* Dark Hero */}
      <section className="bg-[#1A1A1A] text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <Link
            href={backHref}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{backLabel}</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white text-sm font-medium mb-6">
            <Target className="w-4 h-4" />
            <span>{sectionLabel}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {title}
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl">
            {description}
          </p>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-orange-50 border border-orange-100 rounded-xl p-10 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-orange-100 mb-6">
              <Target className="w-7 h-7 text-orange-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Full guide coming soon
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-8">
              We are writing a complete guide to {title.toLowerCase()}. Join the newsletter and we will send it to you the moment it goes live.
            </p>
            <Link
              href="/newsletter"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold hover:shadow-lg transition-shadow"
            >
              Notify me when it is ready
            </Link>
          </div>

          {/* Section context */}
          <div className="mt-8 bg-white rounded-xl border border-gray-100 p-5">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
              Part of
            </p>
            <p className="text-sm font-semibold text-gray-900 mb-3">
              {section}
            </p>
            <Link
              href="/start/niche-selection"
              className="inline-flex items-center gap-2 text-sm text-orange-500 hover:text-orange-600 font-medium transition-colors"
            >
              See all niche selection guides
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Back link */}
          <div className="mt-6 text-center">
            <Link
              href={backHref}
              className="inline-flex items-center gap-2 text-gray-500 hover:text-orange-500 transition-colors font-medium text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              {backLabel}
            </Link>
          </div>
        </div>
      </section>

      <NewsletterCTA />
    </div>
  )
}
