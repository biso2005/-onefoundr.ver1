import type { Metadata } from 'next'
import FoundationPlaceholder from '@/components/FoundationPlaceholder'

export const metadata: Metadata = {
  title: 'The Financial Anxiety Framework — OneFoundr',
  description: 'Financial anxiety is the number one mental health trigger for solopreneurs. This hub covers both the emotional experience and the practical response in one place.',
}

export default function Page() {
  return (
    <FoundationPlaceholder
      title="The Financial Anxiety Framework"
      description="Financial anxiety is the number one mental health trigger for solopreneurs. 45% saw income fall in 2025. 67% of those reported direct mental health impact. This hub covers both the emotional experience and the practical response in one place."
      track="Track 01 — Inner Stability"
      trackLabel="Track 01 — Inner Stability"
    />
  )
}
