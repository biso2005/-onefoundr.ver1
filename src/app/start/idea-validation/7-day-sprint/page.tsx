import type { Metadata } from 'next'
import ValidationPlaceholder from '@/components/ValidationPlaceholder'

export const metadata: Metadata = {
  title: 'The 7-Day Solo Validation Sprint — OneFoundr',
  description: 'Validate any business idea in one week without quitting your job, spending money, or building anything.',
}

export default function Page() {
  return (
    <ValidationPlaceholder
      title="The 7-Day Solo Validation Sprint"
      description="A day-by-day framework for validating any business idea in one week — without quitting your job, spending money, or building anything."
      stage="Flagship Framework"
      stageLabel="The Spark — Idea Validation"
    />
  )
}
