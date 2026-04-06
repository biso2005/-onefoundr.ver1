import type { Metadata } from 'next'
import FoundationPlaceholder from '@/components/FoundationPlaceholder'

export const metadata: Metadata = {
  title: 'How to Actually Switch Off — OneFoundr',
  description: '76% of freelancers take less time off than employed people legally receive. The Always On Trap is not laziness — it is a structural and psychological problem.',
}

export default function Page() {
  return (
    <FoundationPlaceholder
      title="How to Actually Switch Off"
      description="76% of freelancers take less time off than employed people legally receive. The Always On Trap — the psychological inability to switch off even when not working — is not laziness or poor discipline. It is a structural and psychological problem with a specific solution."
      track="Track 02 — Daily Functioning"
      trackLabel="Track 02 — Daily Functioning"
    />
  )
}
