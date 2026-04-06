import type { Metadata } from 'next'
import ValidationPlaceholder from '@/components/ValidationPlaceholder'

export const metadata: Metadata = {
  title: 'Channel Validation — OneFoundr',
  description: 'How to find out which distribution channel will actually reach your customers — before you commit to one.',
}

export default function Page() {
  return (
    <ValidationPlaceholder
      title="Channel Validation"
      description="How to find out which distribution channel will actually reach your customers before you commit to one. Most founders pick a channel based on preference, not evidence."
      stage="Stage 03 — Market Validation"
      stageLabel="Stage 03 — Market Validation"
    />
  )
}
