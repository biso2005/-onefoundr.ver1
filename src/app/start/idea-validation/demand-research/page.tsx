import type { Metadata } from 'next'
import ValidationPlaceholder from '@/components/ValidationPlaceholder'

export const metadata: Metadata = {
  title: 'Demand Research — OneFoundr',
  description: 'How to find out if people are actively searching for what you want to sell — before you build anything.',
}

export default function Page() {
  return (
    <ValidationPlaceholder
      title="Demand Research"
      description="How to find out if people are actively searching for what you want to sell — using keyword tools, search trends, and platform data."
      stage="Stage 01 — Desktop Validation"
      stageLabel="Stage 01 — Desktop Validation"
    />
  )
}
