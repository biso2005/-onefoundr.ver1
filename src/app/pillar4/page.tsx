import type { Metadata } from 'next'
import CategoryHub from '@/components/CategoryHub'
import { pillar4Meta, gatewayHub, tracks } from '@/data/pillar4'
import { TrendingUp, ArrowRight } from 'lucide-react'
import Pillar4Placeholder from '@/components/Pillar4Placeholder'

export const metadata: Metadata = {
  title: 'Pillar 4',
  description: 'Scaffold for Pillar 4',
}

export default function Pillar4Page() {
  return (
    <CategoryHub
      title={pillar4Meta.title}
      tagline={pillar4Meta.tagline}
      description={pillar4Meta.description}
      icon={TrendingUp}
      gradient={pillar4Meta.gradient}
      intro={pillar4Meta.intro}
      spokes={[]}
    >
      {/* Gateway */}
      <section className="py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-orange-500 uppercase tracking-wide mb-4">Gateway Hub</p>
            <Pillar4Placeholder title={gatewayHub.title} description={gatewayHub.description} href={gatewayHub.href} />
          </div>
        </div>
      </section>

      {/* Tracks */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Tracks</h2>
            <p className="text-gray-500 max-w-2xl">Scaffolded tracks for Pillar 4.</p>
          </div>

          <div className="space-y-10">
            {tracks.map((track) => (
              <div key={track.id} className="bg-white rounded-xl border border-gray-100 p-6 md:p-8 hover:shadow-md transition">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="md:w-64 shrink-0">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-slate-500 to-gray-700 mb-4`}>
                    </div>
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Track {track.number}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{track.title}</h3>
                    <p className="text-sm text-gray-500">{track.description}</p>
                  </div>

                  <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {track.hubs.map(hub => (
                      <a key={hub.href} href={hub.href} className="group flex items-start justify-between gap-3 bg-gray-50 hover:bg-orange-50 rounded-lg px-4 py-3 transition-colors">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-sm font-medium text-gray-700 group-hover:text-orange-600 transition-colors">{hub.title}</span>
                          </div>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-orange-500 transition-colors shrink-0 mt-0.5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </CategoryHub>
  )
}
