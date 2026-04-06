import type { Metadata } from 'next'
import ValidationPlaceholder from '@/components/ValidationPlaceholder'

export const metadata: Metadata = {
  title: 'Competitor Research — OneFoundr',
  description: 'How to analyse your competitors to understand what the market already accepts and where the gaps are.',
}

export default function Page() {
  return (
    <ValidationPlaceholder
      title="Competitor Research"
      description="How to analyse your competitors to understand what the market already accepts, what people are paying, and where the real gaps are."
      stage="Stage 01 — Desktop Validation"
      stageLabel="Stage 01 — Desktop Validation"
    />
  )
}
