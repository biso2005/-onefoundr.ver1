// Icons are referenced by name (string) to avoid passing functions
// between server and client components.

export interface Path {
	id: string
	stage: string
	description: string
	detail: string
	href: string
	icon: string
	gradient: string
	links: {
		label: string
		href: string
	}[]
}

export const paths: Path[] = [
	{
		id: 'idea',
		stage: 'I have an idea but haven\'t started',
		description: 'Turn your idea into a real business without quitting your job prematurely.',
		detail: 'Validate first. Build second. Launch third.',
		href: '/start',
		icon: 'Lightbulb',
		gradient: 'from-orange-500 to-amber-500',
		links: [
			{ label: 'Validate your idea', href: '/start/idea-validation' },
			{ label: 'Choose a business model', href: '/start/business-models' },
			{ label: 'Calculate startup costs', href: '/start/startup-costs' },
		],
	},
	{
		id: 'started',
		stage: 'I\'ve started but need clients',
		description: 'You\'ve built something. Now you need people to pay for it.',
		detail: 'Stop tweaking. Start selling.',
		href: '/sales',
		icon: 'Users',
		gradient: 'from-teal-700 to-emerald-500',
		links: [
			{ label: 'Build your offer', href: '/offer' },
			{ label: 'Get your first client', href: '/sales' },
			{ label: 'Set your pricing', href: '/offer/pricing-strategy' },
		],
	},
	{
		id: 'growing',
		stage: 'I have clients but want to grow',
		description: 'You\'re making money. Now make it work harder for you.',
		detail: 'Systems. Leverage. Freedom.',
		href: '/leverage',
		icon: 'TrendingUp',
		gradient: 'from-amber-500 to-orange-600',
		links: [
			{ label: 'Build recurring revenue', href: '/offer/recurring-revenue' },
			{ label: 'Create leverage', href: '/leverage' },
			{ label: 'Protect what you\'ve built', href: '/shield' },
		],
	},
]
