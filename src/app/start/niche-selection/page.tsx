import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  Lightbulb,
  Zap,
  Target,
  Compass,
  RefreshCw,
  BookOpen,
} from 'lucide-react'
import NewsletterCTA from '@/components/NewsletterCTA'

const nicheFinderTool = {
  title: 'The Niche Finder Tool',
  description:
    'Answer 5 questions and find out which niching path fits your situation — plus the right formula for your business type.',
  href: '/start/niche-selection/niche-finder',
}

const paths = [
  {
    number: '01',
    title: 'The Deliberate Niche',
    subtitle: 'Choose your niche before you start',
    icon: Target,
    colour: 'from-orange-500 to-amber-500',
    href: '/start/niche-selection/deliberate-niche',
    whoFor: 'You have not started yet and want to choose a direction with intention.',
    articles: [
      { title: 'The Niche Formula Library', href: '/start/niche-selection/niche-formula-library' },
      { title: 'The Niche Matrix', href: '/start/niche-selection/niche-matrix' },
      { title: 'The Niche Size Calculator', href: '/start/niche-selection/niche-size-calculator' },
      { title: 'The 5 Question Stress Test', href: '/start/niche-selection/5-question-stress-test' },
    ],
  },
  {
    number: '02',
    title: 'The Emergent Niche',
    subtitle: 'Start broad. Let patterns emerge.',
    icon: Compass,
    colour: 'from-violet-500 to-purple-500',
    href: '/start/niche-selection/emergent-niche',
    whoFor: 'You have just started and are still figuring out where you add the most value.',
    articles: [
      { title: 'The 3 Phases of Emergence', href: '/start/niche-selection/emergent-niche' },
      { title: 'What Patterns to Look For', href: '/start/niche-selection/emergent-niche' },
      { title: 'When to Stop Exploring', href: '/start/niche-selection/emergent-niche' },
      { title: 'How to Narrow Without Losing Clients', href: '/start/niche-selection/emergent-niche' },
    ],
  },
  {
    number: '03',
    title: 'The Pivot Niche',
    subtitle: 'You started somewhere. Now you need to move.',
    icon: RefreshCw,
    colour: 'from-blue-500 to-cyan-500',
    href: '/start/niche-selection/pivot-niche',
    whoFor: 'You have a niche but it is not working — or it stopped working.',
    articles: [
      { title: 'The Niche Diagnostic', href: '/start/niche-selection/niche-diagnostic' },
      { title: 'How to Pivot Without Burning Everything', href: '/start/niche-selection/pivot-niche' },
      { title: 'Communicating Your Pivot', href: '/start/niche-selection/pivot-niche' },
      { title: 'Soft Pivot vs Hard Pivot', href: '/start/niche-selection/pivot-niche' },
    ],
  },
]

const byBusinessType = [
  { title: 'Niching for Service Businesses', href: '/start/niche-selection/niche-for-services' },
  { title: 'Niching for Physical Products', href: '/start/niche-selection/niche-for-physical-products' },
  { title: 'Niching for Digital Products', href: '/start/niche-selection/niche-for-digital-products' },
  { title: 'Niching for Knowledge & Education', href: '/start/niche-selection/niche-for-knowledge-education' },
  { title: 'Niching for Content & Media', href: '/start/niche-selection/niche-for-content-media' },
  { title: 'Niching for SaaS & Software', href: '/start/niche-selection/niche-for-saas' },
  { title: 'Niching for Community', href: '/start/niche-selection/niche-for-community' },
]

const moats = [
  {
    title: 'The Niche Finder Tool',
    description: 'Find your niching path in 5 questions.',
    href: '/start/niche-selection/niche-finder',
    icon: Zap,
  },
  {
    title: 'The Niche Formula Library',
    description: 'The right formula for every business type.',
    href: '/start/niche-selection/niche-formula-library',
    icon: BookOpen,
  },
  {
    title: 'The Niche Size Calculator',
    description: 'Find out if your niche is big enough to hit your income goal.',
    href: '/start/niche-selection/niche-size-calculator',
    icon: Target,
  },
  {
    title: 'The Niche Diagnostic',
    description: 'Identify exactly what is wrong with your current niche.',
    href: '/start/niche-selection/niche-diagnostic',
    icon: RefreshCw,
  },
]

export default function NicheSelectionPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Dark Hero */}
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
            Niche Selection
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mb-10">
            Picking the wrong niche is the most expensive mistake a solo founder can make. This hub covers every path — whether you are starting fresh, finding your feet, or fixing a niche that is not working.
          </p>

          {/* Niche Finder CTA */}
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl p-8 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold uppercase tracking-wide mb-4">
              <Zap className="w-3 h-3" />
              Start here
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">
              {nicheFinderTool.title}
            </h2>
            <p className="text-orange-100 mb-6">
              {nicheFinderTool.description}
            </p>
            <Link
              href={nicheFinderTool.href}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-orange-500 font-semibold text-sm hover:shadow-lg transition-shadow"
            >
              Find my niching path
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Three Paths */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Three paths to your niche
            </h2>
            <p className="text-gray-500 max-w-2xl">
              There is no single right way to find your niche. The right path depends on where you are right now.
            </p>
          </div>

          <div className="space-y-8">
            {paths.map((path) => {
              const Icon = path.icon
              return (
                <div
                  key={path.number}
                  className="bg-white rounded-xl border border-gray-100 p-6 md:p-8 hover:shadow-md transition"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">

                    {/* Path header */}
                    <div className="md:w-72 shrink-0">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${path.colour} mb-4`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
                        Path {path.number}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {path.title}
                      </h3>
                      <p className="text-sm text-orange-500 font-medium mb-3">
                        {path.subtitle}
                      </p>
                      <p className="text-sm text-gray-500 mb-4">
                        {path.whoFor}
                      </p>
                      <Link
                        href={path.href}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors"
                      >
                        Read the full guide
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    {/* Articles */}
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {path.articles.map((article) => (
                        <Link
                          key={article.title}
                          href={article.href}
                          className="group flex items-center justify-between gap-3 bg-gray-50 hover:bg-orange-50 rounded-lg px-4 py-3 transition-colors"
                        >
                          <span className="text-sm font-medium text-gray-700 group-hover:text-orange-600 transition-colors">
                            {article.title}
                          </span>
                          <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-orange-500 transition-colors shrink-0" />
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

      {/* By Business Type */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Niche by business type
            </h2>
            <p className="text-gray-500 max-w-2xl">
              How you niche depends on what you sell. Each business type has a different formula, different constraints, and different mistakes to avoid.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {byBusinessType.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-center justify-between gap-3 bg-white rounded-xl border border-gray-100 px-5 py-4 hover:shadow-md transition"
              >
                <span className="text-sm font-semibold text-gray-800 group-hover:text-orange-500 transition-colors">
                  {item.title}
                </span>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-orange-500 transition-colors shrink-0" />
              </Link>
            ))}
          </div>

          {/* Real Examples link */}
          <div className="mt-6">
            <Link
              href="/start/niche-selection/niche-examples"
              className="inline-flex items-center gap-2 text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors"
            >
              See real niche examples — one per business type
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Moats */}
      <section className="py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Tools and frameworks
            </h2>
            <p className="text-gray-500">
              Structured tools you can use immediately — no signup required.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {moats.map((moat) => {
              const Icon = moat.icon
              return (
                <Link
                  key={moat.href}
                  href={moat.href}
                  className="group bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition flex flex-col"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-orange-100 mb-4">
                    <Icon className="w-5 h-5 text-orange-500" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 group-hover:text-orange-500 transition-colors mb-2">
                    {moat.title}
                  </h3>
                  <p className="text-sm text-gray-500 flex-1">
                    {moat.description}
                  </p>
                  <div className="flex items-center gap-1 mt-4 text-orange-500 text-sm font-medium">
                    <span>Open tool</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <NewsletterCTA />
    </div>
  )
}


