import type { Metadata } from 'next'
import ValidationPlaceholder from '@/components/ValidationPlaceholder'

export const metadata: Metadata = {
  title: 'Customer Conversations — OneFoundr',
  description: 'How to run customer discovery interviews that give you honest, useful answers instead of polite ones.',
}

export default function Page() {
  return (
    <ValidationPlaceholder
      title="Customer Conversations"
      description="How to run customer discovery interviews that give you honest, useful answers — not the polite responses people give when they do not want to hurt your feelings."
      stage="Stage 02 — Human Validation"
      stageLabel="Stage 02 — Human Validation"
    />
  )
}
