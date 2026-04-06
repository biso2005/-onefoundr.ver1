import type { Metadata } from 'next'
import NichePlaceholder from '@/components/NichePlaceholder'

export const metadata: Metadata = {
  title: 'Niching for Service Businesses — OneFoundr',
  description: 'How to pick a niche as a freelancer or service provider — the formula, the mistakes, and what the best niched service businesses have in common.',
}

export default function Page() {
  return (
    <NichePlaceholder
      title="Niching for Service Businesses"
      description="How to pick a niche as a freelancer or service provider. The right formula, the most common mistakes, and what the best niched service businesses have in common."
      section="Niche by Business Type"
      sectionLabel="Services"
    />
  )
}
