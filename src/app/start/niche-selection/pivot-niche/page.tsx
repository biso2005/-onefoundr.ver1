import type { Metadata } from 'next'
import NichePlaceholder from '@/components/NichePlaceholder'

export const metadata: Metadata = {
  title: 'The Pivot Niche — OneFoundr',
  description: 'How to move from a niche that is not working to one that is — without losing your current clients or starting from zero.',
}

export default function Page() {
  return (
    <NichePlaceholder
      title="The Pivot Niche"
      description="How to move from a niche that is not working to one that is — without burning your reputation, losing your current clients, or starting from scratch."
      section="Path 03 — The Pivot Niche"
      sectionLabel="Path 03 — The Pivot Niche"
    />
  )
}
