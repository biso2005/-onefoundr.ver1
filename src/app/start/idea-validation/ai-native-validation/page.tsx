import type { Metadata } from 'next'
import ValidationPlaceholder from '@/components/ValidationPlaceholder'

export const metadata: Metadata = {
  title: 'AI-Native Validation — OneFoundr',
  description: 'How to use AI tools to run faster, cheaper validation research before you talk to a single customer.',
}

export default function Page() {
  return (
    <ValidationPlaceholder
      title="AI-Native Validation"
      description="How to use AI tools to simulate customer research, stress-test your assumptions, and find demand signals faster than traditional methods."
      stage="Stage 01 — Desktop Validation"
      stageLabel="Stage 01 — Desktop Validation"
    />
  )
}
