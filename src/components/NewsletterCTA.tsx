import EmailSignupForm from './EmailSignupForm'
import { Mail } from 'lucide-react'

interface NewsletterCTAProps {
  title?: string
  description?: string
  variant?: 'default' | 'minimal'
}

export default function NewsletterCTA({
  title = 'Build smarter. Every week.',
  description = 'Practical guides for solo founders. No fluff, no spam. Just the stuff that actually moves the needle.',
  variant = 'default',
}: NewsletterCTAProps) {
  if (variant === 'minimal') {
    return (
      <section className="py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <p className="font-bold text-gray-900 text-lg">{title}</p>
              <p className="text-gray-600 text-sm mt-1">{description}</p>
            </div>
            <div className="w-full md:w-auto md:min-w-96">
              <EmailSignupForm variant="inline" />
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 md:py-20 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mx-auto mb-6">
            <Mail className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            {description}
          </p>
          <div className="max-w-md mx-auto">
            <EmailSignupForm
              variant="stacked"
              buttonText="Join Free"
              placeholder="your@email.com"
            />
          </div>
          <p className="text-gray-500 text-sm mt-4">
            Free. No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  )
}
