import type { Metadata } from 'next'
import NichePlaceholder from '@/components/NichePlaceholder'

export const metadata: Metadata = {
  title: 'Niching for Content & Media — OneFoundr',
  description: 'How to niche a content or media business — finding the topic, angle, and audience combination that builds a loyal following instead of a generic one.',
}

export default function Page() {
  return (
    <NichePlaceholder
      title="Niching for Content & Media"
      description="How to niche a content or media business. Finding the topic, angle, and audience combination that builds a loyal following instead of a generic one that never converts."
      section="Niche by Business Type"
      sectionLabel="Content & Media"
    />
  )
}
