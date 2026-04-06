import type { Metadata } from 'next'
import {
  TrendingUp,
  Repeat,
  Bot,
  Users,
  Key,
  Handshake,
  Clock,
  LogOut,
} from 'lucide-react'
import CategoryHub from '@/components/CategoryHub'

export const metadata: Metadata = {
  title: 'The Leverage — Scale Smart',
  description:
    'Earn more without working more. Build systems, products, and income streams that multiply your time.',
}

export default function TheLeveragePage() {
  return (
    <CategoryHub
      title="The Leverage"
      tagline="Pillar 5 — Scale Smart"
      description="Working harder is not the answer. The answer is leverage — systems, products, and structures that let you earn more while working less. This is where solo becomes powerful."
      icon={TrendingUp}
      gradient="from-orange-400 to-rose-500"
      intro="There is a ceiling to how much you can earn by selling time. At some point, the only way to grow is to stop trading hours for money. Leverage is how solo founders break through that ceiling — without hiring a team or raising funding."
      spokes={[
        {
          title: 'Productization',
          description:
            'Turn your bespoke service into a repeatable product. Same result for clients, fraction of the time for you.',
          href: '/leverage/productization',
          icon: Repeat,
          gradient: 'from-orange-400 to-rose-500',
          badge: 'High Impact',
        },
        {
          title: 'Passive Income',
          description:
            'Income streams that do not require your time. What actually works for solo founders — and what is a myth.',
          href: '/leverage/passive-income',
          icon: Clock,
          gradient: 'from-amber-500 to-orange-600',
        },
        {
          title: 'Automation',
          description:
            'The tools and systems that run your business while you focus on the work only you can do.',
          href: '/leverage/automation',
          icon: Bot,
          gradient: 'from-teal-700 to-emerald-500',
          badge: 'Work Smarter',
        },
        {
          title: 'Outsourcing',
          description:
            'When and how to bring in help without losing control — or your margin. The solo founder approach to delegation.',
          href: '/leverage/outsourcing',
          icon: Users,
          gradient: 'from-teal-600 to-teal-800',
        },
        {
          title: 'Licensing',
          description:
            'Let others use your systems, frameworks, and IP — and get paid for it. Licensing explained for solo founders.',
          href: '/leverage/licensing',
          icon: Key,
          gradient: 'from-orange-500 to-amber-500',
        },
        {
          title: 'Partnerships',
          description:
            'Strategic partnerships that grow your reach without growing your headcount. How to find and structure them.',
          href: '/leverage/partnerships',
          icon: Handshake,
          gradient: 'from-amber-400 to-teal-600',
        },
        {
          title: 'Exit Planning',
          description:
            'Build a business you could sell — even if you never plan to. The discipline of exit thinking makes everything better.',
          href: '/leverage/exit-planning',
          icon: LogOut,
          gradient: 'from-teal-600 to-emerald-400',
          badge: 'Think Ahead',
        },
      ]}
    />
  )
}
