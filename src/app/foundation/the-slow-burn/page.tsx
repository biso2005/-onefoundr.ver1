import type { Metadata } from 'next'
import FoundationPlaceholder from '@/components/FoundationPlaceholder'

export const metadata: Metadata = {
  title: 'The Slow Burn — OneFoundr',
  description: 'Burnout for solopreneurs is not the dramatic collapse. It is the slow erosion.',
}

export default function Page() {
  return (
    <FoundationPlaceholder
      title="The Slow Burn"
      description="Burnout for solopreneurs is not the dramatic collapse. It is the slow erosion. This hub leads with recognition and prevention — because by the time you need recovery, it is already too late."
      track="Track 03 — Resilience"
      trackLabel="Track 03 — Resilience"
    />
  )
}
