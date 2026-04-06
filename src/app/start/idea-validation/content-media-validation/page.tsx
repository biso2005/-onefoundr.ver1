import type { Metadata } from 'next'
import ValidationPlaceholder from '@/components/ValidationPlaceholder'

export const metadata: Metadata = {
  title: 'Content & Media Validation — OneFoundr',
  description: 'How to validate a content or media business idea before you commit to years of publishing with no guarantee of an audience.',
}

export default function Page() {
  return (
    <ValidationPlaceholder
      title="Content & Media Validation"
      description="How to validate a content or media business idea before you commit to years of publishing. Most content businesses fail not because of poor content — but because nobody wanted that content in the first place."
      stage="Stage 03 — Market Validation"
      stageLabel="Stage 03 — Market Validation"
    />
  )
}
