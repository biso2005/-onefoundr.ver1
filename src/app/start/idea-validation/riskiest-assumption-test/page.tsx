import type { Metadata } from 'next'
import ValidationPlaceholder from '@/components/ValidationPlaceholder'

export const metadata: Metadata = {
  title: 'The Riskiest Assumption Test — OneFoundr',
  description: 'How to identify the single assumption that would kill your business if it turned out to be wrong — and test it first.',
}

export default function Page() {
  return (
    <ValidationPlaceholder
      title="The Riskiest Assumption Test"
      description="How to identify the single assumption that would kill your business if it turned out to be wrong — and design a cheap, fast experiment to test it before anything else."
      stage="Stage 03 — Market Validation"
      stageLabel="Stage 03 — Market Validation"
    />
  )
}
