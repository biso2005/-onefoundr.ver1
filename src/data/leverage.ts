export type LeverageHub = {
  title: string
  description: string
  href: string
  track: 'gateway' | 'earn-more-per-hour' | 'work-less-hours' | 'earn-without-working' | 'true-independence'
  isMoat?: boolean
  badge?: string
}

export type LeverageTrack = {
  id: string
  number: string
  title: string
  description: string
  hubs: LeverageHub[]
}

export const pillarMeta = {
  title: 'The Leverage',
  navLabel: 'Scale Smart',
  tagline: 'Work less. Earn more. Without hiring a team.',
  description:
    'Build systems, products, and income streams that multiply your time without growing a large team.',
  gradient: 'from-orange-400 to-rose-500',
  intro:
    'There is a ceiling to how much you can earn by selling hours. Leverage is how solo founders break through that ceiling — with systems, automation, and products that scale your time.',
}

export const gatewayHub: LeverageHub = {
  title: 'The Revenue Stability Foundation',
  description:
    'You cannot build leverage on an unstable income base. Fix the income foundation first: floor, pipeline, buffer, and protocols for bad months.',
  href: '/leverage/revenue-stability-foundation',
  track: 'gateway',
  isMoat: true,
  badge: 'Start Here',
}

export const tracks: LeverageTrack[] = [
  {
    id: 'earn-more-per-hour',
    number: '01',
    title: 'Earn More Per Hour',
    description:
      'Increase revenue without increasing time by improving pricing, offers and client selection.',
    hubs: [
      {
        title: 'Raising Prices',
        description: 'Practical frameworks for raising prices without losing clients.',
        href: '/leverage/earn-more-per-hour/raising-prices',
        track: 'earn-more-per-hour',
      },
      {
        title: 'Client & Customer Selection',
        description: 'How to pick the right clients who pay well and stay.',
        href: '/leverage/earn-more-per-hour/client-customer-selection',
        track: 'earn-more-per-hour',
      },
      {
        title: 'Offer Stacking',
        description: 'Designing offers that increase average revenue per customer.',
        href: '/leverage/earn-more-per-hour/offer-stacking',
        track: 'earn-more-per-hour',
      },
      {
        title: 'Scaling vs Working More',
        description: 'Reframe growth around revenue-per-hour, not hours worked.',
        href: '/leverage/earn-more-per-hour/scaling-vs-working-more',
        track: 'earn-more-per-hour',
      },
      {
        title: 'The Visibility Gap',
        description: 'Why the people who need you don\'t see you — and how to fix it.',
        href: '/leverage/earn-more-per-hour/visibility-gap',
        track: 'earn-more-per-hour',
      },
    ],
  },
  {
    id: 'work-less-hours',
    number: '02',
    title: 'Work Less Hours',
    description:
      'Use AI, automation and disciplined outsourcing to remove yourself from repeatable work.',
    hubs: [
      {
        title: 'AI as Your Leverage',
        description: 'Strategic uses of AI to multiply output without extra hours.',
        href: '/leverage/work-less-hours/ai-as-your-leverage',
        track: 'work-less-hours',
      },
      {
        title: 'The Automation Engine',
        description: 'Implementable automation patterns and a solo automation cookbook.',
        href: '/leverage/work-less-hours/automation-engine',
        track: 'work-less-hours',
        isMoat: true,
      },
      {
        title: 'Outsourcing & Contractors',
        description: 'Who-not-how delegation for solopreneurs — keep control and margins.',
        href: '/leverage/work-less-hours/outsourcing-contractors',
        track: 'work-less-hours',
      },
      {
        title: 'Stop Being the Bottleneck',
        description: 'Design interfaces and handoffs so your business keeps moving without you.',
        href: '/leverage/work-less-hours/stop-being-the-bottleneck',
        track: 'work-less-hours',
      },
    ],
  },
  {
    id: 'earn-without-working',
    number: '03',
    title: 'Earn Without Working',
    description:
      'Build income that does not require your constant time — products, recurring models, and trust at scale.',
    hubs: [
      {
        title: 'Passive Income Streams',
        description: 'Honest approaches to passive income that work for solo founders.',
        href: '/leverage/earn-without-working/passive-income-streams',
        track: 'earn-without-working',
      },
      {
        title: 'Trust at Scale',
        description: 'How to earn trust from larger audiences without being everywhere.',
        href: '/leverage/earn-without-working/trust-at-scale',
        track: 'earn-without-working',
      },
      {
        title: 'Recurring Revenue Models',
        description: 'Design subscriptions and retainers that create predictable revenue.',
        href: '/leverage/earn-without-working/recurring-revenue-models',
        track: 'earn-without-working',
      },
      {
        title: 'Financial Independence',
        description: 'Money and margin strategies that let you step away without panic.',
        href: '/leverage/earn-without-working/financial-independence',
        track: 'earn-without-working',
      },
    ],
  },
  {
    id: 'true-independence',
    number: '04',
    title: 'True Independence',
    description:
      'System-level independence: scaling systems, business design, and exit thinking.',
    hubs: [
      {
        title: 'Business Independence',
        description: 'Designing the business so it does not depend on one person.',
        href: '/leverage/true-independence/business-independence',
        track: 'true-independence',
      },
      {
        title: 'Scaling Systems',
        description: 'Failure modes, guardrails and patterns for systems that scale.',
        href: '/leverage/true-independence/scaling-systems',
        track: 'true-independence',
      },
      {
        title: 'The Lonely Scale',
        description: 'The social and psychological costs of scaling as a solo founder.',
        href: '/leverage/true-independence/lonely-scale',
        track: 'true-independence',
        badge: 'New',
      },
      {
        title: 'Exit Strategy',
        description: 'Thinking about exits even if you never plan to sell.',
        href: '/leverage/true-independence/exit-strategy',
        track: 'true-independence',
      },
    ],
  },
]

export const allHubs = [gatewayHub, ...tracks.flatMap((t) => t.hubs)]

export const moatHubs = tracks.flatMap((t) => t.hubs).filter((h) => h.isMoat)

export default null
