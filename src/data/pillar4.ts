export type Pillar4Hub = {
  id: string
  title: string
  href: string
  description?: string
  badge?: string
  isInternal?: boolean
}

export type Pillar4Track = {
  id: string
  number: number
  title: string
  description?: string
  hubs: Pillar4Hub[]
}

export const pillar4Meta = {
  id: 'pillar4',
  title: 'Pillar 4',
  tagline: 'Pillar 4 — Placeholder',
  description: 'Scaffolded pillar. Replace with real content from PILLAR 4 PDF.',
  gradient: 'from-slate-500 to-gray-700',
  intro: '' as string,
}

export const gatewayHub: Pillar4Hub = {
  id: 'gateway',
  title: 'Gateway',
  href: '/pillar4/gateway',
  description: 'Gateway hub for Pillar 4',
}

export const tracks: Pillar4Track[] = [
  {
    id: 'track-1',
    number: 1,
    title: 'Track One',
    description: 'Placeholder track one.',
    hubs: [
      {
        id: 'hub-a',
        title: 'Hub A',
        href: '/pillar4/track-1/hub-a',
        description: 'Placeholder hub A',
      },
    ],
  },
  {
    id: 'track-2',
    number: 2,
    title: 'Track Two',
    description: 'Placeholder track two.',
    hubs: [
      {
        id: 'hub-b',
        title: 'Hub B',
        href: '/pillar4/track-2/hub-b',
        description: 'Placeholder hub B',
      },
    ],
  },
]

export const allHubs = [gatewayHub, ...tracks.flatMap(t => t.hubs)]
