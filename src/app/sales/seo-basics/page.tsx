import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Clock, Search, GitBranch, BarChart2 } from 'lucide-react'
import NewsletterCTA from '@/components/NewsletterCTA'

export const metadata: Metadata = {
  title: 'SEO Basics',
  description: 'Practical SEO fundamentals to help solo founders attract organic traffic and qualified leads.',
}

export default function SEOBasicsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#1A1A1A] text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/sales" className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to The Engine</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white text-sm font-medium mb-6">
            <Search className="w-4 h-4" />
            <span>The Engine — Pillar 3</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">SEO Basics</h1>

          <p className="text-xl text-gray-300 max-w-3xl">Practical SEO fundamentals to help solo founders attract organic traffic and qualified leads.</p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50 border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8">
            <div className="flex gap-4">
              <Clock className="w-8 h-8 text-amber-600 shrink-0 mt-1" />
              <div>
                <p className="text-lg text-gray-900 mb-3"><strong>Start small. Rank consistently.</strong></p>
                <p className="text-gray-600">Focus on user intent, helpful content, and simple technical hygiene. Over time, compounding relevance wins.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Core SEO Checklist</h2>

          <div className="space-y-6">
            <div className="bg-white rounded-xl border p-6">
              <h3 className="text-xl font-semibold mb-2">1. Keyword Intent & Research</h3>
              <p className="text-sm text-gray-600 mb-2">Find 3–5 topics your ideal client searches for. Prioritize intent that maps to your offer.</p>
              <p className="text-sm text-gray-600">Tools: use search suggestions, Google "People also ask", and a single keyword tool for volume estimates.</p>
            </div>

            <div className="bg-white rounded-xl border p-6">
              <h3 className="text-xl font-semibold mb-2">2. On-Page Structure</h3>
              <p className="text-sm text-gray-600 mb-2">Title, meta description, H1 and H2s should match intent and include the target phrase naturally.</p>
              <p className="text-sm text-gray-600">Write clear introductions, use short paragraphs, and include examples or templates that readers can use.</p>
            </div>

            <div className="bg-white rounded-xl border p-6">
              <h3 className="text-xl font-semibold mb-2">3. Technical Hygiene</h3>
              <p className="text-sm text-gray-600 mb-2">Ensure pages load quickly, are indexable, and canonical URLs are set. Mobile-first matters.</p>
              <p className="text-sm text-gray-600">Check sitemap, robots.txt, and fix broken links.</p>
            </div>

            <div className="bg-white rounded-xl border p-6">
              <h3 className="text-xl font-semibold mb-2">4. Measure & Iterate</h3>
              <p className="text-sm text-gray-600 mb-2">Track impressions, clicks, and top queries in Search Console. Use simple goals in your analytics to measure conversions.</p>
              <p className="text-sm text-gray-600">Double down on pages that show rising clicks but low CTR or low conversion.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-amber-50 border-t border-amber-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Action Plan</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <GitBranch className="w-5 h-5 text-amber-600 shrink-0 mt-1" />
              <p className="text-sm text-gray-700">Create one evergreen pillar page and 3 supporting posts. Link them logically.</p>
            </div>
            <div className="flex items-start gap-3">
              <BarChart2 className="w-5 h-5 text-amber-600 shrink-0 mt-1" />
              <p className="text-sm text-gray-700">Measure weekly, iterate monthly.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border-2 border-amber-200 p-8">
            <p className="text-gray-600 text-sm"><strong>Start with one keyword cluster and ship consistently.</strong> SEO compounds — three months of steady work yields meaningful traffic.</p>
          </div>
        </div>
      </section>

      <NewsletterCTA />
    </div>
  )
}
