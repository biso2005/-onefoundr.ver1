export type FoundationHub = {
  title: string
  description: string
  href: string
  track: 'gateway' | 'inner-stability' | 'daily-functioning' | 'resilience'
  isMoat?: boolean
  badge?: string
}

export type FoundationTrack = {
  id: string
  number: string
  title: string
  description: string
  hubs: FoundationHub[]
}

export const pillarMeta = {
  title: 'The Foundation',
  navLabel: 'Stay the Course',
  tagline: 'Pillar 6 — The Foundation',
  description:
    'The mindset layer that runs underneath every other pillar. For solopreneurs at every stage — but especially for the moments when something is wrong.',
  gradient: 'from-slate-500 to-gray-700',
  intro:
    'Every other pillar assumes you are functioning. This one does not make that assumption. The Foundation covers the internal work — the anxiety, the loneliness, the identity questions, the daily struggle to keep going — that nobody talks about because it does not make for a good LinkedIn post.',
}

export const gatewayHub: FoundationHub = {
  title: 'The Unplanned Founder',
  description:
    '30% of solopreneurs did not choose this path. They were made redundant, had no other options, or were forced into self-employment by circumstance. All existing content assumes a passionate, willing founder. This hub is for everyone else.',
  href: '/foundation/unplanned-founder',
  track: 'gateway',
  isMoat: true,
  badge: 'Start Here',
}

export const tracks: FoundationTrack[] = [
  {
    id: 'inner-stability',
    number: '01',
    title: 'Inner Stability',
    description:
      'The internal foundation. How you think about yourself, your business, and your place in the world.',
    hubs: [
      {
        title: 'The Financial Anxiety Framework',
        description:
          'Financial anxiety is the number one mental health trigger for solopreneurs. 45% saw income fall in 2025. 67% of those reported direct mental health impact. This hub covers both the emotional experience and the practical response in one place.',
        href: '/foundation/financial-anxiety',
        track: 'inner-stability',
        isMoat: true,
        badge: 'Most Important',
      },
      {
        title: 'Your Why',
        description:
          'Why your why matters more when things get hard — and how to find it, reconnect with it, or rebuild it after a bad period.',
        href: '/foundation/your-why',
        track: 'inner-stability',
      },
      {
        title: 'Identity Beyond Business',
        description:
          'When the business becomes your entire identity, a bad month does not just hurt your income — it threatens who you are. Here is how to build an identity that can survive business failure.',
        href: '/foundation/identity-beyond-business',
        track: 'inner-stability',
      },
      {
        title: 'Imposter Syndrome',
        description:
          'Not the Instagram version. The real thing — what it actually is, why solopreneurs experience it more than employees, and practical tools that go beyond "everyone feels this way."',
        href: '/foundation/imposter-syndrome',
        track: 'inner-stability',
      },
      {
        title: 'Fear of Failure',
        description:
          'The specific fears solopreneurs carry — financial, social, and identity-based. How fear shows up as procrastination. The difference between useful caution and paralysing fear.',
        href: '/foundation/fear-of-failure',
        track: 'inner-stability',
      },
      {
        title: 'Comparison & Social Media',
        description:
          'Why comparison hits differently for solopreneurs. The highlight reel problem. Practical limits and boundaries — and how to use social media without being consumed by it.',
        href: '/foundation/comparison-social-media',
        track: 'inner-stability',
      },
    ],
  },
  {
    id: 'daily-functioning',
    number: '02',
    title: 'Daily Functioning',
    description:
      'How to show up and operate effectively every single day when there is no external structure, no boss, no team, and no clear start or end to the working day. This is not a productivity track. It is a sustainability track.',
    hubs: [
      {
        title: 'Building Your Own Structure',
        description:
          'Why external structure matters more than people think — and how to design a daily rhythm that fits solo business without copying corporate life or falling for 5am cold shower nonsense.',
        href: '/foundation/building-your-own-structure',
        track: 'daily-functioning',
      },
      {
        title: 'The Weight of Deciding Alone',
        description:
          'Decision fatigue is about volume. Anchor Syndrome is about weight — the cumulative psychological burden of being solely responsible for every decision, every risk, and every consequence.',
        href: '/foundation/weight-of-deciding-alone',
        track: 'daily-functioning',
      },
      {
        title: 'How to Actually Switch Off',
        description:
          '76% of freelancers take less time off than employed people legally receive. The Always On Trap is not laziness or poor discipline — it is a structural and psychological problem with a specific solution.',
        href: '/foundation/how-to-switch-off',
        track: 'daily-functioning',
      },
      {
        title: 'The Physical Foundation',
        description:
          'This is not a wellness hub. It is a business performance hub that happens to be about your body. Sleep, movement, food, light, and isolation — and what each one does to your decision quality and output.',
        href: '/foundation/physical-foundation',
        track: 'daily-functioning',
      },
      {
        title: 'Protecting Your Focus',
        description:
          'Not productivity optimisation. Protection. How to keep your best cognitive hours from being consumed by low-value tasks and interruptions — and what to do when you cannot focus at all.',
        href: '/foundation/protecting-your-focus',
        track: 'daily-functioning',
      },
    ],
  },
  {
    id: 'resilience',
    number: '03',
    title: 'Resilience',
    description:
      'How to keep going when everything is on your shoulders. Covers both proactive resilience — not breaking in the first place — and reactive resilience — recovering when things go wrong.',
    hubs: [
      {
        title: 'The Stage You Are In',
        description:
          'Launch. The Messy Middle. Isolation at the Top. Three research-identified stages of solo business — named, described, and validated. You are not broken. You are at a stage.',
        href: '/foundation/the-stage-youre-in',
        track: 'resilience',
      },
      {
        title: 'The Slow Burn',
        description:
          'Burnout for solopreneurs is not the dramatic collapse. It is the slow erosion. This hub leads with recognition and prevention — because by the time you need recovery, it is already too late.',
        href: '/foundation/the-slow-burn',
        track: 'resilience',
      },
      {
        title: 'Loneliness & Finding Your People',
        description:
          '19.2% of solopreneurs feel lonely often or always — three times higher than the general population. This hub covers the problem and builds toward the solution: genuine connection, not just networking.',
        href: '/foundation/loneliness-finding-your-people',
        track: 'resilience',
      },
      {
        title: 'Relationships & Solo Business',
        description:
          'What solo business does to your relationship — the honest version. The irregular income conversation, the long hours, the emotional volatility, and how to protect what matters when the business is hard.',
        href: '/foundation/relationships-solo-business',
        track: 'resilience',
      },
      {
        title: 'When Things Go Wrong',
        description:
          'The honest recovery guide. Lost client, failed launch, revenue collapse, public mistake. What to do in the first 48 hours, how to get back to work, and what failure actually teaches.',
        href: '/foundation/when-things-go-wrong',
        track: 'resilience',
      },
      {
        title: 'Pivot or Persist',
        description:
          'The hardest decision in solo business. The difference between giving up too early and holding on too long — and a framework for making this decision alone, without a board or advisor.',
        href: '/foundation/pivot-or-persist',
        track: 'resilience',
      },
    ],
  },
]

export const allHubs: FoundationHub[] = [
  gatewayHub,
  ...tracks.flatMap((t) => t.hubs),
]

export const moatHubs = allHubs.filter((h) => h.isMoat)
