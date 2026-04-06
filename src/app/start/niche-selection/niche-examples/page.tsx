import type { Metadata } from 'next'
import NichePlaceholder from '@/components/NichePlaceholder'

export const metadata: Metadata = {
  title: 'Real Niche Examples — OneFoundr',
  description: 'Real niche examples — one per business type — with real numbers, real mistakes, and real lessons.',
}

export default function Page() {
  return (
    <NichePlaceholder
      title="Real Niche Examples"
      description="One real niche example per business type. Real numbers, real mistakes, and real lessons from founders who went through the process — not hypothetical case studies."
      section="Niche Selection"
      sectionLabel="Real Examples"
    />
  )
}
