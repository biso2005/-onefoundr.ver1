import type { Metadata } from 'next'
import ValidationPlaceholder from '@/components/ValidationPlaceholder'

export const metadata: Metadata = {
  title: 'The Pre-Mortem — OneFoundr',
  description: 'Imagine your business has already failed. Work backwards to find out why — before it happens.',
}

export default function Page() {
  return (
    <ValidationPlaceholder
      title="The Pre-Mortem"
      description="Imagine your business has already failed. Work backwards to find out why — then fix those things before you launch. One of the most underused tools in a founder's toolkit."
      stage="Stage 04 — Decision"
      stageLabel="Stage 04 — Decision"
    />
  )
}
