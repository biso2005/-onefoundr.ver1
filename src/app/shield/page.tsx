import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield, Zap, Umbrella, FileCheck, Receipt, PiggyBank, Building, TrendingDown, Heart, DollarSign, AlertTriangle, Lightbulb, Lock } from 'lucide-react'
import NewsletterCTA from '@/components/NewsletterCTA'
import { pillarMeta, gatewayHub, tracks, moatHubs } from '@/data/shield'

export const metadata: Metadata = {
  title: `${pillarMeta.title} — ${pillarMeta.tagline} | OneFoundr`,
  description: pillarMeta.description,
}

const trackIcons: Record<string, any> = {
  'financial-protection': DollarSign,
  'legal-protection': FileCheck,
  'operational-protection': Zap,
}

const trackGradients: Record<string, string> = {
  'financial-protection': 'from-emerald-600 to-teal-700',
  'legal-protection': 'from-orange-500 to-amber-500',
  'operational-protection': 'from-cyan-600 to-teal-700',
}

export default function TheShieldPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Dark Hero */}
      <section className="relative overflow-hidden bg-[#1A1A1A] pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className={`absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br ${pillarMeta.gradient} opacity-10 blur-3xl`} />
          <div className={`absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-br ${pillarMeta.gradient} opacity-10 blur-3xl`} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillarMeta.gradient} flex items-center justify-center`}>
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">{pillarMeta.tagline}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">{pillarMeta.title}</h1>

            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">{pillarMeta.description}</p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">{pillarMeta.intro}</p>
          </div>
        </div>
      </section>

      {/* Spokes Grid (everything in this section) */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">Everything in this section</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            { ( [gatewayHub, ...tracks.flatMap(t => t.hubs)] ).map((hub) => {
                const Icon = trackIcons[hub.track] ?? Umbrella
                const gradient = trackGradients[hub.track] ?? pillarMeta.gradient
                return (
                  <Link key={hub.href} href={hub.href} className="group bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:border-gray-200 transition-all duration-200 flex flex-col">
                    <div className="mb-4">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} mb-3`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {hub.badge && (
                      <span className="inline-block text-xs font-semibold bg-orange-50 text-orange-600 px-3 py-1 rounded-full mb-3 w-fit">{hub.badge}</span>
                    )}

                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">{hub.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed flex-1">{hub.description}</p>

                    <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-gray-400 group-hover:text-orange-500 transition-colors">
                      <span>Read guide</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                    </div>
                  </Link>
                )
            }) }
          </div>
        </div>
      </section>

      {/* Tracks (detailed) */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Three tracks</h2>
            <p className="text-gray-500 max-w-2xl">Work through them in order or go directly to what you need right now.</p>
          </div>

          <div className="space-y-10">
            {tracks.map((track) => {
              const Icon = trackIcons[track.id] ?? Umbrella
              const gradient = trackGradients[track.id] ?? pillarMeta.gradient
              return (
                <div key={track.id} className="bg-white rounded-xl border border-gray-100 p-6 md:p-8 hover:shadow-md transition">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="md:w-64 shrink-0">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} mb-4`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Track {track.number}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{track.title}</h3>
                      <p className="text-sm text-gray-500">{track.description}</p>
                    </div>

                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {track.hubs.map((hub) => (
                        <Link key={hub.href} href={hub.href} className="group flex items-start justify-between gap-3 bg-gray-50 hover:bg-orange-50 rounded-lg px-4 py-3 transition-colors">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-0.5">
                              <span className="text-sm font-medium text-gray-700 group-hover:text-orange-600 transition-colors">{hub.title}</span>
                              {hub.badge && (<span className="px-2 py-0.5 rounded-full bg-orange-100 text-orange-600 text-xs font-semibold shrink-0">{hub.badge}</span>)}
                            </div>
                          </div>
                          <svg className="w-3.5 h-3.5 text-gray-400 group-hover:text-orange-500 transition-colors shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
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

      {/* Reference highlights (moat hubs) */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {moatHubs.map((hub) => (
              <Link key={hub.href} href={hub.href} className="group bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  {hub.badge && (<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-xs font-semibold">{hub.badge}</span>)}
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-500 transition-colors mb-2">{hub.title}</h3>
                <p className="text-sm text-gray-500 flex-1 leading-relaxed">{hub.description}</p>
                <div className="flex items-center gap-1 mt-5 text-orange-500 text-sm font-semibold"><span>Read the guide</span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <NewsletterCTA />
    </div>
  )
}
