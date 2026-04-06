import type { Metadata } from 'next'
import FoundationPlaceholder from '@/components/FoundationPlaceholder'

export const metadata: Metadata = {
  title: 'The Stage You Are In — OneFoundr',
  description: 'Launch. The Messy Middle. Isolation at the Top. Three research-identified stages of solo business.',
}

export default function Page() {
  return (
    <FoundationPlaceholder
      title="The Stage You Are In"
      description="Launch. The Messy Middle. Isolation at the Top. Three research-identified stages of solo business — named, described, and validated. You are not broken. You are at a stage."
      track="Track 03 — Resilience"
      trackLabel="Track 03 — Resilience"
    />
  )
}
