import type { Metadata } from 'next'
import FoundationPlaceholder from '@/components/FoundationPlaceholder'

export const metadata: Metadata = {
  title: 'Loneliness & Finding Your People — OneFoundr',
  description: '19.2% of solopreneurs feel lonely often or always — three times higher than the general population.',
}

export default function Page() {
  return (
    <FoundationPlaceholder
      title="Loneliness & Finding Your People"
      description="19.2% of solopreneurs feel lonely often or always — three times higher than the general population. This hub covers the problem and builds toward the solution: genuine connection, not just networking."
      track="Track 03 — Resilience"
      trackLabel="Track 03 — Resilience"
    />
  )
}
