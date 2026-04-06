import type { Metadata } from 'next'
import NichePlaceholder from '@/components/NichePlaceholder'

export const metadata: Metadata = {
  title: 'The Emergent Niche — OneFoundr',
  description: 'How to start broad, take on early clients, and let the patterns in your work tell you where your niche actually is.',
}

export default function Page() {
  return (
    <NichePlaceholder
      title="The Emergent Niche"
      description="How to start broad, take on early clients, and let the patterns in your work tell you where your niche actually is. Not every founder should choose a niche before they start."
      section="Path 02 — The Emergent Niche"
      sectionLabel="Path 02 — The Emergent Niche"
    />
  )
}
