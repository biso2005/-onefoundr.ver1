import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Use — OneFoundr',
  description: 'The terms and conditions for using OneFoundr.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="bg-[#1A1A1A] pt-16 pb-16 md:pt-20 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Terms of Use
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
                Using this site
              </h2>
              <p className="text-gray-600 leading-relaxed">
                OneFoundr provides free educational content for solo founders 
                and entrepreneurs. By using this site, you agree to use it 
                for lawful purposes only. You must not use this site in any 
                way that breaches applicable laws or regulations.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Content and intellectual property
              </h2>
              <p className="text-gray-600 leading-relaxed">
                All content on OneFoundr — including articles, guides, 
                frameworks, and graphics — is the intellectual property 
                of OneFoundr unless otherwise stated. You may share and 
                reference our content with attribution, but you may not 
                reproduce it in full without written permission.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                No financial or legal advice
              </h2>
              <p className="text-gray-600 leading-relaxed">
                The content on OneFoundr is for educational and 
                informational purposes only. Nothing on this site 
                constitutes financial, legal, or professional advice. 
                Always consult qualified professionals before making 
                business, legal, or financial decisions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Disclaimer of warranties
              </h2>
              <p className="text-gray-600 leading-relaxed">
                OneFoundr content is provided as-is without any warranty 
                of accuracy, completeness, or fitness for a particular 
                purpose. We do our best to keep content accurate and 
                up to date, but we cannot guarantee it.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                External links
              </h2>
              <p className="text-gray-600 leading-relaxed">
                OneFoundr may link to external websites. We are not 
                responsible for the content, accuracy, or practices of 
                any third-party sites. Links do not constitute endorsement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Changes to these terms
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We may update these terms from time to time. Continued 
                use of the site after changes constitutes acceptance of 
                the updated terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Contact
              </h2>
              <p className="text-gray-600 leading-relaxed">
                For any questions about these terms, please use our{' '}
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
