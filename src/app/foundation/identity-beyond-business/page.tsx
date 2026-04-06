import type { Metadata } from 'next'
import FoundationPlaceholder from '@/components/FoundationPlaceholder'

export const metadata: Metadata = {
  title: 'Identity Beyond Business — OneFoundr',
  description: 'When the business becomes your entire identity, a bad month does not just hurt your income — it threatens who you are.',
}

export default function Page() {
  return (
    <FoundationPlaceholder
      title="Identity Beyond Business"
      description="When the business becomes your entire identity, a bad month does not just hurt your income — it threatens who you are. Here is how to build an identity that can survive business failure."
      track="Track 01 — Inner Stability"
      trackLabel="Track 01 — Inner Stability"
    />
  )
}
