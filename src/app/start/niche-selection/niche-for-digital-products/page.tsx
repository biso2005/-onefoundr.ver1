import type { Metadata } from 'next'
import NichePlaceholder from '@/components/NichePlaceholder'

export const metadata: Metadata = {
  title: 'Niching for Digital Products — OneFoundr',
  description: 'How to niche a digital product business — matching your solution to a specific user in a specific situation so it sells without heavy marketing.',
}

export default function Page() {
  return (
    <NichePlaceholder
      title="Niching for Digital Products"
      description="How to niche a digital product business. Matching your solution to a specific user in a specific situation so it sells without heavy marketing effort."
      section="Niche by Business Type"
      sectionLabel="Digital Products"
    />
  )
}
