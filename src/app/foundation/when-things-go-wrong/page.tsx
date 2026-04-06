import type { Metadata } from 'next'
import FoundationPlaceholder from '@/components/FoundationPlaceholder'

export const metadata: Metadata = {
  title: 'When Things Go Wrong — OneFoundr',
  description: 'The honest recovery guide. Lost client, failed launch, revenue collapse, public mistake.',
}

export default function Page() {
  return (
    <FoundationPlaceholder
      title="When Things Go Wrong"
      description="The honest recovery guide. Lost client, failed launch, revenue collapse, public mistake. What to do in the first 48 hours, how to get back to work, and what failure actually teaches."
      track="Track 03 — Resilience"
      trackLabel="Track 03 — Resilience"
    />
  )
}
