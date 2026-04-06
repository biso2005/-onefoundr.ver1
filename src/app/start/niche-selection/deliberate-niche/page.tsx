import type { Metadata } from 'next'
import NichePlaceholder from '@/components/NichePlaceholder'

export const metadata: Metadata = {
  title: 'The Deliberate Niche — OneFoundr',
  description: 'How to choose your niche with intention before you start — so you build the right thing for the right people from day one.',
}

export default function Page() {
  return (
    <NichePlaceholder
      title="The Deliberate Niche"
      description="How to choose your niche with intention before you start — so you build the right thing for the right people from day one instead of pivoting six months in."
      section="Path 01 — The Deliberate Niche"
      sectionLabel="Path 01 — The Deliberate Niche"
    />
  )
}
