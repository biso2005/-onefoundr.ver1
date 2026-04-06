import type { Metadata } from 'next'
import {
  Shield,
  Umbrella,
  FileCheck,
  Receipt,
  PiggyBank,
  Building,
  TrendingDown,
  Heart,
} from 'lucide-react'
import CategoryHub from '@/components/CategoryHub'

export const metadata: Metadata = {
  title: 'The Shield — Stay Protected',
  description:
    'Protect your income, your business, and your sanity. The boring stuff that saves you later.',
}

export default function TheShieldPage() {
  return (
    <CategoryHub
      title="The Shield"
      tagline="Pillar 4 — Stay Protected"
      description="Nobody talks about protection until something goes wrong. Then it is too late. This section covers the financial, legal, operational, and mental protection every solo founder needs."
      icon={Shield}
      gradient="from-teal-600 to-teal-800"
      intro="Solo founders are exposed in ways employees never are. One bad client, one missed tax payment, one health crisis — and the whole thing can collapse. The Shield is not glamorous. But it is what lets you keep going when things get hard."
      spokes={[
        {
          title: 'Business Insurance',
          description:
            'What cover you actually need as a solo founder — and what is just expensive peace of mind you can skip.',
          href: '/shield/business-insurance',
          icon: Umbrella,
          gradient: 'from-teal-600 to-teal-800',
          badge: 'Essential',
        },
        {
          title: 'Contracts',
          description:
            'Protect yourself with the right contracts. Templates and guidance for client agreements, NDAs, and more.',
          href: '/shield/contracts',
          icon: FileCheck,
          gradient: 'from-orange-500 to-amber-500',
          badge: 'Templates',
        },
        {
          title: 'Tax Planning',
          description:
            'Keep more of what you earn. Legal tax strategies for solo founders — before your accountant tells you it is too late.',
          href: '/shield/tax-planning',
          icon: Receipt,
          gradient: 'from-amber-500 to-orange-600',
        },
        {
          title: 'Emergency Fund',
          description:
            'How much runway you actually need and how to build it — so a slow month does not become a crisis.',
          href: '/shield/emergency-fund',
          icon: PiggyBank,
          gradient: 'from-teal-700 to-emerald-500',
          badge: 'Peace of Mind',
        },
        {
          title: 'Legal Structure',
          description:
            'Sole trader, LLC, or limited company? The right structure for your stage — with real trade-offs explained.',
          href: '/shield/legal-structure',
          icon: Building,
          gradient: 'from-orange-400 to-rose-500',
        },
        {
          title: 'Cash Flow',
          description:
            'Profitable but broke is a real thing. Manage your cash flow so you never miss payroll — even if payroll is just you.',
          href: '/shield/cash-flow',
          icon: TrendingDown,
          gradient: 'from-amber-400 to-teal-600',
          badge: 'Critical',
        },
        {
          title: 'Mental Health',
          description:
            'Solo founder burnout is real. Protect your mental health before it becomes your biggest business risk.',
          href: '/shield/mental-health',
          icon: Heart,
          gradient: 'from-teal-600 to-emerald-400',
        },
      ]}
    />
  )
}
