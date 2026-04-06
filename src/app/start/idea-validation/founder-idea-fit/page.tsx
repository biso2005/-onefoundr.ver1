import type { Metadata } from 'next'
import ValidationPlaceholder from '@/components/ValidationPlaceholder'

export const metadata: Metadata = {
  title: 'The Founder-Idea Fit Assessment — OneFoundr',
  description: 'Is this the right idea for you specifically — not just a good idea in theory?',
}

export default function Page() {
  return (
    <ValidationPlaceholder
      title="The Founder-Idea Fit Assessment"
      description="Is this the right idea for you specifically — not just a good idea in theory? The best business idea in the world fails if the founder is the wrong person to execute it."
      stage="Stage 04 — Decision"
      stageLabel="Stage 04 — Decision"
    />
  )
}
