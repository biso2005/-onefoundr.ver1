import type { Metadata } from 'next'
import NichePlaceholder from '@/components/NichePlaceholder'

export const metadata: Metadata = {
  title: 'Niching for Physical Products — OneFoundr',
  description: 'How to niche a physical product business — finding the right audience, aesthetic, and lifestyle angle that makes your product the obvious choice.',
}

export default function Page() {
  return (
    <NichePlaceholder
      title="Niching for Physical Products"
      description="How to niche a physical product business. Finding the right audience, aesthetic, and lifestyle angle that makes your product the obvious choice in a crowded market."
      section="Niche by Business Type"
      sectionLabel="Physical Products"
    />
  )
}
