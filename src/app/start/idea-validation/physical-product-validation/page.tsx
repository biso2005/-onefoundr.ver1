import type { Metadata } from 'next'
import ValidationPlaceholder from '@/components/ValidationPlaceholder'

export const metadata: Metadata = {
  title: 'Physical Product Validation — OneFoundr',
  description: 'How to validate a physical product idea before committing to inventory, manufacturing, or production costs.',
}

export default function Page() {
  return (
    <ValidationPlaceholder
      title="Physical Product Validation"
      description="How to validate a physical product idea before committing to inventory, manufacturing, or production costs. The graveyard of failed product businesses is full of people who skipped this step."
      stage="Stage 03 — Market Validation"
      stageLabel="Stage 03 — Market Validation"
    />
  )
}
