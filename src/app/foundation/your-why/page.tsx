import type { Metadata } from 'next'
import FoundationPlaceholder from '@/components/FoundationPlaceholder'

export const metadata: Metadata = {
  title: 'Your Why — OneFoundr',
  description: 'Why your why matters more when things get hard — and how to find it, reconnect with it, or rebuild it after a bad period.',
}

export default function Page() {
  return (
    <FoundationPlaceholder
      title="Your Why"
      description="Why your why matters more when things get hard — and how to find it, reconnect with it, or rebuild it from scratch after a period that made you question everything."
      track="Track 01 — Inner Stability"
      trackLabel="Track 01 — Inner Stability"
    />
  )
}
