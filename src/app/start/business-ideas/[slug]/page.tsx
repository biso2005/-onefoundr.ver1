import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Lightbulb } from 'lucide-react'
import { businessIdeas } from '@/data/businessIdeas'
import NewsletterCTA from '@/components/NewsletterCTA'

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  return businessIdeas.map((idea) => ({ slug: idea.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const idea = businessIdeas.find((b) => b.slug === params.slug)
  return {
    title: idea
      ? `${idea.title} — OneFoundr`
      : 'Business Idea — OneFoundr',
    description: idea?.description ?? 'A business idea for solo founders.',
  }
}

export default function IdeaPage({ params }: Props) {
  const idea = businessIdeas.find((b) => b.slug === params.slug)

  if (!idea) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 mb-4">Idea not found.</p>
          <Link
            href="/start/business-ideas"
            className="text-orange-500 hover:text-orange-600 font-medium"
          >
            Back to Business Ideas
          </Link>
        </div>
      </div>
    )
  }

  const difficultyColour =
    idea.difficulty === 'Beginner'
      ? 'bg-green-100 text-green-700'
      : idea.difficulty === 'Intermediate'
      ? 'bg-amber-100 text-amber-700'
      : 'bg-red-100 text-red-700'

  return (
    <div className="min-h-screen bg-white">

      {/* Dark Hero */}
      <section className="bg-[#1A1A1A] text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Back Link */}
          <Link
            href="/start/business-ideas"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Business Ideas</span>
          </Link>

          {/* Category Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white text-sm font-medium mb-6">
            <Lightbulb className="w-4 h-4" />
            <span>{idea.category}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {idea.title}
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-300 max-w-3xl">
            {idea.description}
          </p>

          {/* Meta Tags */}
          <div className="flex flex-wrap gap-3 mt-8">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${difficultyColour}`}>
              {idea.difficulty}
            </span>
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-700 text-gray-200">
              {idea.startupCost}
            </span>
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-700 text-gray-200">
              First £ in {idea.timeToFirstRevenue.toLowerCase()}
            </span>
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-700 text-gray-200">
              {idea.workStyle}
            </span>
            {idea.startThisWeekend && (
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-orange-500 text-white">
                Start This Weekend
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Coming Soon Body */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-orange-50 border border-orange-100 rounded-xl p-8 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-orange-100 mb-6">
              <Lightbulb className="w-7 h-7 text-orange-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Full guide coming soon
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-6">
              We are writing a complete guide to starting a {idea.title.toLowerCase()} business —
              startup costs, first steps, real income expectations, and honest mistakes to avoid.
              Join the newsletter to get it first.
            </p>
            <Link
              href="/newsletter"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold hover:shadow-lg transition-shadow"
            >
              Get notified when it is ready
            </Link>
          </div>

          {/* Back to hub */}
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

      {/* Newsletter */}
      <NewsletterCTA />

    </div>
  )
}