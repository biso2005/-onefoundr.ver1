import type { Metadata } from 'next'
import NichePlaceholder from '@/components/NichePlaceholder'

export const metadata: Metadata = {
  title: 'Niching for Community — OneFoundr',
  description: 'How to niche a community business — finding the identity, shared experience, and unmet need that makes people pay to belong.',
}

export default function Page() {
  return (
    <NichePlaceholder
      title="Niching for Community"
      description="How to niche a community business. Finding the identity, shared experience, and unmet need that makes people pay to belong — and keep paying month after month."
      section="Niche by Business Type"
      sectionLabel="Community"
    />
  )
}
