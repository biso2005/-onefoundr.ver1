import Link from 'next/link'
import { ArrowRight, Clock, BookOpen } from 'lucide-react'
import { featuredGuides } from '@/data/guides'

export default function FeaturedGuides() {
	return (
		<section className="py-16 md:py-20 bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

				{/* Section Header */}
				<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
					<div>
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							Start with these
						</h2>
						<p className="text-lg text-gray-600 max-w-xl">
							The guides every solo founder should read first. 
							Practical, direct, no fluff.
						</p>
					</div>
					<Link
						href="/start"
						className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-purple-600 transition-colors whitespace-nowrap"
					>
						View all guides
						<ArrowRight className="w-4 h-4" />
					</Link>
				</div>

				{/* Guide Cards */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{featuredGuides.map((guide) => (
						<Link
							key={guide.id}
							href={guide.href}
							className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-gray-200 transition-all duration-200 flex flex-col"
						>
							{/* Gradient Banner */}
							<div className={`h-2 bg-gradient-to-r ${guide.gradient}`} />

							<div className="p-6 flex flex-col flex-1">
								{/* Meta */}
								<div className="flex items-center gap-3 mb-4">
									<span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
										{guide.pillar}
									</span>
									<span className="text-xs text-gray-400 flex items-center gap-1">
										<Clock className="w-3 h-3" />
										{guide.readTime} min read
									</span>
								</div>

								{/* Title */}
								<h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug group-hover:text-blue-600 transition-colors">
									{guide.title}
								</h3>

								{/* Excerpt */}
								<p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
									{guide.excerpt}
								</p>

								{/* CTA */}
								<div className="flex items-center gap-2 text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mt-auto">
									<BookOpen className="w-4 h-4" />
									<span>Read guide</span>
									<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform ml-auto" />
								</div>
							</div>
						</Link>
					))}
				</div>

			</div>
		</section>
	)
}

