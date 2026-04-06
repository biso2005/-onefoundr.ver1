import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Target, Users, Zap, Heart } from 'lucide-react'
import NewsletterCTA from '@/components/NewsletterCTA'

export const metadata: Metadata = {
  title: 'About — OneFoundr',
  description:
    'OneFoundr exists for one reason: to give solo founders the practical knowledge they need to build profitable businesses — without a co-founder, without VC, and without the fluff.',
}

const values = [
  {
    icon: Target,
    gradient: 'from-orange-500 to-amber-500',
    title: 'Practical over theoretical',
    description:
      'Every guide on OneFoundr is built around what actually works — not what sounds good in a business school lecture. Real tactics. Real numbers. Real results.',
  },
  {
    icon: Zap,
    gradient: 'from-teal-700 to-emerald-500',
    title: 'Clarity over comprehensiveness',
    description:
      'We would rather give you three things that move the needle than thirty things that overwhelm you. Less, but better.',
  },
  {
    icon: Users,
    gradient: 'from-amber-500 to-orange-600',
    title: 'Solo-first thinking',
    description:
      'Most business advice is written for teams, startups, or people with funding. We write exclusively for people building alone — which changes everything.',
  },
  {
    icon: Heart,
    gradient: 'from-teal-600 to-teal-800',
    title: 'Honest about the hard parts',
    description:
      'Building solo is hard. We do not pretend otherwise. We talk about doubt, burnout, loneliness, and failure — because ignoring them does not make them go away.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#1A1A1A] pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 opacity-10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-br from-teal-600 to-emerald-500 opacity-10 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Built for founders{' '}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                building alone.
              </span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
              OneFoundr exists for one reason: to give solo founders the 
              practical knowledge they need to build profitable businesses — 
              without a co-founder, without VC funding, and without the fluff.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why OneFoundr exists
            </h2>
            <div className="flex flex-col gap-4 text-lg text-gray-600 leading-relaxed">
              <p>
                Most business content is written for one of two audiences: 
                startup founders chasing venture capital, or lifestyle bloggers 
                selling the dream. Neither is useful if you are trying to build 
                a real, profitable business by yourself.
              </p>
              <p>
                Solo founders face different problems. You do not have a 
                co-founder to sanity-check your decisions. You do not have a 
                team to delegate to. You do not have investors to fall back on. 
                Every decision lands on you — and you need advice that 
                understands that reality.
              </p>
              <p>
                OneFoundr was built to fill that gap. Every guide, framework, 
                and resource here is written specifically for people building 
                alone — with the constraints, pressures, and advantages that 
                come with that.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            How we do things here
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div
                  key={value.title}
                  className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-shadow"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* What you will find */}
      <section className="py-16 md:py-20 border-b border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What you will find here
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              OneFoundr is organised around six pillars — the six areas every 
              solo founder needs to master to build a profitable, sustainable 
              business.
            </p>
            <div className="flex flex-col gap-3">
              {[
                { name: 'The Spark', desc: 'Start Solo — ideas, validation, first steps', href: '/start' },
                { name: 'The Offer', desc: 'What to Sell — productize, price, package', href: '/offer' },
                { name: 'The Engine', desc: 'Get Clients — marketing, sales, systems', href: '/sales' },
                { name: 'The Shield', desc: 'Stay Protected — legal, financial, mental', href: '/shield' },
                { name: 'The Leverage', desc: 'Scale Smart — automate, delegate, multiply', href: '/leverage' },
                { name: 'The Foundation', desc: 'Stay the Course — mindset, routines, resilience', href: '/foundation' },
              ].map((pillar) => (
                <Link
                  key={pillar.href}
                  href={pillar.href}
                  className="flex items-center justify-between bg-white rounded-xl border border-gray-100 px-6 py-4 hover:border-orange-200 hover:shadow-sm transition-all group"
                >
                  <div>
                    <span className="font-bold text-gray-900 group-hover:text-orange-500 transition-colors">
                      {pillar.name}
                    </span>
                    <span className="text-gray-500 text-sm ml-3">
                      {pillar.desc}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to start building?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
            The best place to start is the Start Here page — a clear, 
            linear path from idea to first client.
          </p>
          <Link
            href="/start-here"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
          >
            Start Here
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <NewsletterCTA variant="minimal" />

    </div>
  )
}
