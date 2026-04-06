import type { Metadata } from 'next'
import FoundationPlaceholder from '@/components/FoundationPlaceholder'

export const metadata: Metadata = {
  title: 'Comparison & Social Media — OneFoundr',
  description: 'Why comparison hits differently for solopreneurs — and how to use social media without being consumed by it.',
}

export default function Page() {
  return (
    <FoundationPlaceholder
      title="Comparison & Social Media"
      description="Why comparison hits differently for solopreneurs. The highlight reel problem. Comparison for local and physical businesses — it is not just Instagram, it is Google reviews and local reputation too. Practical limits and how to use social media without being consumed by it."
      track="Track 01 — Inner Stability"
      trackLabel="Track 01 — Inner Stability"
    />
  )
}
