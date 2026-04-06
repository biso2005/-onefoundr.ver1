export type BusinessIdea = {
  slug: string
  title: string
  description: string
  category:
    | 'Services'
    | 'Physical Products'
    | 'Digital Products'
    | 'Knowledge & Education'
    | 'Content & Media'
    | 'SaaS & Software'
    | 'Community'
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  startupCost: '£0-500' | '£500-2K' | '£2K+'
  timeToFirstRevenue: 'This week' | 'This month' | '3-6 months' | '12+ months'
  workStyle: 'From home' | 'In person' | 'Either'
  startThisWeekend: boolean
  href: string
}

export const businessIdeas: BusinessIdea[] = [

  // ─── SERVICES (10) ───────────────────────────────────────────

  {
    slug: 'freelance-copywriting',
    title: 'Freelance Copywriting',
    description:
      'Write words that sell — websites, emails, ads, and landing pages for businesses who know they need better copy but do not know how to write it. Every business needs this. Few do it well. If you can write clearly and persuasively, you can start this with nothing but a laptop and a few sample pieces.',
    category: 'Services',
    difficulty: 'Beginner',
    startupCost: '£0-500',
    timeToFirstRevenue: 'This week',
    workStyle: 'From home',
    startThisWeekend: true,
    href: '/start/business-ideas/freelance-copywriting',
  },
  {
    slug: 'social-media-management',
    title: 'Social Media Management',
    description:
      'Run the social media accounts of small businesses and personal brands who know they should be posting but never do. You handle the content calendar, the captions, the scheduling, and the engagement. Recurring retainers make this one of the most predictable service businesses you can run solo.',
    category: 'Services',
    difficulty: 'Beginner',
    startupCost: '£0-500',
    timeToFirstRevenue: 'This week',
    workStyle: 'From home',
    startThisWeekend: true,
    href: '/start/business-ideas/social-media-management',
  },
  {
    slug: 'bookkeeping-service',
    title: 'Bookkeeping Service',
    description:
      'Keep the financial records of small businesses in order — reconciling accounts, categorising transactions, and preparing reports. Most small business owners hate this task and will happily pay someone reliable to take it off their plate. Certification helps but is not always required to get started.',
    category: 'Services',
    difficulty: 'Beginner',
    startupCost: '£0-500',
    timeToFirstRevenue: 'This month',
    workStyle: 'From home',
    startThisWeekend: false,
    href: '/start/business-ideas/bookkeeping-service',
  },
  {
    slug: 'web-design-for-small-businesses',
    title: 'Web Design for Small Businesses',
    description:
      'Build clean, fast websites for local businesses, tradespeople, and service providers who are still running on nothing or on a site that embarrasses them. You do not need to be a developer. Tools like Webflow, Framer, and WordPress make this accessible to anyone with a good eye and a process.',
    category: 'Services',
    difficulty: 'Intermediate',
    startupCost: '£0-500',
    timeToFirstRevenue: 'This month',
    workStyle: 'From home',
    startThisWeekend: false,
    href: '/start/business-ideas/web-design-for-small-businesses',
  },
  {
    slug: 'virtual-assistant',
    title: 'Virtual Assistant',
    description:
      'Handle the admin, inbox management, scheduling, research, and operational tasks that founders and executives do not have time for. The best VAs specialise — in a specific type of client, a specific tool, or a specific set of tasks — and charge accordingly. Generalist VAs compete on price. Specialists do not.',
    category: 'Services',
    difficulty: 'Beginner',
    startupCost: '£0-500',
    timeToFirstRevenue: 'This week',
    workStyle: 'From home',
    startThisWeekend: true,
    href: '/start/business-ideas/virtual-assistant',
  },
  {
    slug: 'seo-consultancy',
    title: 'SEO Consultancy',
    description:
      'Help businesses rank higher in Google search results through technical audits, content strategy, and link building. This is a skill that takes time to learn properly but pays well once you can demonstrate results. One case study showing a meaningful traffic increase is enough to get your first client.',
    category: 'Services',
    difficulty: 'Intermediate',
    startupCost: '£0-500',
    timeToFirstRevenue: 'This month',
    workStyle: 'From home',
    startThisWeekend: false,
    href: '/start/business-ideas/seo-consultancy',
  },
  {
    slug: 'video-editing-service',
    title: 'Video Editing Service',
    description:
      "Edit raw footage into polished content for YouTubers, course creators, and businesses producing video marketing. Demand is exploding as more people and brands commit to video. If you are fast, consistent, and can match a creator's style, you will never run out of work.",
    category: 'Services',
    difficulty: 'Intermediate',
    startupCost: '£0-500',
    timeToFirstRevenue: 'This week',
    workStyle: 'From home',
    startThisWeekend: true,
    href: '/start/business-ideas/video-editing-service',
  },
  {
    slug: 'brand-identity-design',
    title: 'Brand Identity Design',
    description:
      'Create logos, colour palettes, typography systems, and visual brand guidelines for new businesses and established ones that have outgrown their original look. This is project-based work with clear deliverables, which makes scoping and pricing straightforward once you have a process.',
    category: 'Services',
    difficulty: 'Intermediate',
    startupCost: '£0-500',
    timeToFirstRevenue: 'This month',
    workStyle: 'From home',
    startThisWeekend: false,
    href: '/start/business-ideas/brand-identity-design',
  },
  {
    slug: 'paid-ads-management',
    title: 'Paid Ads Management',
    description:
      'Run Google, Meta, or LinkedIn ad campaigns for businesses that want to buy their growth rather than earn it slowly. This is one of the highest-value services a solo operator can offer because the results are measurable and the skill is genuinely difficult to learn. ROI-focused clients pay well and stay long.',
    category: 'Services',
    difficulty: 'Advanced',
    startupCost: '£0-500',
    timeToFirstRevenue: 'This month',
    workStyle: 'From home',
    startThisWeekend: false,
    href: '/start/business-ideas/paid-ads-management',
  },
  {
    slug: 'cleaning-service',
    title: 'Cleaning Service',
    description:
      'Offer residential or commercial cleaning on a recurring basis. Low barrier to entry, immediate demand, and recurring revenue from day one if you price and position correctly. The real opportunity is in end-of-tenancy, post-construction, or specialist cleaning where you can charge a significant premium.',
    category: 'Services',
    difficulty: 'Beginner',
    startupCost: '£0-500',
    timeToFirstRevenue: 'This week',
    workStyle: 'In person',
    startThisWeekend: true,
    href: '/start/business-ideas/cleaning-service',
  },

  // ─── PHYSICAL PRODUCTS (5) ───────────────────────────────────

  {
    slug: 'handmade-candles',
    title: 'Handmade Candles',
    description:
      'Make and sell scented candles through Etsy, local markets, and your own online store. Low startup cost, strong gift market, and good margins if you develop signature scents and memorable packaging. The ceiling is limited by production time unless you systematise your process or move to wholesale.',
    category: 'Physical Products',
    difficulty: 'Beginner',
    startupCost: '£500-2K',
    timeToFirstRevenue: 'This month',
    workStyle: 'From home',
    startThisWeekend: false,
    href: '/start/business-ideas/handmade-candles',
  },
  {
    slug: 'print-on-demand',
    title: 'Print on Demand',
    description:
      'Design and sell custom products — t-shirts, mugs, tote bags, prints — without holding any stock. A third-party supplier prints and ships each order when it is placed. Low risk, low margin, but a real business if you find a niche audience with strong identity and something worth saying on a t-shirt.',
    category: 'Physical Products',
    difficulty: 'Beginner',
    startupCost: '£0-500',
    timeToFirstRevenue: 'This month',
    workStyle: 'From home',
    startThisWeekend: false,
    href: '/start/business-ideas/print-on-demand',
  },
  {
    slug: 'reselling-and-flipping',
    title: 'Reselling and Flipping',
    description:
      'Buy undervalued items — furniture, electronics, clothing, collectibles — and resell them for a profit on eBay, Facebook Marketplace, Vinted, or Depop. This is one of the fastest ways to generate cash without any business infrastructure. The skill is in knowing what to buy, not just how to sell.',
    category: 'Physical Products',
    difficulty: 'Beginner',
    startupCost: '£0-500',
    timeToFirstRevenue: 'This week',
    workStyle: 'Either',
    startThisWeekend: true,
    href: '/start/business-ideas/reselling-and-flipping',
  },
  {
    slug: 'food-and-drink-products',
    title: 'Food and Drink Products',
    description:
      'Produce and sell a food or drink product — hot sauce, jam, baked goods, spice blends, or speciality tea — starting at local markets and building toward independent retailers and your own online shop. Regulations add complexity but also create a natural barrier to entry that protects you once you are established.',
    category: 'Physical Products',
    difficulty: 'Intermediate',
    startupCost: '£500-2K',
    timeToFirstRevenue: 'This month',
    workStyle: 'Either',
    startThisWeekend: false,
    href: '/start/business-ideas/food-and-drink-products',
  },
  {
    slug: 'handmade-jewellery',
    title: 'Handmade Jewellery',
    description:
      'Design and make jewellery by hand — rings, necklaces, earrings, bracelets — and sell through Etsy, Instagram, and craft fairs. A saturated market overall, but strong niches exist: personalised pieces, sustainable materials, wedding jewellery, and cultural or heritage designs all command higher prices and loyal buyers.',
    category: 'Physical Products',
    difficulty: 'Beginner',
    startupCost: '£500-2K',
    timeToFirstRevenue: 'This month',
    workStyle: 'From home',
    startThisWeekend: false,
    href: '/start/business-ideas/handmade-jewellery',
  },

  // ─── DIGITAL PRODUCTS (6) ────────────────────────────────────

  {
    slug: 'notion-templates',
    title: 'Notion Templates',
    description:
      'Build and sell pre-made Notion workspaces for specific use cases — project management, content planning, life admin, business dashboards. Create once, sell indefinitely. The market is crowded at the generic end but underserved for specific professional niches where buyers will pay £30-£150 for something that solves a real problem.',
    category: 'Digital Products',
    difficulty: 'Beginner',
    startupCost: '£0-500',
    timeToFirstRevenue: 'This month',
    workStyle: 'From home',
    startThisWeekend: false,
    href: '/start/business-ideas/notion-templates',
  },
  {
    slug: 'stock-photography',
    title: 'Stock Photography',
    description:
      'License your photos through stock platforms like Shutterstock, Adobe Stock, and Getty Images, or sell them directly to niche audiences through your own store. Passive income once uploaded, but slow to build meaningful revenue. Works best if you photograph underrepresented subjects, locations, or professional scenarios.',
    category: 'Digital Products',
    difficulty: 'Beginner',
    startupCost: '£0-500',
    timeToFirstRevenue: '3-6 months',
    workStyle: 'Either',
    startThisWeekend: false,
    href: '/start/business-ideas/stock-photography',
  },
  {
    slug: 'ebook-or-guide',
    title: 'Ebook or Practical Guide',
    description:
      'Package your knowledge into a downloadable PDF or ebook and sell it through Gumroad, your own site, or Amazon KDP. The mistake most people make is writing what they know rather than what people are actively searching for. Solve a specific problem for a specific person and price it accordingly.',
    category: 'Digital Products',
    difficulty: 'Beginner',
    startupCost: '£0-500',
    timeToFirstRevenue: 'This month',
    workStyle: 'From home',
    startThisWeekend: false,
    href: '/start/business-ideas/ebook-or-guide',
  },
  {
    slug: 'spreadsheet-templates',
    title: 'Spreadsheet Templates',
    description:
      'Build functional Google Sheets or Excel templates for business owners, freelancers, and professionals who need to track, calculate, or plan something specific. Budgets, pricing calculators, content calendars, project trackers. Highly practical products that buyers use immediately — which means fewer refund requests and more repeat purchases.',
    category: 'Digital Products',
    difficulty: 'Beginner',
    startupCost: '£0-500',
    timeToFirstRevenue: 'This month',
    workStyle: 'From home',
    startThisWeekend: false,
    href: '/start/business-ideas/spreadsheet-templates',
  },
  {
    slug: 'digital-art-and-illustrations',
    title: 'Digital Art and Illustrations',
    description:
      'Create and sell original digital artwork, illustrations, or design assets through your own store, Creative Market, or Etsy. Wall art prints, social media templates, icon sets, and pattern libraries all have real markets. The ceiling depends entirely on whether you build an audience or rely on platform discovery.',
    category: 'Digital Products',
    difficulty: 'Intermediate',
    startupCost: '£0-500',
    timeToFirstRevenue: 'This month',
    workStyle: 'From home',
    startThisWeekend: false,
    href: '/start/business-ideas/digital-art-and-illustrations',
  },
  {
    slug: 'lightroom-presets',
    title: 'Lightroom Presets and Photo Filters',
    description:
      'Create and sell Lightroom presets that give photographers and content creators a consistent visual style with one click. Strong demand from travel bloggers, wedding photographers, and Instagram creators. Low production cost, instant delivery, and easily bundled into packs that increase average order value.',
    category: 'Digital Products',
    difficulty: 'Beginner',
    startupCost: '£0-500',
    timeToFirstRevenue: 'This month',
    workStyle: 'From home',
    startThisWeekend: false,
    href: '/start/business-ideas/lightroom-presets',
  },

  // ─── KNOWLEDGE & EDUCATION (7) ───────────────────────────────

  {
    slug: 'online-course',
    title: 'Online Course',
    description:
      'Teach a skill or process through a structured video course hosted on Teachable, Kajabi, or your own platform. The biggest mistake is building the course before validating that people will pay for it. Sell the outcome first, build the content second. A small engaged audience is worth more than a polished course with no buyers.',
    category: 'Knowledge & Education',
    difficulty: 'Intermediate',
    startupCost: '£0-500',
    timeToFirstRevenue: 'This month',
    workStyle: 'From home',
    startThisWeekend: false,
    href: '/start/business-ideas/online-course',
  },
  {
    slug: 'one-to-one-coaching',
    title: 'One-to-One Coaching',
    description:
      'Coach individuals through a specific transformation — career change, business growth, fitness, mindset, relationships. The fastest way to earn from your expertise. No course to build, no audience required. One paying client this week is entirely achievable if you have relevant experience and can articulate a clear outcome.',
    category: 'Knowledge & Education',
    difficulty: 'Beginner',
    startupCost: '£0-500',
    timeToFirstRevenue: 'This week',
    workStyle: 'From home',
    startThisWeekend: true,
    href: '/start/business-ideas/one-to-one-coaching',
  },
  {
    slug: 'group-coaching-programme',
    title: 'Group Coaching Programme',
    description:
      'Run a structured programme for a small cohort of people going through the same transformation at the same time. More leveraged than one-to-one — you earn more per hour and clients benefit from peer accountability. Requires an audience or network to fill cohorts, which is the main constraint at the start.',
    category: 'Knowledge & Education',
    difficulty: 'Intermediate',
    startupCost: '£0-500',
    timeToFirstRevenue: 'This month',
    workStyle: 'From home',
    startThisWeekend: false,
    href: '/start/business-ideas/group-coaching-programme',
  },
  {
    slug: 'workshops-and-masterclasses',
    title: 'Workshops and Masterclasses',
    description:
      'Run live sessions — online or in person — that teach a specific skill in a single sitting. Lower commitment for attendees means easier to sell than a full course. Great for testing content before you build something longer. Repeat the same workshop monthly and it becomes a reliable revenue stream.',
    category: 'Knowledge & Education',
    difficulty: 'Beginner',
    startupCost: '£0-500',
    timeToFirstRevenue: 'This month',
    workStyle: 'Either',
    startThisWeekend: false,
    href: '/start/business-ideas/workshops-and-masterclasses',
  },
  {
    slug: 'tutoring',
    title: 'Tutoring',
    description:
      'Teach academic subjects, professional skills, or languages to individuals or small groups. One of the oldest service businesses in existence and still one of the most reliable. Demand for GCSE and A-level tutoring in the UK is consistently strong, and specialist subject tutors can charge £60-£100 per hour.',
    category: 'Knowledge & Education',
    difficulty: 'Beginner',
    startupCost: '£0-500',
    timeToFirstRevenue: 'This week',
    workStyle: 'Either',
    startThisWeekend: true,
    href: '/start/business-ideas/tutoring',
  },
  {
    slug: 'consulting',
    title: 'Consulting',
    description:
      'Sell your strategic expertise to businesses facing a specific problem you have solved before. Higher day rates than most service businesses because you are selling answers, not hours. The challenge is credibility — consulting without a track record is a hard sell. Use case studies, referrals, and a clear point of view to open doors.',
    category: 'Knowledge & Education',
    difficulty: 'Advanced',
    startupCost: '£0-500',
    timeToFirstRevenue: 'This month',
    workStyle: 'Either',
    startThisWeekend: false,
    href: '/start/business-ideas/consulting',
  },
  {
    slug: 'cohort-based-course',
    title: 'Cohort-Based Course',
    description:
      'Run a time-limited, structured learning programme where a group of students go through the material together with live sessions, assignments, and community support. Higher completion rates than self-paced courses, higher price points, and stronger word-of-mouth. Requires real teaching presence and operational effort each time you run it.',
    category: 'Knowledge & Education',
    difficulty: 'Advanced',
    startupCost: '£0-500',
    timeToFirstRevenue: '3-6 months',
    workStyle: 'From home',
    startThisWeekend: false,
    href: '/start/business-ideas/cohort-based-course',
  },

  // ─── CONTENT & MEDIA (5) ─────────────────────────────────────

  {
    slug: 'newsletter',
    title: 'Paid Newsletter',
    description:
      'Write a newsletter that people pay to receive. Substack and Beehiiv have made this easier than ever to start. The model works when you have a specific angle, a consistent publishing schedule, and an audience who trusts your judgement. Free to start, slow to monetise, but one of the most defensible media businesses a solo founder can build.',
    category: 'Content & Media',
    difficulty: 'Intermediate',
    startupCost: '£0-500',
    timeToFirstRevenue: '3-6 months',
    workStyle: 'From home',
    startThisWeekend: false,
    href: '/start/business-ideas/newsletter',
  },
  {
    slug: 'youtube-channel',
    title: 'YouTube Channel',
    description:
      'Build a channel around a specific topic and monetise through AdSense, sponsorships, affiliate links, and your own products. The longest runway of any content business — expect 12-18 months before meaningful income. But the compounding effect of a back catalogue of videos is one of the most powerful assets a solo creator can own.',
    category: 'Content & Media',
    difficulty: 'Intermediate',
    startupCost: '£0-500',
    timeToFirstRevenue: '12+ months',
    workStyle: 'From home',
    startThisWeekend: false,
    href: '/start/business-ideas/youtube-channel',
  },
  {
    slug: 'podcast',
    title: 'Podcast',
    description:
      'Launch an audio show around a niche topic and build an audience through consistent publishing and smart distribution. Podcasts are hard to monetise through ads alone at small scale, but exceptional for building trust, authority, and relationships that convert to consulting clients, course buyers, and community members.',
    category: 'Content & Media',
    difficulty: 'Intermediate',
    startupCost: '£500-2K',
    timeToFirstRevenue: '12+ months',
    workStyle: 'From home',
    startThisWeekend: false,
    href: '/start/business-ideas/podcast',
  },
  {
    slug: 'blog-and-affiliate-site',
    title: 'Blog and Affiliate Site',
    description:
      'Build a content site that ranks in search engines and earns commission by recommending products and services your readers are already looking to buy. Slow to build, significant upfront effort, but genuinely passive once established. The key is choosing a niche with strong affiliate programmes and clear buyer intent search terms.',
    category: 'Content & Media',
    difficulty: 'Intermediate',
    startupCost: '£0-500',
    timeToFirstRevenue: '12+ months',
    workStyle: 'From home',
    startThisWeekend: false,
    href: '/start/business-ideas/blog-and-affiliate-site',
  },
  {
    slug: 'social-media-creator',
    title: 'Social Media Creator',
    description:
      'Build an audience on one platform — Instagram, TikTok, LinkedIn, X — around a specific topic and monetise through brand deals, digital products, and affiliate partnerships. Platform dependency is the main risk. Treat it as a distribution channel that feeds something you own — a newsletter, a course, a community.',
    category: 'Content & Media',
    difficulty: 'Intermediate',
    startupCost: '£0-500',
    timeToFirstRevenue: '12+ months',
    workStyle: 'From home',
    startThisWeekend: false,
    href: '/start/business-ideas/social-media-creator',
  },

  // ─── SAAS & SOFTWARE (4) ─────────────────────────────────────

  {
    slug: 'micro-saas-tool',
    title: 'Micro-SaaS Tool',
    description:
      'Build a small, focused software tool that solves one specific problem for a defined audience and charges a monthly subscription. Unlike full SaaS products, micro-SaaS is scoped to what one person can build and maintain. The best opportunities are workflow problems that exist inside tools people already use every day.',
    category: 'SaaS & Software',
    difficulty: 'Advanced',
    startupCost: '£0-500',
    timeToFirstRevenue: '3-6 months',
    workStyle: 'From home',
    startThisWeekend: false,
    href: '/start/business-ideas/micro-saas-tool',
  },
  {
    slug: 'browser-extension',
    title: 'Browser Extension',
    description:
      'Build a Chrome or Firefox extension that adds a useful function to a website or workflow people use every day. Extensions are faster to build than full applications and benefit from distribution through the Chrome Web Store. Monetise through a one-time purchase, a subscription, or by building an audience that buys your other products.',
    category: 'SaaS & Software',
    difficulty: 'Advanced',
    startupCost: '£0-500',
    timeToFirstRevenue: '3-6 months',
    workStyle: 'From home',
    startThisWeekend: false,
    href: '/start/business-ideas/browser-extension',
  },
  {
    slug: 'api-or-integration-tool',
    title: 'API or Integration Tool',
    description:
      'Build a connector that makes two pieces of software work together in a way they do not natively. Businesses running multiple tools often have painful gaps between them. If you can identify a common integration that does not exist — or does not exist well — you have a product with clear, immediate value and easy ROI to articulate.',
    category: 'SaaS & Software',
    difficulty: 'Advanced',
    startupCost: '£0-500',
    timeToFirstRevenue: '3-6 months',
    workStyle: 'From home',
    startThisWeekend: false,
    href: '/start/business-ideas/api-or-integration-tool',
  },
  {
    slug: 'no-code-saas',
    title: 'No-Code SaaS',
    description:
      'Build a software product using no-code tools like Bubble, Glide, or Softr without writing a line of code. The ceiling is lower than a fully coded product but the speed to market is dramatically faster. Ideal for validating a SaaS idea before investing in a technical build — or for building something simple that stays simple.',
    category: 'SaaS & Software',
    difficulty: 'Intermediate',
    startupCost: '£500-2K',
    timeToFirstRevenue: '3-6 months',
    workStyle: 'From home',
    startThisWeekend: false,
    href: '/start/business-ideas/no-code-saas',
  },

  // ─── COMMUNITY (4) ───────────────────────────────────────────

  {
    slug: 'paid-membership-community',
    title: 'Paid Membership Community',
    description:
      'Build a private community around a shared identity, goal, or challenge and charge a monthly or annual membership fee. Platforms like Circle and Skool make the infrastructure straightforward. The hard part is not the platform — it is creating enough ongoing value to keep members renewing month after month.',
    category: 'Community',
    difficulty: 'Intermediate',
    startupCost: '£0-500',
    timeToFirstRevenue: 'This month',
    workStyle: 'From home',
    startThisWeekend: false,
    href: '/start/business-ideas/paid-membership-community',
  },
  {
    slug: 'mastermind-group',
    title: 'Mastermind Group',
    description:
      'Facilitate a small group of peers — typically 6 to 12 people — who meet regularly to share challenges, hold each other accountable, and provide strategic input. High-value, high-price, low overhead. The right mastermind with the right people can command £500-£2,000 per person per month and retain members for years.',
    category: 'Community',
    difficulty: 'Intermediate',
    startupCost: '£0-500',
    timeToFirstRevenue: 'This month',
    workStyle: 'From home',
    startThisWeekend: false,
    href: '/start/business-ideas/mastermind-group',
  },
  {
    slug: 'local-events-and-meetups',
    title: 'Local Events and Meetups',
    description:
      'Organise regular in-person events for a specific professional or interest community in your city. Monetise through ticket sales, sponsorship, membership tiers, or by using the community as a pipeline for your other services. Events are underrated as a business model — people pay for belonging and access in ways they will not pay for content.',
    category: 'Community',
    difficulty: 'Beginner',
    startupCost: '£0-500',
    timeToFirstRevenue: 'This month',
    workStyle: 'In person',
    startThisWeekend: false,
    href: '/start/business-ideas/local-events-and-meetups',
  },
  {
    slug: 'cohort-community',
    title: 'Cohort Community',
    description:
      'Combine structured learning with community by running time-limited programmes where participants go through a curriculum together and stay connected afterwards. The cohort creates urgency and social accountability. The ongoing community creates retention and recurring revenue. A powerful combination when executed well.',
    category: 'Community',
    difficulty: 'Advanced',
    startupCost: '£0-500',
    timeToFirstRevenue: '3-6 months',
    workStyle: 'From home',
    startThisWeekend: false,
    href: '/start/business-ideas/cohort-community',
  },
]

export const categories = [
  'Services',
  'Physical Products',
  'Digital Products',
  'Knowledge & Education',
  'Content & Media',
  'SaaS & Software',
  'Community',
] as const

export const difficulties = ['Beginner', 'Intermediate', 'Advanced'] as const

export const startupCosts = ['£0-500', '£500-2K', '£2K+'] as const

export const timeToFirstRevenueOptions = [
  'This week',
  'This month',
  '3-6 months',
  '12+ months',
] as const

export const workStyles = ['From home', 'In person', 'Either'] as const

export const incomeGuide = [
  {
    category: 'Services',
    startingIncome: '£1,500–£3,000/month',
    timeToFirstRevenue: '1–4 weeks',
    incomeCeiling: '£8,000–£15,000/month',
    limitedBy: 'Your time',
    honestTake:
      'Fastest path to income. Hard ceiling without leverage.',
  },
  {
    category: 'Physical Products',
    startingIncome: '£500–£2,000/month',
    timeToFirstRevenue: '2–8 weeks',
    incomeCeiling: '£5,000–£20,000/month',
    limitedBy: 'Production and fulfilment',
    honestTake:
      'Tangible but complex. Margins matter more than revenue.',
  },
  {
    category: 'Digital Products',
    startingIncome: '£0–£500/month (first 6 months)',
    timeToFirstRevenue: '1–12 months',
    incomeCeiling: 'Unlimited',
    limitedBy: 'Audience size',
    honestTake:
      'High ceiling. Slow without an audience.',
  },
  {
    category: 'Knowledge & Education',
    startingIncome: '£1,000–£3,000/month',
    timeToFirstRevenue: '2–6 weeks',
    incomeCeiling: '£10,000–£30,000/month',
    limitedBy: 'Your credibility and audience',
    honestTake:
      'Strong model if you have proven expertise to share.',
  },
  {
    category: 'Content & Media',
    startingIncome: '£0–£200/month (first 12 months)',
    timeToFirstRevenue: '6–18 months',
    incomeCeiling: 'Unlimited',
    limitedBy: 'Audience and distribution',
    honestTake:
      'Highest ceiling. Longest runway. Not for the impatient.',
  },
  {
    category: 'SaaS & Software',
    startingIncome: '£0 (first 6–12 months)',
    timeToFirstRevenue: '3–12 months',
    incomeCeiling: 'Unlimited',
    limitedBy: 'Distribution and marketing',
    honestTake:
      'Highest ceiling. Longest runway needed. Technical skill required.',
  },
  {
    category: 'Community',
    startingIncome: '£500–£1,500/month',
    timeToFirstRevenue: '4–12 weeks',
    incomeCeiling: '£5,000–£20,000/month',
    limitedBy: 'Member acquisition and retention',
    honestTake:
      'Underrated model. Hard to start. Powerful once it has momentum.',
  },
]

export default businessIdeas
