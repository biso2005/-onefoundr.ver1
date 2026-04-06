import type { Metadata } from 'next'
import NichePlaceholder from '@/components/NichePlaceholder'

export const metadata: Metadata = {
  title: 'The 5 Question Stress Test — OneFoundr',
  description: 'Five questions that expose the weaknesses in any niche before you commit to it.',
}

export default function Page() {
  return (
    <NichePlaceholder
      title="The 5 Question Stress Test"
      description="Five questions that expose the weaknesses in any niche before you commit to it. If your niche cannot answer all five, it needs more work before you build on top of it."
      section="Path 01 — The Deliberate Niche"
      sectionLabel="Path 01 — The Deliberate Niche"
    />
  )
}
