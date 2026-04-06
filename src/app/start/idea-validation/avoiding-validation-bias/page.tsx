import type { Metadata } from 'next'
import ValidationPlaceholder from '@/components/ValidationPlaceholder'

export const metadata: Metadata = {
  title: 'Avoiding Validation Bias — OneFoundr',
  description: 'How to stop fooling yourself during the validation process — and spot when your data is telling you what you want to hear.',
}

export default function Page() {
  return (
    <ValidationPlaceholder
      title="Avoiding Validation Bias"
      description="How to stop fooling yourself during the validation process. Confirmation bias is the biggest threat to honest validation — and most founders never see it coming."
      stage="Stage 02 — Human Validation"
      stageLabel="Stage 02 — Human Validation"
    />
  )
}
