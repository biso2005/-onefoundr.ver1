import type { Metadata } from 'next'
import { Package } from 'lucide-react'
import EmailSignupForm from '@/components/EmailSignupForm'
import CategoryHub from '@/components/CategoryHub'
import { pillarMeta, gatewayHub } from '@/data/offer'

export const metadata: Metadata = {
  title: `${pillarMeta.title} — ${gatewayHub.title}`,
  description: gatewayHub.description,
}

export default function OfferBuilderPage() {
  return (
    <CategoryHub
      title={gatewayHub.title}
      tagline={pillarMeta.tagline}
      description={gatewayHub.description}
      icon={Package}
      gradient={pillarMeta.gradient}
      intro="A lightweight Offer Builder to help you define outcomes, scope, and price quickly."
      spokes={[]}
    >
      <section className="mt-8">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">Offer Builder Workbook (free)</h2>
          <p className="text-gray-600 mb-6">Fill in the template, validate with pre-sales, and iterate.</p>

          <div className="bg-white p-6 rounded-lg border border-gray-100">
            <EmailSignupForm variant="stacked" leadMagnetFile="/downloads/offer-builder.pdf" />
          </div>
        </div>
      </section>
    </CategoryHub>
  )
}
