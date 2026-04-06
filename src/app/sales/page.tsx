import type { Metadata } from 'next'
import {
  Zap,
  FileText,
  Search,
  Share2,
  Mail,
  MessageSquare,
  Send,
  BarChart2,
} from 'lucide-react'
import CategoryHub from '@/components/CategoryHub'

export const metadata: Metadata = {
  title: 'The Engine — Get Clients',
  description:
    'Build a system that brings in clients consistently — without cold calling or paid ads from day one.',
}

export default function TheEnginePage() {
  return (
    <CategoryHub
      title="The Engine"
      tagline="Pillar 3 — Get Clients"
      description="A business without clients is a hobby. This section builds the system that fills your pipeline — consistently, predictably, without burning yourself out chasing leads."
      icon={Zap}
      gradient="from-amber-500 to-orange-600"
      intro="Most solo founders either feast or famine. They land a client, focus on delivery, then scramble when it ends. The Engine fixes that. You will build a simple, repeatable system that keeps leads coming in — even when you are heads-down on client work."
      spokes={[
        {
          title: 'Content Marketing',
          description:
            'Create content that attracts your ideal clients on autopilot. The long game that pays forever.',
          href: '/sales/content-marketing',
          icon: FileText,
          gradient: 'from-amber-500 to-orange-600',
          badge: 'Long Game',
        },
        {
          title: 'SEO Basics',
          description:
            'Get found on Google by people already searching for what you offer. Free traffic that compounds.',
          href: '/sales/seo-basics',
          icon: Search,
          gradient: 'from-teal-700 to-emerald-500',
          badge: 'Free Traffic',
        },
        {
          title: 'Social Media',
          description:
            'Which platforms actually work for solo founders — and how to use them without wasting hours every day.',
          href: '/sales/social-media',
          icon: Share2,
          gradient: 'from-orange-500 to-amber-500',
        },
        {
          title: 'Email Marketing',
          description:
            'Your email list is the only audience you own. How to build it, nurture it, and convert it into clients.',
          href: '/sales/email-marketing',
          icon: Mail,
          gradient: 'from-teal-600 to-teal-800',
          badge: 'You Own This',
        },
        {
          title: 'Sales Conversations',
          description:
            'How to run a sales call that feels natural, not pushy — and converts prospects into paying clients.',
          href: '/sales/sales-conversations',
          icon: MessageSquare,
          gradient: 'from-orange-400 to-rose-500',
        },
        {
          title: 'Proposals',
          description:
            'Write proposals that win. Structure, pricing presentation, and the psychology of the perfect proposal.',
          href: '/sales/proposals',
          icon: Send,
          gradient: 'from-amber-400 to-teal-600',
        },
        {
          title: 'Follow-up Systems',
          description:
            'Most deals are lost through lack of follow-up. Build a simple system that keeps you top of mind.',
          href: '/sales/follow-up-systems',
          icon: BarChart2,
          gradient: 'from-teal-600 to-emerald-400',
          badge: 'Easy Wins',
        },
      ]}
    />
  )
}
