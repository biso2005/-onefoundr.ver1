import type { Metadata } from 'next'
import { Mail, MessageSquare, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact — OneFoundr',
  description: 'Get in touch with the OneFoundr team.',
}

const reasons = [
  {
    icon: MessageSquare,
    gradient: 'from-orange-500 to-amber-500',
    title: 'Content suggestions',
    description: 'Got a topic you want us to cover? A question that keeps coming up? Tell us.',
  },
  {
    icon: Mail,
    gradient: 'from-teal-700 to-emerald-500',
    title: 'Partnerships',
    description: 'Want to collaborate, guest write, or explore a partnership? We are open to it.',
  },
  {
    icon: Clock,
    gradient: 'from-amber-500 to-orange-600',
    title: 'Everything else',
    description: 'Bug reports, feedback, or just to say hello. We read everything.',
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#1A1A1A] pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 opacity-10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-br from-teal-600 to-emerald-500 opacity-10 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Get in{' '}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                touch.
              </span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              We are a small operation. Real people read every message 
              and we respond to everything that deserves a reply.
            </p>
          </div>
        </div>
      </section>

      {/* Reasons + Form */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Left: Reasons */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Good reasons to reach out
              </h2>
              <div className="flex flex-col gap-6">
                {reasons.map((reason) => {
                  const Icon = reason.icon
                  return (
                    <div key={reason.title} className="flex gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${reason.gradient} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">
                          {reason.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="mt-10 bg-gray-50 rounded-2xl p-6">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Response time
                </p>
                <p className="text-gray-700">
                  We aim to reply within 2 business days. 
                  For urgent matters, mention it in your subject line.
                </p>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send us a message
              </h2>
              <form className="flex flex-col gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Alex Smith"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-900 text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-900 text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="What is this about?"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-900 text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us what is on your mind..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-900 text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-4 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  Send message
                  <Mail className="w-4 h-4" />
                </button>
                <p className="text-xs text-gray-400 text-center">
                  We read every message. Spam is not welcome.
                </p>
              </form>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
