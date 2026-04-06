import type { Metadata } from 'next'
import ValidationPlaceholder from '@/components/ValidationPlaceholder'

export const metadata: Metadata = {
  title: 'The Pre-Revenue Validation Scorecard — OneFoundr',
  description: 'Score your business idea across six dimensions before you spend a penny building it.',
}

export default function Page() {
  return (
    <ValidationPlaceholder
      title="The Pre-Revenue Validation Scorecard"
      description="Score your business idea across six dimensions — demand, competition, pricing, channel, founder fit, and timing — before you spend a penny building it."
      stage="Stage 04 — Decision"
      stageLabel="Stage 04 — Decision"
    />
  )
}
