export interface NavLink {
	label: string
	href: string
}

export interface NavItem {
	label: string
	href: string
	children?: NavLink[]
}

export const mainNav: NavItem[] = [
	{
		label: 'Start Here',
		href: '/start-here',
	},
	{
		label: 'Explore',
		href: '/#pillars',
		children: [
			{ label: 'The Spark — Start Solo', href: '/start' },
			{ label: 'The Offer — What to Sell', href: '/offer' },
			{ label: 'The Engine — Get Clients', href: '/sales' },
			{ label: 'The Shield — Stay Protected', href: '/shield' },
			{ label: 'The Leverage — Scale Smart', href: '/leverage' },
			{ label: 'The Foundation — Stay the Course', href: '/foundation' },
		],
	},
	{
		label: 'Newsletter',
		href: '/newsletter',
	},
]

export const footerNav = {
	company: [
		{ label: 'About', href: '/about' },
		{ label: 'Contact', href: '/contact' },
		{ label: 'Newsletter', href: '/newsletter' },
	],
	pillars: [
		{ label: 'The Spark', href: '/start' },
		{ label: 'The Offer', href: '/offer' },
		{ label: 'The Engine', href: '/sales' },
		{ label: 'The Shield', href: '/shield' },
		{ label: 'The Leverage', href: '/leverage' },
		{ label: 'The Foundation', href: '/foundation' },
	],
	legal: [
		{ label: 'Privacy Policy', href: '/privacy' },
		{ label: 'Terms of Use', href: '/terms' },
	],
}
