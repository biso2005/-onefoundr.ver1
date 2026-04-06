import type { Metadata } from 'next'
import {
  Package,
  Layers,
  BookOpen,
  DollarSign,
  Gift,
  Crosshair,
  Zap,
  RefreshCw,
} from 'lucide-react'
import CategoryHub from '@/components/CategoryHub'

export const metadata: Metadata = {
  title: 'The Offer — What to Sell',
  description:
    'Build something people actually pay for. Package your skills into offers that sell themselves.',
}

export default function TheOfferPage() {
  return (
    <CategoryHub
      title="The Offer"
      tagline="Pillar 2 — What to Sell"
      description="Most solo founders undercharge, underprice, and undersell. This section fixes that. Build offers people want, price them properly, and deliver without burning out."
      icon={Package}
      gradient="from-teal-700 to-emerald-500"
      intro="The biggest mistake solo founders make is building before selling. Your offer is the core of your business — everything else flows from it. Get this right and everything gets easier. Get it wrong and no amount of marketing will save you."
      spokes={[
        {
          title: 'Productized Services',
          description:
            'Stop trading time for money. Package your service into a fixed-scope, fixed-price offer that scales without you.',
          href: '/offer/productized-services',
          icon: Layers,
          gradient: 'from-teal-700 to-emerald-500',
          badge: 'High Leverage',
        },
        {
          title: 'Digital Products',
          description:
            'Build once, sell forever. Templates, courses, guides, and tools that generate revenue while you sleep.',
          href: '/offer/digital-products',
          icon: BookOpen,
          gradient: 'from-orange-500 to-amber-500',
          badge: 'Passive Income',
        },
        {
          title: 'Pricing Strategy',
          description:
            'How to price your services so clients say yes — without leaving money on the table or underselling yourself.',
          href: '/offer/pricing-strategy',
          icon: DollarSign,
          gradient: 'from-amber-500 to-orange-600',
        },
        {
          title: 'Offer Packaging',
          description:
            'How you package your offer matters as much as what is in it. Structure, naming, and presentation that converts.',
          href: '/offer/offer-packaging',
          icon: Gift,
          gradient: 'from-teal-600 to-teal-800',
        },
        {
          title: 'Positioning',
          description:
            'Be the obvious choice for a specific person with a specific problem. How to position yourself to win.',
          href: '/offer/positioning',
          icon: Crosshair,
          gradient: 'from-orange-400 to-rose-500',
          badge: 'Critical',
        },
        {
          title: 'Pre-selling',
          description:
            'Sell it before you build it. Validate demand with real money before you invest a single hour creating.',
          href: '/offer/pre-selling',
          icon: Zap,
          gradient: 'from-amber-400 to-teal-600',
        },
        {
          title: 'Recurring Revenue',
          description:
            'Retainers, memberships, and subscriptions. Build predictable monthly income that compounds over time.',
          href: '/offer/recurring-revenue',
          icon: RefreshCw,
          gradient: 'from-teal-700 to-emerald-400',
          badge: 'Game Changer',
        },
      ]}
    />
  )
}
