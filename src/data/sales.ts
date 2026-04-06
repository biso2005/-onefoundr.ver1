export type SalesHub = {
  title: string
  description: string
  href: string
  track: 'gateway' | 'awareness' | 'conversion' | 'retention'
  isMoat?: boolean
  badge?: string
}

export type SalesTrack = {
  id: string
  number: string
  title: string
  description: string
  hubs: SalesHub[]
}

export const pillarMeta = {
  title: 'The Engine',
  navLabel: 'Get Clients',
  tagline: 'Get Clients',
  description:
    'Build a system that brings in clients consistently — without cold calling or paid ads from day one.',
  gradient: 'from-amber-500 to-orange-600',
  intro:
    'Most solo founders either feast or famine. They land a client, focus on delivery, then scramble when it ends. The Engine fixes that. You will build a simple, repeatable system that keeps leads coming in — even when you are heads-down on client work.',
}

export const gatewayHub: SalesHub = {
  title: 'The Lead Machine',
  description: 'Start here to build a predictable lead flow and foundational pipeline hygiene.',
  href: '/sales/lead-machine',
  track: 'gateway',
  badge: 'Start Here',
  isMoat: true,
}

export const tracks: SalesTrack[] = [
  {
    id: 'awareness',
    number: '01',
    title: 'Awareness',
    description: 'Attract the right people with content, SEO, and targeted social presence.',
    hubs: [
      {
        title: 'Content Marketing',
        description: 'Create content that attracts your ideal clients on autopilot.',
        href: '/sales/content-marketing',
        track: 'awareness',
      },
      {
        title: 'SEO Basics',
        description: 'Get found on Google by people already searching for what you offer.',
        href: '/sales/seo-basics',
        track: 'awareness',
      },
      {
        title: 'Social Media',
        description: 'Which platforms actually work for solo founders — without wasting hours.',
        href: '/sales/social-media',
        track: 'awareness',
      },
    ],
  },
  {
    id: 'conversion',
    number: '02',
    title: 'Conversion',
    description: 'Turn attention into customers with email, conversations, and compelling proposals.',
    hubs: [
      {
        title: 'Email Marketing',
        description: 'Build an owned audience, nurture, and convert with sequences that work.',
        href: '/sales/email-marketing',
        track: 'conversion',
      },
      {
        title: 'Sales Conversations',
        description: 'Run sales calls that feel natural and convert prospects into paying clients.',
        href: '/sales/sales-conversations',
        track: 'conversion',
        isMoat: true,
        badge: 'Playbook',
      },
      {
        title: 'Proposals',
        description: 'Write proposals that win: structure, pricing, and close psychology.',
        href: '/sales/proposals',
        track: 'conversion',
      },
    ],
  },
  {
    id: 'retention',
    number: '03',
    title: 'Retention',
    description: 'Keep conversations alive and turn one-off clients into repeat buyers and referrals.',
    hubs: [
      {
        title: 'Follow-up Systems',
        description: 'Most deals are lost through lack of follow-up. Build a system that keeps you top of mind.',
        href: '/sales/follow-up-systems',
        track: 'retention',
        isMoat: true,
        badge: 'Easy Wins',
      },
    ],
  },
]

export const allHubs: SalesHub[] = [gatewayHub, ...tracks.flatMap((t) => t.hubs)]

export const moatHubs = allHubs.filter((h) => h.isMoat === true)
