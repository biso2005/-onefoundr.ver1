import type { Metadata } from 'next'
import FoundationPlaceholder from '@/components/FoundationPlaceholder'

export const metadata: Metadata = {
  title: 'Building Your Own Structure — OneFoundr',
  description: 'How to design a daily rhythm that fits solo business without copying corporate life or falling for productivity theatre.',
}

export default function Page() {
  return (
    <FoundationPlaceholder
      title="Building Your Own Structure"
      description="Why external structure matters more than people think — and how to design a daily rhythm that fits solo business without copying corporate life or falling for 5am cold shower nonsense."
      track="Track 02 — Daily Functioning"
      trackLabel="Track 02 — Daily Functioning"
    />
  )
}
