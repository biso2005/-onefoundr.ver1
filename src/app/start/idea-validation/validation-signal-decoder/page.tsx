import type { Metadata } from 'next'
import ValidationPlaceholder from '@/components/ValidationPlaceholder'

export const metadata: Metadata = {
  title: 'The Validation Signal Decoder — OneFoundr',
  description: 'A reference guide to every validation signal — what it means, how strong it is, and what to do next.',
}

export default function Page() {
  return (
    <ValidationPlaceholder
      title="The Validation Signal Decoder"
      description="A reference guide to every validation signal — what it means, how strong it actually is, and what your next move should be based on what you are seeing."
      stage="Tools and Frameworks"
      stageLabel="Tool — Idea Validation"
    />
  )
}

