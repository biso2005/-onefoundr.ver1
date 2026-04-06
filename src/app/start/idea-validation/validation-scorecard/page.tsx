import Link from 'next/link'

export default function ValidationScorecardPage() {
  return (
    <div className="min-h-screen bg-white prose max-w-3xl p-6">
      <h1>Validation Scorecard</h1>
      <p>A simple scorecard to track validation progress — coming soon.</p>
      <Link href="/start/idea-validation" className="text-orange-500">Back</Link>
    </div>
  )
}
