export type OfferHub = {
  title: string
  description: string
  href: string
  track: 'gateway' | 'discovery' | 'packaging' | 'monetization'
  isMoat?: boolean
  badge?: string
}

export type OfferTrack = {
  id: string
  number: string
  title: string
  description: string
  hubs: OfferHub[]
}

export const pillarMeta = {
  title: 'The Offer',
  navLabel: 'Offer',
  tagline: 'What to Sell',
  description:
    'Build something people actually pay for. Package your skills into offers that sell themselves.',
  gradient: 'from-teal-700 to-emerald-500',
  intro:
    'The biggest mistake solo founders make is building before selling. Your offer is the core of your business — everything else flows from it. Get this right and everything gets easier. Get it wrong and no amount of marketing will save you.',
}

export const gatewayHub: OfferHub = {
  title: 'Offer Builder',
  description: 'Start here: a simple process to design, test, and price an offer customers will buy.',
  href: '/offer/offer-builder',
  track: 'gateway',
  badge: 'Start Here',
  isMoat: true,
}

export const tracks: OfferTrack[] = [
  {
    id: 'discovery',
    number: '01',
    title: 'Discovery',
    description: 'Find the right person and problem before you design the solution.',
    hubs: [
      {
        title: 'Positioning',
        description: 'Be the obvious choice for a specific person with a specific problem.',
        href: '/offer/positioning',
        track: 'discovery',
        badge: 'Critical',
      },
      {
        title: 'Pre-selling',
        description: 'Validate demand and pre-sell before you build to reduce risk.',
        href: '/offer/pre-selling',
        track: 'discovery',
      },
        {
          title: 'Validation Playbook',
          description: 'Fast experiments and simple tests to validate demand before you build.',
          href: '/offer/validation',
          track: 'discovery',
        },
    ],
  },
  {
    id: 'packaging',
    number: '02',
    title: 'Packaging',
    description: 'Structure, name, and price offers so prospects understand value quickly.',
    hubs: [
      {
        title: 'Productized Services',
        description: 'Package your service into fixed-scope, fixed-price offers that scale.',
        href: '/offer/productized-services',
        track: 'packaging',
        badge: 'High Leverage',
      },
        {
          title: 'Bonuses & Guarantees',
          description: 'Use bonuses, guarantees, and risk-reduction to increase conversions.',
          href: '/offer/guarantees',
          track: 'packaging',
        },
      {
        title: 'Offer Packaging',
        description: 'How you bundle deliverables, outcomes, and guarantees to increase conversions.',
        href: '/offer/offer-packaging',
        track: 'packaging',
      },
      {
        title: 'Pricing Strategy',
        description: 'Price to win: win more clients without leaving money on the table.',
        href: '/offer/pricing-strategy',
        track: 'packaging',
      },
    ],
  },
  {
    id: 'monetization',
    number: '03',
    title: 'Monetization',
    description: 'Scale revenue with products, subscriptions, and recurring flows.',
    hubs: [
      {
        title: 'Digital Products',
        description: 'Templates, courses, and tools that generate revenue passively.',
        href: '/offer/digital-products',
        track: 'monetization',
        badge: 'Passive Income',
      },
      {
        title: 'Recurring Revenue',
        description: 'Retainers, memberships, and subscriptions for predictable income.',
        href: '/offer/recurring-revenue',
        track: 'monetization',
        badge: 'Game Changer',
      },
        {
          title: 'Offer Launch',
          description: 'Timelines, checklists, and launch tactics to get your first customers fast.',
          href: '/offer/launch',
          track: 'monetization',
        },
    ],
  },
]

export const allHubs: OfferHub[] = [gatewayHub, ...tracks.flatMap((t) => t.hubs)]

export const moatHubs = allHubs.filter((h) => h.isMoat === true)
