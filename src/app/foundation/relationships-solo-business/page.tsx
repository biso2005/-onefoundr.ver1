import type { Metadata } from 'next'
import FoundationPlaceholder from '@/components/FoundationPlaceholder'

export const metadata: Metadata = {
  title: 'Relationships & Solo Business — OneFoundr',
  description: 'What solo business does to your relationship — the honest version.',
}

export default function Page() {
  return (
    <FoundationPlaceholder
      title="Relationships & Solo Business"
      description="What solo business does to your relationship — the honest version. The irregular income conversation, the long hours, the emotional volatility, and how to protect what matters when the business is hard."
      track="Track 03 — Resilience"
      trackLabel="Track 03 — Resilience"
    />
  )
}
