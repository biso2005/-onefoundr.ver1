export type ShieldHub = {
  title: string
  description: string
  href: string
  track: 'gateway' | 'financial-protection' | 'legal-protection' | 'operational-protection'
  isMoat?: boolean
  badge?: string
}

export type ShieldTrack = {
  id: string
  number: string
  title: string
  description: string
  hubs: ShieldHub[]
}

export const pillarMeta = {
  title: 'The Shield',
  navLabel: 'Stay Protected',
  tagline: 'Stay Protected',
  description:
    'Protect your income, your business, and your sanity. The boring stuff that saves you later.',
  gradient: 'from-teal-600 to-teal-800',
  intro:
    'Solo founders are exposed in ways employees never are. One bad client, one missed tax payment, one health crisis — and the whole thing can collapse. The Shield is not glamorous. But it is what lets you keep going when things get hard.',
}

export const gatewayHub: ShieldHub = {
  title: 'The Founder First',
  description:
    'Protect the founder first — mental health as business continuity and building solo benefits.',
  href: '/shield/founder-first',
  track: 'gateway',
  badge: 'Start Here',
}

export const tracks: ShieldTrack[] = [
  {
    id: 'financial-protection',
    number: '01',
    title: 'Financial Protection',
    description: 'Getting paid, cash flow, tax efficiency, concentration and pricing for protection.',
    hubs: [
      {
        title: 'Getting Paid',
        description: 'The Getting Paid Playbook',
        href: '/shield/getting-paid',
        track: 'financial-protection',
        isMoat: true,
      },
      {
        title: 'Cash Flow Management',
        description: 'Manage cash flow, runway, and forecasting.',
        href: '/shield/cash-flow',
        track: 'financial-protection',
      },
      {
        title: 'Tax Efficiency & Compliance',
        description: 'Minimize tax liability and stay compliant.',
        href: '/shield/tax-efficiency',
        track: 'financial-protection',
      },
      {
        title: 'Single Client & Platform Risk',
        description: 'Avoid putting all risk on one client or platform.',
        href: '/shield/concentration-risk',
        track: 'financial-protection',
      },
      {
        title: 'Pricing for Protection',
        description: 'Price your offers to include built-in buffer.',
        href: '/shield/pricing-protection',
        track: 'financial-protection',
      },
    ],
  },
  {
    id: 'legal-protection',
    number: '02',
    title: 'Legal & Business Protection',
    description: 'Contracts, insurance, IP and emerging legal risks.',
    hubs: [
      {
        title: 'Contracts & Agreements',
        description: 'Client agreements, NDAs, and legal templates.',
        href: '/shield/contracts',
        track: 'legal-protection',
      },
      {
        title: 'Business Insurance',
        description: 'What cover you actually need as a solo founder.',
        href: '/shield/business-insurance',
        track: 'legal-protection',
      },
      {
        title: 'The Solo Legal Risk Library',
        description: 'AI risks, IP protection, platform dependencies, cross-border legal.',
        href: '/shield/legal-risk-library',
        track: 'legal-protection',
        isMoat: true,
      },
      {
        title: 'Intellectual Property',
        description: 'Protect your frameworks, templates, and brand.',
        href: '/shield/intellectual-property',
        track: 'legal-protection',
      },
    ],
  },
  {
    id: 'operational-protection',
    number: '03',
    title: 'Operational Protection',
    description: 'Continuity, digital resilience, platform risk and systems/SOPs for protection.',
    hubs: [
      {
        title: 'Micro-Continuity Planning',
        description: 'The 5-document kit to keep your business running if you cannot.',
        href: '/shield/micro-continuity',
        track: 'operational-protection',
        isMoat: true,
      },
      {
        title: 'Digital Resilience & Redundancy',
        description: 'Backup systems, data protection, and recovery plans.',
        href: '/shield/digital-resilience',
        track: 'operational-protection',
      },
      {
        title: 'Platform & Dependency Risk',
        description: 'Reduce lock-in and dependency on platforms you don\'t control.',
        href: '/shield/platform-risk',
        track: 'operational-protection',
      },
      {
        title: 'Systems & SOPs for Protection',
        description: 'Documented processes that protect you and your business.',
        href: '/shield/systems-sops',
        track: 'operational-protection',
      },
    ],
  },
]

export const allHubs: ShieldHub[] = [
  gatewayHub,
  {
    title: 'The Solopreneur Benefits Builder',
    description: 'Build back sick pay, pension, insurance and more.',
    href: '/shield/benefits-builder',
    track: 'gateway',
    isMoat: true,
    badge: 'Gateway',
  },
  ...tracks.flatMap(t => t.hubs),
]

export const moatHubs = allHubs.filter(h => h.isMoat === true)
