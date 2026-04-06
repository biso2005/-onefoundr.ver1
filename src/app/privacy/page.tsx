import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy — OneFoundr',
  description: 'How OneFoundr collects, uses, and protects your data.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="bg-[#1A1A1A] pt-16 pb-16 md:pt-20 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-400 text-lg">
              Last updated: January 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl flex flex-col gap-10">

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                What we collect
              </h2>
              <p className="text-gray-600 leading-relaxed">
                When you sign up for the OneFoundr newsletter, we collect 
                your email address. That is it. We do not collect names, 
                phone numbers, or any other personal data unless you 
                voluntarily provide them via our contact form.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                How we use your data
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Your email address is used solely to send you the 
                OneFoundr newsletter and occasional updates about new 
                content. We do not sell, rent, or share your data with 
                third parties for marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Cookies
              </h2>
              <p className="text-gray-600 leading-relaxed">
                OneFoundr uses minimal cookies necessary for the site to 
                function. We do not use advertising cookies or tracking 
                pixels. We may use analytics tools to understand how 
                visitors use the site — this data is anonymised and 
                not linked to individuals.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Your rights
              </h2>
              <p className="text-gray-600 leading-relaxed">
                You can unsubscribe from the newsletter at any time using 
                the unsubscribe link in any email. To request deletion of 
                your data or for any privacy-related questions, contact us 
                via the{' '}
                <Link
                  href="/contact"
                  className="text-orange-500 hover:text-orange-600 underline"
                >
                  contact page
                </Link>
                .
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Third-party services
              </h2>
              <p className="text-gray-600 leading-relaxed">
                OneFoundr is hosted on Vercel. Email is managed through 
                a third-party email service provider. These services have 
                their own privacy policies and data handling practices.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Contact
              </h2>
              <p className="text-gray-600 leading-relaxed">
                For any questions about this privacy policy, please use 
                our{' '}
                <Link
                  href="/contact"
                  className="text-orange-500 hover:text-orange-600 underline"
                >
                  contact page
                </Link>
                .
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
