import type { Metadata } from 'next'
import ValidationPlaceholder from '@/components/ValidationPlaceholder'

export const metadata: Metadata = {
  title: 'Community Validation — OneFoundr',
  description: 'How to use existing online communities to validate demand without building your own audience first.',
}

export default function Page() {
  return (
    <ValidationPlaceholder
      title="Community Validation"
      description="How to use existing online communities — Reddit, Facebook Groups, Slack groups, Discord servers — to validate demand without building your own audience first."
      stage="Stage 02 — Human Validation"
      stageLabel="Stage 02 — Human Validation"
    />
  )
}
