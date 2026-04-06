import Link from 'next/link'
import { ArrowRight, Zap } from 'lucide-react'

export default function HeroSection() {
	return (
		<section className="relative overflow-hidden bg-white pt-16 pb-20 md:pt-24 md:pb-28">

			{/* Background decoration */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-orange-100 to-amber-100 opacity-60 blur-3xl" />
				<div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-br from-teal-100 to-emerald-100 opacity-60 blur-3xl" />
			</div>

			<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center max-w-4xl mx-auto">

					{/* Badge */}
					<div className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-8">
						<Zap className="w-4 h-4" />
						<span>For solo founders who mean business</span>
					</div>

					{/* Headline */}
					<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
						Build a profitable business.{' '}
						<span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
							By yourself.
						</span>{' '}
						On your terms.
					</h1>

					{/* Subheadline */}
					<p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto">
						No co-founder required. No VC funding needed. Just practical guides
						that take you from idea to income — step by step.
					</p>

					{/* CTAs */}
					<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
						<Link
							href="/start-here"
							className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
						>
							Start Here
							<ArrowRight className="w-5 h-5" />
						</Link>
						<Link
							href="/#pillars"
							className="w-full sm:w-auto border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-gray-900 hover:text-gray-900 transition-all duration-200 flex items-center justify-center gap-2"
						>
							Explore Guides
						</Link>
					</div>

					{/* Social proof */}
					<div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
						<div className="flex items-center gap-2">
							<div className="flex -space-x-2">
								{['bg-orange-400', 'bg-amber-400', 'bg-teal-400', 'bg-emerald-400'].map((color, i) => (
									<div
										key={i}
										className={`w-8 h-8 rounded-full ${color} border-2 border-white`}
									/>
								))}
							</div>
							<span>Join 2,000+ solo founders</span>
						</div>
						<div className="hidden sm:block w-1 h-1 rounded-full bg-gray-300" />
						<div className="flex items-center gap-1">
							<span className="text-orange-400">★★★★★</span>
							<span>Trusted by founders worldwide</span>
						</div>
					</div>

				</div>
			</div>
		</section>
	)
}

