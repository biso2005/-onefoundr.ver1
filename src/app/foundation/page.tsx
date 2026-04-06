import type { Metadata } from 'next'
import Link from 'next/link'
import { Anchor, ArrowRight, Zap, Shield, Sun, Brain } from 'lucide-react'
import NewsletterCTA from '@/components/NewsletterCTA'
import { pillarMeta, gatewayHub, tracks, moatHubs } from '@/data/foundation'

export const metadata: Metadata = {
  title: 'The Foundation — Stay the Course | OneFoundr',
  description:
    'The mindset layer that runs underneath every other pillar. Covers financial anxiety, burnout, loneliness, identity, resilience, and the daily work of functioning as a solo founder.',
}

const trackIcons = {
  'inner-stability': Brain,
  'daily-functioning': Sun,
  'resilience': Shield,
}

const trackGradients = {
  'inner-stability': 'from-violet-500 to-purple-600',
  'daily-functioning': 'from-orange-500 to-amber-500',
  'resilience': 'from-teal-500 to-emerald-600',
}

export default function FoundationPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Dark Hero */}
      <section className="relative overflow-hidden bg-[#1A1A1A] pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-slate-500 to-gray-700 opacity-10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-br from-slate-500 to-gray-700 opacity-10 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-500 to-gray-700 flex items-center justify-center">
                <Anchor className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                {pillarMeta.tagline}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              {pillarMeta.title}
            </h1>

            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
              {pillarMeta.description}
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
            {pillarMeta.intro}
          </p>
        </div>
      </section>

      {/* Entry mechanic — two path cards */}
      <section className="py-12 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-6">
            Where do you want to start?
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">

            {/* Card 1 — I chose this path */}
            <Link
              href="/foundation/financial-anxiety"
              className="group bg-white rounded-xl border-2 border-gray-100 p-6 hover:border-orange-300 hover:shadow-md transition flex flex-col"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-orange-100 mb-4">
                <Zap className="w-5 h-5 text-orange-500" />
              </div>
              <h3 className="text-base font-bold text-gray-900 group-hover:text-orange-500 transition-colors mb-2">
                I chose this path
              </h3>
              <p className="text-sm text-gray-500 flex-1">
                You are here by choice. Start with the inner stability track.
              </p>
              <div className="flex items-center gap-1 mt-4 text-sm font-semibold text-orange-500">
                <span>Go to Track 1</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>

            {/* Card 2 — I didn't really have a choice */}
            <Link
              href="/foundation/unplanned-founder"
              className="group bg-[#1A1A1A] rounded-xl border-2 border-gray-700 p-6 hover:border-orange-500 hover:shadow-md transition flex flex-col"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 mb-4">
                <Anchor className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-orange-400 transition-colors mb-2">
                I didn't really have a choice
              </h3>
              <p className="text-sm text-gray-400 flex-1">
                Redundancy, circumstance, no other options. Start here first.
              </p>
              <div className="flex items-center gap-1 mt-4 text-sm font-semibold text-orange-400">
                <span>The Unplanned Founder</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Gateway Hub — Moat 1 */}
      <section className="py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-orange-500 uppercase tracking-wide mb-4">
              Gateway Hub — Moat
            </p>
            <Link
              href={gatewayHub.href}
              className="group block bg-gradient-to-r from-[#1A1A1A] to-gray-800 rounded-xl p-8 hover:shadow-lg transition border border-gray-700"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500 text-white text-xs font-semibold">
                  <Zap className="w-3 h-3" />
                  {gatewayHub.badge}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors mb-3">
                {gatewayHub.title}
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {gatewayHub.description}
              </p>
              <div className="flex items-center gap-2 text-orange-400 font-semibold text-sm">
                <span>Read the guide</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Three Tracks */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Three tracks
            </h2>
            <p className="text-gray-500 max-w-2xl">
              Work through them in order or go directly to what you need right now.
            </p>
          </div>

          <div className="space-y-10">
            {tracks.map((track) => {
              const Icon = trackIcons[track.id as keyof typeof trackIcons]
              const gradient = trackGradients[track.id as keyof typeof trackGradients]
              return (
                <div
                  key={track.id}
                  className="bg-white rounded-xl border border-gray-100 p-6 md:p-8 hover:shadow-md transition"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">

                    {/* Track header */}
                    <div className="md:w-64 shrink-0">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} mb-4`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
                        Track {track.number}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {track.title}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {track.description}
                      </p>
                    </div>

                    {/* Hub links */}
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {track.hubs.map((hub) => (
                        <Link
                          key={hub.href}
                          href={hub.href}
                          className="group flex items-start justify-between gap-3 bg-gray-50 hover:bg-orange-50 rounded-lg px-4 py-3 transition-colors"
                        >
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-0.5">
                              <span className="text-sm font-medium text-gray-700 group-hover:text-orange-600 transition-colors">
                                {hub.title}
                              </span>
                              {hub.isMoat && (
                                <span className="px-2 py-0.5 rounded-full bg-orange-100 text-orange-600 text-xs font-semibold shrink-0">
                                  Moat
                                </span>
                              )}
                            </div>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-orange-500 transition-colors shrink-0 mt-0.5" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Moat highlights */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              The moat pieces
            </h2>
            <p className="text-gray-500">
              Content that exists nowhere else. Zero competition.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {moatHubs.map((hub) => (
              <Link
                key={hub.href}
                href={hub.href}
                className="group bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition flex flex-col"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-xs font-semibold">
                    <Zap className="w-3 h-3" />
                    {hub.badge ?? 'Moat'}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-500 transition-colors mb-2">
                  {hub.title}
                </h3>
                <p className="text-sm text-gray-500 flex-1 leading-relaxed">
                  {hub.description}
                </p>
                <div className="flex items-center gap-1 mt-5 text-orange-500 text-sm font-semibold">
                  <span>Read the guide</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <NewsletterCTA />
    </div>
  )
}
