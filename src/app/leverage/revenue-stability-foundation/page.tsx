import LeveragePlaceholder from '@/components/LeveragePlaceholder'
import { gatewayHub } from '@/data/leverage'

export default function RevenueStabilityPage() {
  return (
    <LeveragePlaceholder
      title={gatewayHub.title}
      description={gatewayHub.description}
      track="Gateway"
      trackLabel="The Revenue Stability Foundation"
      backHref="/leverage"
      backLabel="Back to The Leverage"
    />
  )
}
