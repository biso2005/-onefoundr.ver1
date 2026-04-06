import type { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import CategoryIcon from '@/components/CategoryIcon'
import NewsletterCTA from '@/components/NewsletterCTA'

interface HubLink {
	title: string
	description: string
	href: string
	icon?: LucideIcon
	gradient?: string
	badge?: string
}

interface CategoryHubProps {
	title: string
	tagline: string
	description: string
	icon: LucideIcon
	gradient: string
	intro?: string
	spokes: HubLink[]
	children?: React.ReactNode
}

export default function CategoryHub({
	title,
	tagline,
	description,
	icon,
	gradient,
	intro,
	spokes,
	children,
}: CategoryHubProps) {
	return (
		<div className="min-h-screen bg-white">

			{/* Hub Hero */}
			<section className="relative overflow-hidden bg-[#1A1A1A] pt-16 pb-20 md:pt-24 md:pb-28">

				{/* Background glow */}
				<div className="absolute inset-0 pointer-events-none overflow-hidden">
					<div className={`absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br ${gradient} opacity-10 blur-3xl`} />
					<div className={`absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-br ${gradient} opacity-10 blur-3xl`} />
				</div>

				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="max-w-3xl">

						{/* Icon + Tagline */}
						<div className="flex items-center gap-4 mb-6">
							<CategoryIcon icon={icon} gradient={gradient} size="lg" />
							<span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
								{tagline}
							</span>
						</div>

						{/* Title */}
						<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
							{title}
						</h1>

						{/* Description */}
						<p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
							{description}
						</p>

					</div>
				</div>
			</section>

			{/* Intro text */}
			{intro && (
				<section className="py-12 border-b border-gray-100">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
							{intro}
						</p>
					</div>
				</section>
			)}

			{/* Spokes Grid */}
			<section className="py-16 md:py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

					<h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">
						Everything in this section
					</h2>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{spokes.map((spoke) => (
							<Link
								key={spoke.href}
								href={spoke.href}
								className="group bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:border-gray-200 transition-all duration-200 flex flex-col"
							>
								{/* Icon if provided */}
								{spoke.icon && spoke.gradient && (
									<div className="mb-4">
										<CategoryIcon
											icon={spoke.icon}
											gradient={spoke.gradient}
											size="sm"
										/>
									</div>
								)}

								{/* Badge if provided */}
								{spoke.badge && (
									<span className="inline-block text-xs font-semibold bg-orange-50 text-orange-600 px-3 py-1 rounded-full mb-3 w-fit">
										{spoke.badge}
									</span>
								)}

								{/* Title */}
								<h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
									{spoke.title}
								</h3>

								{/* Description */}
								<p className="text-gray-600 text-sm leading-relaxed flex-1">
									{spoke.description}
								</p>

								{/* Arrow */}
								<div className="mt-4 flex items-center gap-1 text-sm font-semibold text-gray-400 group-hover:text-orange-500 transition-colors">
									<span>Read guide</span>
									<svg
										className="w-4 h-4 group-hover:translate-x-1 transition-transform"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth={2}
									>
										<path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
									</svg>
								</div>
							</Link>
						))}
					</div>
				</div>
			</section>

			{/* Additional content slot */}
			{children && (
				<section className="pb-16">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						{children}
					</div>
				</section>
			)}

			{/* Newsletter */}
			<NewsletterCTA />

		</div>
	)
}
