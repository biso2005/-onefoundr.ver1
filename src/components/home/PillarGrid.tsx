import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { pillars } from '@/data/pillars'
import CategoryIcon from '@/components/CategoryIcon'

export default function PillarGrid() {
	return (
		<section id="pillars" className="py-16 md:py-20 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

				{/* Section Header */}
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						Everything you need to build solo
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						Six pillars. Every stage of the journey. From first idea to 
						full independence — we cover it all.
					</p>
				</div>

				{/* Pillar Cards Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{pillars.map((pillar) => (
						<Link
							key={pillar.id}
							href={pillar.href}
							className="group bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:border-gray-200 transition-all duration-200 flex flex-col"
						>
							{/* Icon + Tagline row */}
							<div className="flex items-center gap-4 mb-4">
								<CategoryIcon
									icon={pillar.icon}
									gradient={pillar.gradient}
									size="md"
								/>
								<div>
									<p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
										{pillar.tagline}
									</p>
									<h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
										{pillar.name}
									</h3>
								</div>
							</div>

							{/* Description */}
							<p className="text-gray-600 text-sm leading-relaxed mb-5">
								{pillar.description}
							</p>

							{/* Spokes preview */}
							<div className="mt-auto mb-5 flex flex-wrap gap-2">
								{pillar.spokes.slice(0, 3).map((spoke) => (
									<span
										key={spoke}
										className="text-xs bg-gray-50 text-gray-600 px-3 py-1 rounded-full border border-gray-100"
									>
										{spoke}
									</span>
								))}
								{pillar.spokes.length > 3 && (
									<span className="text-xs bg-gray-50 text-gray-400 px-3 py-1 rounded-full border border-gray-100">
										+{pillar.spokes.length - 3} more
									</span>
								)}
							</div>

							{/* CTA */}
							<div className="flex items-center gap-2 text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
								<span>Explore {pillar.name}</span>
								<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
							</div>
						</Link>
					))}
				</div>

			</div>
		</section>
	)
}

