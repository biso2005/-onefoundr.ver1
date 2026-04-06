"use client"

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Lightbulb, Zap } from 'lucide-react'
import { businessIdeas, categories, difficulties, startupCosts, timeToFirstRevenueOptions, workStyles, incomeGuide } from '@/data/businessIdeas'
import NewsletterCTA from '@/components/NewsletterCTA'

export default function BusinessIdeasPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const [activeDifficulty, setActiveDifficulty] = useState<string>('All')
  const [activeStartupCost, setActiveStartupCost] = useState<string>('All')
  const [activeTimeToRevenue, setActiveTimeToRevenue] = useState<string>('All')
  const [activeWorkStyle, setActiveWorkStyle] = useState<string>('All')

  const filtered = businessIdeas.filter((idea) => {
    if (activeCategory !== 'All' && idea.category !== activeCategory) return false
    if (activeDifficulty !== 'All' && idea.difficulty !== activeDifficulty) return false
    if (activeStartupCost !== 'All' && idea.startupCost !== activeStartupCost) return false
    if (activeTimeToRevenue !== 'All' && idea.timeToFirstRevenue !== activeTimeToRevenue) return false
    if (activeWorkStyle !== 'All' && idea.workStyle !== activeWorkStyle) return false
    return true
  })

  const activeIncomeGuide =
    activeCategory !== 'All'
      ? incomeGuide.filter((g) => g.category === activeCategory)
      : incomeGuide

  const difficultyColour = (d: string) =>
    d === 'Beginner'
      ? 'bg-green-100 text-green-700'
      : d === 'Intermediate'
      ? 'bg-amber-100 text-amber-700'
      : 'bg-red-100 text-red-700'

  return (
    <div className="min-h-screen bg-white">

      {/* ── Dark Hero ── */}
      <section className="bg-[#1A1A1A] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <Link
            href="/start"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to The Spark</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white text-sm font-medium mb-6">
            <Lightbulb className="w-4 h-4" />
            <span>The Spark — Pillar 1</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Business Ideas for Solo Founders
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mb-10">
            {businessIdeas.length} proven business ideas you can launch solo. Filter by what you want to sell, how much you want to spend, and how fast you need income.
          </p>

          {/* Entry Point — Idea Finder */}
          <div className="bg-white/10 border border-white/20 rounded-xl p-6 max-w-2xl">
            <p className="text-sm text-gray-400 uppercase tracking-wide font-medium mb-2">
              Not sure which business is right for you?
            </p>
            <h2 className="text-xl font-bold text-white mb-4">
              Take the Business Idea Finder
            </h2>
            <p className="text-gray-300 text-sm mb-5">
              Answer 5 questions and get a shortlist of ideas matched to your skills, budget, and income goal.
            </p>
            <Link
              href="/start/business-ideas/idea-finder"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold text-sm hover:shadow-lg transition-shadow"
            >
              Take the Business Idea Finder
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Filters ── */}
      <section className="border-b border-gray-100 bg-gray-50 py-6 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">

          {/* Category */}
          <div className="flex flex-wrap gap-2">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide self-center mr-1">
              Category
            </span>
            {['All', ...categories].map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === c
                    ? 'bg-orange-500 text-white'
                    : 'bg-white border border-gray-200 text-gray-600 hover:border-orange-300'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Secondary filters */}
          <div className="flex flex-wrap gap-x-6 gap-y-3">

            {/* Difficulty */}
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                Difficulty
              </span>
              {['All', ...difficulties].map((d) => (
                <button
                  key={d}
                  onClick={() => setActiveDifficulty(d)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    activeDifficulty === d
                      ? 'bg-gray-800 text-white'
                      : 'bg-white border border-gray-200 text-gray-600 hover:border-gray-400'
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>

            {/* Startup Cost */}
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                Startup Cost
              </span>
              {['All', ...startupCosts].map((s) => (
                <button
                  key={s}
                  onClick={() => setActiveStartupCost(s)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    activeStartupCost === s
                      ? 'bg-gray-800 text-white'
                      : 'bg-white border border-gray-200 text-gray-600 hover:border-gray-400'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>

            {/* Time to First £ */}
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                Time to First £
              </span>
              {['All', ...timeToFirstRevenueOptions].map((t) => (
                <button
                  key={t}
                  onClick={() => setActiveTimeToRevenue(t)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    activeTimeToRevenue === t
                      ? 'bg-gray-800 text-white'
                      : 'bg-white border border-gray-200 text-gray-600 hover:border-gray-400'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            {/* Work Style */}
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                Work Style
              </span>
              {['All', ...workStyles].map((w) => (
                <button
                  key={w}
                  onClick={() => setActiveWorkStyle(w)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    activeWorkStyle === w
                      ? 'bg-gray-800 text-white'
                      : 'bg-white border border-gray-200 text-gray-600 hover:border-gray-400'
                  }`}
                >
                  {w}
                </button>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── Honest Income Guide ── */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900">
              Honest Income Guide
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Real starting income, realistic ceilings, and what actually limits your earnings — by business type.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {activeIncomeGuide.map((guide) => (
              <div
                key={guide.category}
                className="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md transition"
              >
                <p className="text-xs font-semibold text-orange-500 uppercase tracking-wide mb-3">
                  {guide.category}
                </p>
                <div className="space-y-2 mb-4">
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">Starting income</p>
                    <p className="text-sm font-semibold text-gray-900">{guide.startingIncome}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">Time to first £</p>
                    <p className="text-sm font-semibold text-gray-900">{guide.timeToFirstRevenue}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">Solo ceiling</p>
                    <p className="text-sm font-semibold text-gray-900">{guide.incomeCeiling}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">Limited by</p>
                    <p className="text-sm font-semibold text-gray-900">{guide.limitedBy}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 italic border-t border-gray-100 pt-3">
                  {guide.honestTake}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ideas Grid ── */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Results count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-gray-500">
              Showing <span className="font-semibold text-gray-900">{filtered.length}</span> of {businessIdeas.length} ideas
            </p>
            {(activeCategory !== 'All' || activeDifficulty !== 'All' || activeStartupCost !== 'All' || activeTimeToRevenue !== 'All' || activeWorkStyle !== 'All') && (
              <button
                onClick={() => {
                  setActiveCategory('All')
                  setActiveDifficulty('All')
                  setActiveStartupCost('All')
                  setActiveTimeToRevenue('All')
                  setActiveWorkStyle('All')
                }}
                className="text-sm text-orange-500 hover:text-orange-600 font-medium"
              >
                Clear all filters
              </button>
            )}
          </div>

          {/* No results */}
          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 mb-2">No ideas match those filters.</p>
              <button
                onClick={() => {
                  setActiveCategory('All')
                  setActiveDifficulty('All')
                  setActiveStartupCost('All')
                  setActiveTimeToRevenue('All')
                  setActiveWorkStyle('All')
                }}
                className="text-orange-500 hover:text-orange-600 font-medium text-sm"
              >
                Clear all filters
              </button>
            </div>
          )}

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((idea) => (
              <Link
                key={idea.slug}
                href={idea.href}
                className="group bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition flex flex-col"
              >
                {/* Top row */}
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-semibold text-orange-500 uppercase tracking-wide">
                    {idea.category}
                  </span>
                  {idea.startThisWeekend && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-orange-100 text-orange-600 text-xs font-semibold">
                      <Zap className="w-3 h-3" />
                      This Weekend
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-500 transition-colors mb-2">
                  {idea.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1 line-clamp-3">
                  {idea.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${difficultyColour(idea.difficulty)}`}>
                    {idea.difficulty}
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                    {idea.startupCost}
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                    {idea.timeToFirstRevenue}
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                    {idea.workStyle}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterCTA />

    </div>
  )
}
