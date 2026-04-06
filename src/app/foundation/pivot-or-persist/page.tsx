import type { Metadata } from 'next'
import FoundationPlaceholder from '@/components/FoundationPlaceholder'

export const metadata: Metadata = {
  title: 'Pivot or Persist — OneFoundr',
  description: 'The hardest decision in solo business. The difference between giving up too early and holding on too long.',
}

export default function Page() {
  return (
    <FoundationPlaceholder
      title="Pivot or Persist"
      description="The hardest decision in solo business. The difference between giving up too early and holding on too long — and a framework for making this decision alone, without a board or advisor."
      track="Track 03 — Resilience"
      trackLabel="Track 03 — Resilience"
    />
  )
}
