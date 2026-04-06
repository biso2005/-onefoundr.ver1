import type { Metadata } from 'next'
import FoundationPlaceholder from '@/components/FoundationPlaceholder'

export const metadata: Metadata = {
  title: 'Protecting Your Focus — OneFoundr',
  description: 'How to keep your best cognitive hours from being consumed by low-value tasks and interruptions.',
}

export default function Page() {
  return (
    <FoundationPlaceholder
      title="Protecting Your Focus"
      description="Not productivity optimisation. Protection. How to keep your best cognitive hours from being consumed by low-value tasks and interruptions — and what to do when you cannot focus at all."
      track="Track 02 — Daily Functioning"
      trackLabel="Track 02 — Daily Functioning"
    />
  )
}
