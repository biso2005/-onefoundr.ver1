import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Package,
  Layers,
  BookOpen,
  DollarSign,
  Gift,
  Crosshair,
  Zap,
  RefreshCw,
  ArrowRight,
} from 'lucide-react'
import CategoryHub from '@/components/CategoryHub'
import { pillarMeta, gatewayHub, tracks, moatHubs } from '@/data/offer'

export const metadata: Metadata = {
  title: `${pillarMeta.title} — ${pillarMeta.tagline}`,
  description: pillarMeta.description,
}

const trackIcons: Record<string, any> = {
  discovery: Crosshair,
  packaging: Gift,
  monetization: RefreshCw,
}

const trackGradients: Record<string, string> = {
  discovery: 'from-orange-400 to-rose-500',
  packaging: 'from-teal-700 to-emerald-500',
  monetization: 'from-orange-500 to-amber-500',
}

export default function TheOfferPage() {
  return (
    <CategoryHub
      title={pillarMeta.title}
      tagline={`Pillar 2 — ${pillarMeta.tagline}`}
      description={pillarMeta.description}
      icon={Package}
      gradient={pillarMeta.gradient}
      intro={pillarMeta.intro}
      spokes={[]}
    >
      {/* Gateway Hub */}
      <section className="py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-teal-600 uppercase tracking-wide mb-4">Gateway Hub</p>
            <Link
              href={gatewayHub.href}
              className="group block bg-gradient-to-r from-[#1A1A1A] to-gray-800 rounded-xl p-8 hover:shadow-lg transition border border-gray-700"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500 text-white text-xs font-semibold">
                  <Zap className="w-3 h-3" />
                  {gatewayHub.badge}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-white group-hover:text-teal-400 transition-colors mb-3">
                {gatewayHub.title}
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {gatewayHub.description}
              </p>
              <div className="flex items-center gap-2 text-teal-400 font-semibold text-sm">
                <span>Read the guide</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Tracks */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Three tracks</h2>
            <p className="text-gray-500 max-w-2xl">Work through them in order or jump to what you need.</p>
          </div>

          <div className="space-y-10">
            {tracks.map((track) => {
              const Icon = trackIcons[track.id]
              const gradient = trackGradients[track.id]
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
                        <Link key={hub.href} href={hub.href} className="group flex items-start justify-between gap-3 bg-gray-50 hover:bg-teal-50 rounded-lg px-4 py-3 transition-colors">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-0.5">
                              <span className="text-sm font-medium text-gray-700 group-hover:text-teal-600 transition-colors">{hub.title}</span>
                              {hub.badge && (
                                <span className="px-2 py-0.5 rounded-full bg-teal-100 text-teal-600 text-xs font-semibold shrink-0">{hub.badge}</span>
                              )}
                            </div>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-teal-500 transition-colors shrink-0 mt-0.5" />
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

      {/* MOAT Highlights */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {moatHubs.map((hub) => (
              <Link key={hub.href} href={hub.href} className="group bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  {hub.badge && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-600 text-xs font-semibold">
                      <Zap className="w-3 h-3" />
                      {hub.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-teal-500 transition-colors mb-2">{hub.title}</h3>
                <p className="text-sm text-gray-500 flex-1 leading-relaxed">{hub.description}</p>
                <div className="flex items-center gap-1 mt-5 text-teal-500 text-sm font-semibold">
                  <span>Read the guide</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </CategoryHub>
  )
}
