import type { Metadata } from 'next'
import ValidationPlaceholder from '@/components/ValidationPlaceholder'

export const metadata: Metadata = {
  title: 'Problem Discovery — OneFoundr',
  description: 'How to identify the real problem your customers have — not the one you assumed they had.',
}

export default function Page() {
  return (
    <ValidationPlaceholder
      title="Problem Discovery"
      description="How to identify the real problem your customers have — not the one you assumed they had. The gap between these two things kills most new businesses."
      stage="Stage 02 — Human Validation"
      stageLabel="Stage 02 — Human Validation"
    />
  )
}
