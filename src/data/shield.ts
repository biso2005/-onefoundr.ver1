export type ShieldHub = {
  id: string
  title: string
  href: string
  description?: string
  badge?: string
  isMoat?: boolean
}

export type ShieldTrack = {
  id: string
  number: number
  title: string
  description?: string
  hubs: ShieldHub[]
}

export const pillarMeta = {
  id: 'shield',
  title: 'The Shield',
  tagline: 'Stay Protected',
  description:
    "Protect your income, your business, and your sanity. The boring stuff that saves you later.",
  gradient: 'from-teal-600 to-teal-800',
}

export const gatewayHub: ShieldHub = {
  id: 'founder-first',
  title: 'The Founder First',
  href: '/shield/founder-first',
  description:
    'Protect the founder first — mental health as business continuity and building solo benefits.',
}

export const tracks: ShieldTrack[] = [
  {
    id: 'financial-protection',
    number: 1,
    title: 'Financial Protection',
    description: 'Getting paid, cash flow, tax efficiency, concentration and pricing for protection.',
    hubs: [
      { id: 'getting-paid', title: 'Getting Paid', href: '/shield/getting-paid', description: 'The Getting Paid Playbook', isMoat: true },
      { id: 'cash-flow', title: 'Cash Flow Management', href: '/shield/cash-flow' },
      { id: 'tax-efficiency', title: 'Tax Efficiency & Compliance', href: '/shield/tax-efficiency' },
      { id: 'concentration-risk', title: 'Single Client & Platform Risk', href: '/shield/concentration-risk' },
      { id: 'pricing-protection', title: 'Pricing for Protection', href: '/shield/pricing-protection' },
    ],
  },
  {
    id: 'legal-protection',
    number: 2,
    title: 'Legal & Business Protection',
    description: 'Contracts, insurance, IP and emerging legal risks.',
    hubs: [
      { id: 'contracts', title: 'Contracts & Agreements', href: '/shield/contracts' },
      { id: 'business-insurance', title: 'Business Insurance', href: '/shield/business-insurance' },
      { id: 'legal-risk-library', title: 'The Solo Legal Risk Library', href: '/shield/legal-risk-library', isMoat: true },
      { id: 'intellectual-property', title: 'Intellectual Property', href: '/shield/intellectual-property' },
    ],
  },
  {
    id: 'operational-protection',
    number: 3,
    title: 'Operational Protection',
    description: 'Continuity, digital resilience, platform risk and systems/SOPs for protection.',
    hubs: [
      { id: 'micro-continuity', title: 'Micro-Continuity Planning', href: '/shield/micro-continuity', isMoat: true },
      { id: 'digital-resilience', title: 'Digital Resilience & Redundancy', href: '/shield/digital-resilience' },
      { id: 'platform-risk', title: 'Platform & Dependency Risk', href: '/shield/platform-risk' },
      { id: 'systems-sops', title: 'Systems & SOPs for Protection', href: '/shield/systems-sops' },
    ],
  },
]

export const gatewayComponents = [
  gatewayHub,
  { id: 'benefits-builder', title: 'The Solopreneur Benefits Builder', href: '/shield/benefits-builder', description: 'Build back sick pay, pension, insurance and more.', isMoat: true },
]

export const allHubs = [gatewayHub, ...tracks.flatMap(t => t.hubs), ...gatewayComponents.filter(c => c.id !== gatewayHub.id)]

export const moatHubs = allHubs.filter(h => h.isMoat)
