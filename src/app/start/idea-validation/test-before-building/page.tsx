import type { Metadata } from 'next'
import ValidationPlaceholder from '@/components/ValidationPlaceholder'

export const metadata: Metadata = {
  title: 'Test Before Building — OneFoundr',
  description: 'How to put a real offer in front of real people before you build the thing — and what their response tells you.',
}

export default function Page() {
  return (
    <ValidationPlaceholder
      title="Test Before Building"
      description="How to put a real offer in front of real people before you build the thing. A waitlist, a landing page, or a manual version of the product tells you more than six months of building."
      stage="Stage 03 — Market Validation"
      stageLabel="Stage 03 — Market Validation"
    />
  )
}
