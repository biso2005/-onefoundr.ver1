import type { Metadata } from 'next'
import ValidationPlaceholder from '@/components/ValidationPlaceholder'

export const metadata: Metadata = {
  title: 'Go / Pivot / Kill — OneFoundr',
  description: 'How to make the final call after validation — and what the data needs to say before you commit.',
}

export default function Page() {
  return (
    <ValidationPlaceholder
      title="Go / Pivot / Kill"
      description="How to make the final call after validation. What the data needs to say before you commit to building. And how to make a clean pivot or a clean kill without losing months to indecision."
      stage="Stage 04 — Decision"
      stageLabel="Stage 04 — Decision"
    />
  )
}

