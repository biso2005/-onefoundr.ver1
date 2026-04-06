import type { Metadata } from 'next'
import {
	Lightbulb,
	Search,
	BarChart3,
	Target,
	DollarSign,
	Scale,
	Calendar,
} from 'lucide-react'
import CategoryHub from '@/components/CategoryHub'

export const metadata: Metadata = {
	title: 'The Spark — Start Solo',
	description:
		'Find your idea, validate it fast, and take your first steps without wasting months overthinking.',
}

export default function TheSparkPage() {
	return (
		<CategoryHub
			title="The Spark"
			tagline="Pillar 1 — Start Solo"
			description="Find your idea, validate it fast, and take your first steps. No overthinking. No analysis paralysis. Just clear steps from zero to started."
			icon={Lightbulb}
			gradient="from-orange-500 to-amber-500"
			intro="Most people never start because they spend too long getting ready to get ready. This section cuts through that. You will find your idea, test it cheaply, understand your options, and take your first real steps — in the right order."
			spokes={[
				{
					title: 'Business Ideas',
					description:
						'Browse 41 proven business ideas for solo founders. Filtered by startup cost, skill level, and income potential.',
					href: '/start/business-ideas',
					icon: Lightbulb,
					gradient: 'from-orange-500 to-amber-500',
					badge: '41 Ideas',
				},
				{
					title: 'Idea Validation',
					description:
						'A 5-step system to know if your idea has legs before you spend a penny building it.',
					href: '/start/idea-validation',
					icon: Search,
					gradient: 'from-teal-600 to-emerald-500',
					badge: '5-Step System',
				},
				{
					title: 'Business Models',
					description:
						'The 8 business models that work for solo founders — and 3 to avoid. Compare them side by side.',
					href: '/start/business-models',
					icon: BarChart3,
					gradient: 'from-amber-500 to-orange-600',
					badge: '8 Models',
				},
				{
					title: 'Niche Selection',
					description:
						'Stop trying to serve everyone. Find the specific niche where you can win — and own it.',
					href: '/start/niche-selection',
					icon: Target,
					gradient: 'from-teal-700 to-teal-500',
				},
				{
					title: 'Startup Costs',
					description:
						'Exactly how much does it cost to start? Broken down by business type with real numbers.',
					href: '/start/startup-costs',
					icon: DollarSign,
					gradient: 'from-orange-400 to-rose-500',
					badge: 'Real Numbers',
				},
				{
					title: 'Legal Setup',
					description:
						'Sole trader vs limited company. Contracts, insurance, and the legal basics every solo founder needs.',
					href: '/start/legal-setup',
					icon: Scale,
					gradient: 'from-amber-400 to-teal-600',
				},
				{
					title: 'First 90 Days',
					description:
						'A clear action plan for your first three months. No fluff — just what to do, in order, from day one.',
					href: '/start/first-90-days',
					icon: Calendar,
					gradient: 'from-teal-600 to-emerald-400',
					badge: 'Action Plan',
				},
			]}
		/>
	)
}

