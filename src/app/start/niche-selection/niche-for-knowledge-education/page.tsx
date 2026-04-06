import type { Metadata } from 'next'
import NichePlaceholder from '@/components/NichePlaceholder'

export const metadata: Metadata = {
  title: 'Niching for Knowledge & Education — OneFoundr',
  description: 'How to niche a coaching, course, or consulting business — using expertise, transformation, and audience to build a position nobody else can claim.',
}

export default function Page() {
  return (
    <NichePlaceholder
      title="Niching for Knowledge & Education"
      description="How to niche a coaching, course, or consulting business. Using expertise, transformation, and audience specificity to build a position nobody else can claim."
      section="Niche by Business Type"
      sectionLabel="Knowledge & Education"
    />
  )
}
