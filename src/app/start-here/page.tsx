import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Search,
  BarChart3,
  Target,
  DollarSign,
  Scale,
  Package,
  Users,
  ArrowRight,
  CheckCircle,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Start Here — Your Solo Founder Roadmap',
  description:
    'The exact steps to go from idea to first paying client. No choices, no overwhelm — just the right moves in the right order.',
}

const steps = [
  {
    number: 1,
    title: 'Validate Your Idea',
    description:
      'Before you build anything, make sure people actually want it. Most founders skip this and waste months. Do not be most founders.',
    action: 'Run your validation',
    href: '/start/idea-validation',
    icon: Search,
    gradient: 'from-orange-500 to-amber-500',
    time: '1 week',
    outcome: 'You know if your idea has legs — before spending a penny.',
  },
  {
    number: 2,
    title: 'Choose Your Business Model',
    description:
      'How will you make money? Services, products, subscriptions? Each has different trade-offs. Pick the right one for your situation.',
    action: 'Compare models',
    href: '/start/business-models',
    icon: BarChart3,
    gradient: 'from-teal-700 to-emerald-500',
    time: '2-3 days',
    outcome: 'You have a clear monetisation model that fits your life.',
  },
  {
    number: 3,
    title: 'Pick Your Niche',
    description:
      'The riches are in the niches. Stop trying to serve everyone. Get specific about who you help, what you help them with, and why you.',
    action: 'Find your niche',
    href: '/start/niche-selection',
    icon: Target,
    gradient: 'from-amber-500 to-orange-600',
    time: '3-5 days',
    outcome: 'You can describe exactly who you serve in one sentence.',
  },
  {
    number: 4,
    title: 'Calculate Your Costs',
    description:
      'Know your numbers before you need them. What does it cost to start? What do you need to earn to survive? What is your break-even?',
    action: 'Run the numbers',
    href: '/start/startup-costs',
    icon: DollarSign,
    gradient: 'from-teal-600 to-teal-800',
    time: '1 day',
    outcome: 'You know exactly what you need to earn to make this work.',
  },
  {
    number: 5,
    title: 'Sort Your Legal Setup',
    description:
      'Not glamorous, but essential. Get your legal structure right from day one. It is much harder to fix later.',
    action: 'Get set up legally',
    href: '/start/legal-setup',
    icon: Scale,
    gradient: 'from-orange-400 to-rose-500',
    time: '1-2 days',
    outcome: 'Your business is properly structured and protected from day one.',
  },
  {
    number: 6,
    title: 'Build Your Offer',
    description:
      'Package what you do into something clear, compelling, and easy to say yes to. Your offer is the engine of your business.',
    action: 'Build your offer',
    href: '/offer',
    icon: Package,
    gradient: 'from-amber-400 to-teal-600',
    time: '1 week',
    outcome: 'You have a clear offer with a price that you can start selling.',
  },
  {
    number: 7,
    title: 'Get Your First Client',
    description:
      'Everything above means nothing without a paying client. This is where it gets real. Follow the system and land your first one.',
    action: 'Get clients',
    href: '/sales',
    icon: Users,
    gradient: 'from-teal-600 to-emerald-400',
    time: '2-4 weeks',
    outcome: 'You have a paying client and proof that your business works.',
  },
]

export default function StartHerePage() {
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
            <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
              <span>7 steps. Zero fluff. One destination.</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Your solo founder{' '}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                roadmap.
              </span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
              No choices, no overwhelm. Just the exact steps — in the right 
              order — to go from idea to first paying client.
            </p>
          </div>
        </div>
      </section>

      {/* Progress Overview */}
      <section className="py-10 border-b border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider mr-2">
              Your path:
            </span>
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center gap-2">
                <Link
                  href={`#step-${step.number}`}
                  className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-orange-500 transition-colors"
                >
                  <span className="w-6 h-6 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-xs font-bold text-gray-600">
                    {step.number}
                  </span>
                  <span className="hidden sm:inline">{step.title}</span>
                </Link>
                {index < steps.length - 1 && (
                  <ArrowRight className="w-3 h-3 text-gray-300 flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8">
            {steps.map((step) => {
              const Icon = step.icon
              return (
                <div
                  key={step.number}
                  id={`step-${step.number}`}
                  className="group bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-lg hover:border-gray-200 transition-all duration-200"
                >
                  <div className="flex flex-col md:flex-row gap-6">

                    {/* Step number + icon */}
                    <div className="flex md:flex-col items-center md:items-center gap-4 md:gap-3 flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                        {step.number}
                      </div>
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      {/* Connector line - hidden on last item */}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h2 className="text-xl font-bold text-gray-900">
                          {step.title}
                        </h2>
                        <span className="text-xs font-semibold bg-gray-100 text-gray-500 px-3 py-1 rounded-full">
                          ~{step.time}
                        </span>
                      </div>

                      <p className="text-gray-600 leading-relaxed mb-4">
                        {step.description}
                      </p>

                      {/* Outcome */}
                      <div className="flex items-start gap-2 bg-orange-50 rounded-lg p-3 mb-5">
                        <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-orange-800 font-medium">
                          {step.outcome}
                        </p>
                      </div>

                      {/* CTA */}
                      <Link
                        href={step.href}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 rounded-lg font-semibold text-sm hover:shadow-lg hover:scale-105 transition-all duration-200"
                      >
                        {step.action}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>

                  </div>
                </div>
              )
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center bg-[#1A1A1A] rounded-2xl p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to go deeper?
            </h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              Each step above has a full guide behind it. Pick where you are 
              right now and dive in.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/start"
                className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
              >
                Explore The Spark
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/newsletter"
                className="w-full sm:w-auto border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-xl font-semibold hover:border-orange-500 hover:text-orange-400 transition-all duration-200 flex items-center justify-center"
              >
                Get weekly guides
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}
