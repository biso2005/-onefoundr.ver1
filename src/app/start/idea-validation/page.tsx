import Link from 'next/link'
import { ArrowLeft, ArrowRight, Lightbulb, Zap, Monitor, Users, BarChart2, CheckSquare } from 'lucide-react'
import NewsletterCTA from '@/components/NewsletterCTA'

const flagship = {
  title: 'The 7-Day Solo Validation Sprint',
  description:
    'A day-by-day framework for validating any business idea in one week — without quitting your job, spending money, or building anything.',
  href: '/start/idea-validation/7-day-sprint',
}

const stages = [
  {
    number: '01',
    title: 'Desktop Validation',
    subtitle: 'What you can find out without leaving your desk',
    icon: Monitor,
    colour: 'from-blue-500 to-cyan-500',
    articles: [
      { title: 'Demand Research', href: '/start/idea-validation/demand-research' },
      { title: 'Competitor Research', href: '/start/idea-validation/competitor-research' },
      { title: 'AI-Native Validation', href: '/start/idea-validation/ai-native-validation' },
    ],
  },
  {
    number: '02',
    title: 'Human Validation',
    subtitle: 'What you can only find out by talking to real people',
    icon: Users,
    colour: 'from-violet-500 to-purple-500',
    articles: [
      { title: 'Problem Discovery', href: '/start/idea-validation/problem-discovery' },
      { title: 'Customer Conversations', href: '/start/idea-validation/customer-conversations' },
      { title: 'Avoiding Validation Bias', href: '/start/idea-validation/avoiding-validation-bias' },
      { title: 'Community Validation', href: '/start/idea-validation/community-validation', isNew: true },
    ],
  },
  {
    number: '03',
    title: 'Market Validation',
    subtitle: 'What you can only find out by putting something in front of people',
    icon: BarChart2,
    colour: 'from-orange-500 to-amber-500',
    articles: [
      { title: 'Test Before Building', href: '/start/idea-validation/test-before-building' },
      { title: 'Physical Product Validation', href: '/start/idea-validation/physical-product-validation', isNew: true },
      { title: 'Content & Media Validation', href: '/start/idea-validation/content-media-validation', isNew: true },
      { title: 'Channel Validation', href: '/start/idea-validation/channel-validation' },
      { title: 'The Riskiest Assumption Test', href: '/start/idea-validation/riskiest-assumption-test' },
    ],
  },
  {
    number: '04',
    title: 'Decision',
    subtitle: 'What do you do with what you have learned?',
    icon: CheckSquare,
    colour: 'from-green-500 to-emerald-500',
    articles: [
      { title: 'Reading Your Validation Signals', href: '/start/idea-validation/reading-validation-signals' },
      { title: 'The Pre-Revenue Validation Scorecard', href: '/start/idea-validation/validation-scorecard' },
      { title: 'The Founder-Idea Fit Assessment', href: '/start/idea-validation/founder-idea-fit' },
      { title: 'The Pre-Mortem', href: '/start/idea-validation/pre-mortem' },
      { title: 'Go / Pivot / Kill', href: '/start/idea-validation/go-pivot-kill' },
    ],
  },
]

const moats = [
  {
    title: 'The 7-Day Solo Validation Sprint',
    description: 'Validate any idea in one week without building anything.',
    href: '/start/idea-validation/7-day-sprint',
    icon: Zap,
  },
  {
    title: 'The Validation Signal Decoder',
    description: 'Learn to read what your validation data is actually telling you.',
    href: '/start/idea-validation/validation-signal-decoder',
    icon: BarChart2,
  },
  {
    title: 'The Pre-Revenue Validation Scorecard',
    description: 'Score your idea across six dimensions before you spend a penny.',
    href: '/start/idea-validation/validation-scorecard',
    icon: CheckSquare,
  },
  {
    title: 'The Founder-Idea Fit Assessment',
    description: 'Is this the right idea for you specifically — not just in theory?',
    href: '/start/idea-validation/founder-idea-fit',
    icon: Users,
  },
  {
    title: 'The Community Validation Playbook',
    description: 'Use existing communities to validate demand without building your own audience first.',
    href: '/start/idea-validation/community-validation',
    icon: Users,
  },
]

export default function IdeaValidationPage() {
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
            Idea Validation
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mb-10">
            Most founders skip validation and build something nobody wants. This hub covers every method — from desktop research to live market tests — so you know before you build.
          </p>

          {/* Flagship CTA */}
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl p-8 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold uppercase tracking-wide mb-4">
              <Zap className="w-3 h-3" />
              Start here
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">
              {flagship.title}
            </h2>
            <p className="text-orange-100 mb-6">
              {flagship.description}
            </p>
            <Link
              href={flagship.href}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-orange-500 font-semibold text-sm hover:shadow-lg transition-shadow"
            >
              Start the sprint
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stages */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              The four stages of validation
            </h2>
            <p className="text-gray-500 max-w-2xl">
              Work through the stages in order. Each stage answers questions the previous one cannot.
            </p>
          </div>

          <div className="space-y-8">
            {stages.map((stage) => {
              const Icon = stage.icon
              return (
                <div
                  key={stage.number}
                  className="bg-white rounded-xl border border-gray-100 p-6 md:p-8 hover:shadow-md transition"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">

                    {/* Stage header */}
                    <div className="md:w-72 shrink-0">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${stage.colour} mb-4`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
                        Stage {stage.number}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {stage.title}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {stage.subtitle}
                      </p>
                    </div>

                    {/* Articles */}
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {stage.articles.map((article) => (
                        <Link
                          key={article.href}
                          href={article.href}
                          className="group flex items-center justify-between gap-3 bg-gray-50 hover:bg-orange-50 rounded-lg px-4 py-3 transition-colors"
                        >
                          <span className="text-sm font-medium text-gray-700 group-hover:text-orange-600 transition-colors">
                            {article.title}
                          </span>
                          <div className="flex items-center gap-2 shrink-0">
                            {'isNew' in article && article.isNew && (
                              <span className="px-2 py-0.5 rounded-full bg-orange-100 text-orange-600 text-xs font-semibold">
                                New
                              </span>
                            )}
                            <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-orange-500 transition-colors" />
                          </div>
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

      {/* Moats */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Tools and frameworks
            </h2>
            <p className="text-gray-500">
              Structured tools you can use immediately — no signup required.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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

