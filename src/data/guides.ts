export interface Guide {
	id: string
	title: string
	excerpt: string
	href: string
	category: string
	pillar: string
	readTime: number
	gradient: string
	featured: boolean
}

export const guides: Guide[] = [
	{
		id: 'validate-idea',
		title: 'How to Validate a Business Idea in 7 Days (Without Quitting Your Job)',
		excerpt: 'Most founders spend months building something nobody wants. Here\'s a repeatable system to know if your idea has legs — in one week.',
		href: '/start/idea-validation',
		category: 'Idea Validation',
		pillar: 'The Spark',
		readTime: 12,
		gradient: 'from-orange-500 to-amber-500',
		featured: true,
	},
	{
		id: 'business-models',
		title: 'The 8 Business Models That Work for Solo Founders (And 3 to Avoid)',
		excerpt: 'Not all business models are equal. Some are traps. Here\'s an honest breakdown of what actually works when you\'re building alone.',
		href: '/start/business-models',
		category: 'Business Models',
		pillar: 'The Spark',
		readTime: 15,
		gradient: 'from-teal-700 to-emerald-500',
		featured: true,
	},
	{
		id: 'pricing-strategy',
		title: 'How to Price Your Services So Clients Say Yes (Without Underselling)',
		excerpt: 'Pricing is not about what feels comfortable. It\'s about what the market will bear and what you\'re worth. Here\'s how to find that number.',
		href: '/offer/pricing-strategy',
		category: 'Pricing Strategy',
		pillar: 'The Offer',
		readTime: 10,
		gradient: 'from-amber-500 to-orange-600',
		featured: true,
	},
]

export const featuredGuides = guides.filter(g => g.featured)
