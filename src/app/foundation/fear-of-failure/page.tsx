import type { Metadata } from 'next'
import FoundationPlaceholder from '@/components/FoundationPlaceholder'

export const metadata: Metadata = {
  title: 'Fear of Failure — OneFoundr',
  description: 'The specific fears solopreneurs carry — financial, social, and identity-based. How fear shows up as procrastination. The difference between useful caution and paralysing fear.',
}

export default function Page() {
  return (
    <FoundationPlaceholder
      title="Fear of Failure"
      description="The specific fears solopreneurs carry — financial, social, and identity-based. How fear of failure shows up as procrastination. The difference between useful caution and paralysing fear. And how to reframe failure in a way that is honest, not toxic."
      track="Track 01 — Inner Stability"
      trackLabel="Track 01 — Inner Stability"
    />
  )
}
