import type { Metadata } from 'next'
import FoundationPlaceholder from '@/components/FoundationPlaceholder'

export const metadata: Metadata = {
  title: 'Imposter Syndrome — OneFoundr',
  description: 'Not the Instagram version. What imposter syndrome actually is, why solopreneurs experience it more than employees, and practical tools that go beyond "everyone feels this way."',
}

export default function Page() {
  return (
    <FoundationPlaceholder
      title="Imposter Syndrome"
      description="Not the Instagram version. What imposter syndrome actually is, why solopreneurs experience it more than employees, the specific triggers for solo founders, and practical tools that go beyond telling you that everyone feels this way."
      track="Track 01 — Inner Stability"
      trackLabel="Track 01 — Inner Stability"
    />
  )
}
