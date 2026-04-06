import type { Metadata } from 'next'
import FoundationPlaceholder from '@/components/FoundationPlaceholder'

export const metadata: Metadata = {
  title: 'The Weight of Deciding Alone — OneFoundr',
  description: 'Decision fatigue is about volume. Anchor Syndrome is about weight. The cumulative psychological burden of being solely responsible for every decision, every risk, and every consequence.',
}

export default function Page() {
  return (
    <FoundationPlaceholder
      title="The Weight of Deciding Alone"
      description="Decision fatigue is about volume. Anchor Syndrome is about weight — the cumulative psychological burden of being solely responsible for every decision, every risk, and every consequence. Here is how to reduce both."
      track="Track 02 — Daily Functioning"
      trackLabel="Track 02 — Daily Functioning"
    />
  )
}
