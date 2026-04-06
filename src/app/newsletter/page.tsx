import type { Metadata } from 'next'
import { Mail, CheckCircle, Zap, BookOpen, TrendingUp } from 'lucide-react'
import EmailSignupForm from '@/components/EmailSignupForm'

export const metadata: Metadata = {
  title: 'Newsletter — OneFoundr',
  description:
    'Practical guides for solo founders, delivered weekly. No fluff, no spam — just the stuff that actually moves the needle.',
}

const benefits = [
  {
    icon: Zap,
    gradient: 'from-orange-500 to-amber-500',
    title: 'One actionable idea every week',
    description: 'Not a content dump. One focused insight you can apply immediately.',
  },
  {
    icon: BookOpen,
    gradient: 'from-teal-700 to-emerald-500',
    title: 'Deep dives on what matters',
    description: 'Pricing, positioning, client acquisition, mindset — the real stuff.',
  },
  {
    icon: TrendingUp,
    gradient: 'from-amber-500 to-orange-600',
    title: 'Real examples with real numbers',
    description: 'No vague advice. Specific tactics with specific results.',
  },
]

const included = [
  'Weekly solo founder guides',
  'Frameworks you can use immediately',
  'Real examples from real businesses',
  'Early access to new content',
  'No sponsored content ever',
  'Unsubscribe any time — one click',
]

export default function NewsletterPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#1A1A1A] pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 opacity-10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-br from-teal-600 to-emerald-500 opacity-10 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mx-auto mb-8">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Build smarter.{' '}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                Every week.
              </span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-10">
              Practical guides for solo founders. No fluff, no spam. 
              Just the stuff that actually moves the needle — 
              straight to your inbox every week.
            </p>
            <div className="max-w-md mx-auto">
              <EmailSignupForm
                variant="stacked"
                buttonText="Join Free"
                placeholder="your@email.com"
                successMessage="You are in. First issue lands soon."
              />
            </div>
            <p className="text-gray-500 text-sm mt-4">
              Free. No spam. Unsubscribe any time.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What you get every week
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit) => {
              const Icon = benefit.icon
              return (
                <div
                  key={benefit.title}
                  className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-shadow text-center"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* What is included */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-10">
              Everything included. Free.
            </h2>
            <div className="flex flex-col gap-4">
              {included.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 bg-white rounded-xl border border-gray-100 px-6 py-4"
                >
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Second signup */}
            <div className="mt-12">
              <EmailSignupForm
                variant="stacked"
                buttonText="Join Free"
                placeholder="your@email.com"
                successMessage="You are in. First issue lands soon."
              />
              <p className="text-gray-400 text-sm mt-4">
                Join free. No spam. Unsubscribe any time.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
