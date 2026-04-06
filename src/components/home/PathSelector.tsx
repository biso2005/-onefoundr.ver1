import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { paths } from '@/data/paths'
import CategoryIcon from '@/components/CategoryIcon'

export default function PathSelector() {
	return (
		<section className="py-16 md:py-20 bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

				{/* Section Header */}
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						Where are you right now?
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						Pick your stage. Get a curated path built around where you actually are — 
						not where someone thinks you should be.
					</p>
				</div>

				{/* Path Cards */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{paths.map((path) => (
						<Link
							key={path.id}
							href={path.href}
							className="group bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-lg hover:border-gray-200 transition-all duration-200 flex flex-col"
						>
							{/* Icon */}
							<div className="mb-6">
								<CategoryIcon
									icon={path.icon}
									gradient={path.gradient}
									size="lg"
								/>
							</div>

							{/* Stage */}
							<h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
								{path.stage}
							</h3>

							{/* Description */}
							<p className="text-gray-600 leading-relaxed mb-4">
								{path.description}
							</p>

							{/* Detail tag */}
							<p className="text-sm font-semibold text-gray-400 mb-6 italic">
								{path.detail}
							</p>

							{/* Quick links */}
							<div className="mt-auto flex flex-col gap-2 mb-6">
								{path.links.map((link) => (
									<span
										key={link.href}
										className="text-sm text-blue-600 hover:text-purple-600 transition-colors flex items-center gap-1"
									>
										<span className="w-1 h-1 rounded-full bg-blue-400 flex-shrink-0" />
										{link.label}
									</span>
								))}
							</div>

							{/* CTA */}
							<div className="flex items-center gap-2 text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
								<span>Explore this path</span>
								<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
							</div>
						</Link>
					))}
				</div>

			</div>
		</section>
	)
}

