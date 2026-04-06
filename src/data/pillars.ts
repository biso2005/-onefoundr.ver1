// Icons are referenced by name (string) to avoid passing functions
// between server and client components.

export interface Pillar {
	id: string
	name: string
	tagline: string
	description: string
	href: string
	icon: string
	gradient: string
	color: string
	spokes: string[]
}

export const pillars: Pillar[] = [
	{
		id: 'spark',
		name: 'The Spark',
		tagline: 'Start Solo',
		description: 'Find your idea, validate it fast, and take your first steps without wasting months overthinking.',
		href: '/start',
		icon: 'Lightbulb',
		gradient: 'from-orange-500 to-amber-500',
		color: 'text-orange-500',
		spokes: [
			'Business Ideas',
			'Idea Validation',
			'Business Models',
			'Niche Selection',
			'Startup Costs',
			'Legal Setup',
			'First 90 Days',
		],
	},
	{
		id: 'offer',
		name: 'The Offer',
		tagline: 'What to Sell',
		description: 'Build something people actually pay for. Package your skills into offers that sell themselves.',
		href: '/offer',
		icon: 'Package',
		gradient: 'from-teal-700 to-emerald-500',
		color: 'text-teal-700',
		spokes: [
			'Productized Services',
			'Digital Products',
			'Pricing Strategy',
			'Offer Packaging',
			'Positioning',
			'Pre-selling',
			'Recurring Revenue',
		],
	},
	{
		id: 'engine',
		name: 'The Engine',
		tagline: 'Get Clients',
		description: 'Build a system that brings in clients consistently — without cold calling or paid ads from day one.',
		href: '/sales',
		icon: 'Zap',
		gradient: 'from-amber-500 to-orange-600',
		color: 'text-amber-600',
		spokes: [
			'Content Marketing',
			'SEO Basics',
			'Social Media',
			'Email Marketing',
			'Sales Conversations',
			'Proposals',
			'Follow-up Systems',
		],
	},
	{
		id: 'shield',
		name: 'The Shield',
		tagline: 'Stay Protected',
		description: 'Protect your income, your business, and your sanity. The boring stuff that saves you later.',
		href: '/shield',
		icon: 'Shield',
		gradient: 'from-teal-600 to-teal-800',
		color: 'text-teal-700',
		spokes: [
			'Business Insurance',
			'Contracts',
			'Tax Planning',
			'Emergency Fund',
			'Legal Structure',
			'Cash Flow',
			'Mental Health',
		],
	},
	{
		id: 'leverage',
		name: 'The Leverage',
		tagline: 'Scale Smart',
		description: 'Earn more without working more. Build systems, products, and income streams that multiply your time.',
		href: '/leverage',
		icon: 'TrendingUp',
		gradient: 'from-orange-400 to-rose-500',
		color: 'text-orange-500',
		spokes: [
			'Productization',
			'Passive Income',
			'Automation',
			'Outsourcing',
			'Licensing',
			'Partnerships',
			'Exit Planning',
		],
	},
	{
		id: 'foundation',
		name: 'The Foundation',
		tagline: 'Stay the Course',
		description: 'The inner game of solo business. Build the mindset, habits, and resilience to keep going when it gets hard.',
		href: '/foundation',
		icon: 'Compass',
		gradient: 'from-amber-400 to-teal-600',
		color: 'text-amber-600',
		spokes: [
			'Solo Mindset',
			'Daily Routines',
			'Dealing with Doubt',
			'Motivation Systems',
			'Burnout Prevention',
			'Decision Making',
			'Long-term Vision',
		],
	},
]
