import type { Metadata } from 'next'
import FoundationPlaceholder from '@/components/FoundationPlaceholder'

export const metadata: Metadata = {
  title: 'The Unplanned Founder — OneFoundr',
  description: 'You did not choose this path. You were made redundant, had no other options, or were forced into self-employment by circumstance. This is for you.',
}

export default function Page() {
  return (
    <FoundationPlaceholder
      title="The Unplanned Founder"
      description="30% of solopreneurs did not choose this path. They were made redundant, had no other options, or were forced into self-employment by circumstance. All existing content assumes a passionate, willing founder. This hub is for everyone else."
      track="Gateway Hub — The Foundation"
      trackLabel="Gateway Hub"
    />
  )
}
