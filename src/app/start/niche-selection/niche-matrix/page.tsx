import type { Metadata } from 'next'
import NichePlaceholder from '@/components/NichePlaceholder'

export const metadata: Metadata = {
  title: 'The Niche Matrix — OneFoundr',
  description: 'A visual framework for mapping your skills, audiences, and problems to find the niche with the strongest overlap.',
}

export default function Page() {
  return (
    <NichePlaceholder
      title="The Niche Matrix"
      description="A visual framework for mapping your skills, audiences, and problems to find the niche with the strongest overlap — and the clearest path to positioning."
      section="Path 01 — The Deliberate Niche"
      sectionLabel="Path 01 — The Deliberate Niche"
    />
  )
}
