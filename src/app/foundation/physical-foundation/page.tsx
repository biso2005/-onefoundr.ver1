import type { Metadata } from 'next'
import FoundationPlaceholder from '@/components/FoundationPlaceholder'

export const metadata: Metadata = {
  title: 'The Physical Foundation — OneFoundr',
  description: 'Not a wellness hub. A business performance hub that happens to be about your body — sleep, movement, food, light, and isolation.',
}

export default function Page() {
  return (
    <FoundationPlaceholder
      title="The Physical Foundation"
      description="This is not a wellness hub. It is a business performance hub that happens to be about your body. Sleep, movement, food, light, and isolation — and what each one does to your decision quality and output."
      track="Track 02 — Daily Functioning"
      trackLabel="Track 02 — Daily Functioning"
    />
  )
}
