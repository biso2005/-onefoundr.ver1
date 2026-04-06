import type { Metadata } from 'next'
import NichePlaceholder from '@/components/NichePlaceholder'

export const metadata: Metadata = {
  title: 'Niching for SaaS & Software — OneFoundr',
  description: 'How to niche a SaaS or software product — finding the underserved market and technical insight that gives you a defensible position from day one.',
}

export default function Page() {
  return (
    <NichePlaceholder
      title="Niching for SaaS & Software"
      description="How to niche a SaaS or software product. Finding the underserved market and technical insight that gives you a defensible position from day one instead of competing on features."
      section="Niche by Business Type"
      sectionLabel="SaaS & Software"
    />
  )
}

