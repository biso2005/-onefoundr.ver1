import Link from 'next/link'
import { Zap } from 'lucide-react'
import { footerNav } from '@/data/navigation'

export default function Footer() {
	const currentYear = new Date().getFullYear()

	return (
		<footer className="bg-[#1A1A1A] text-gray-400">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-12">

					{/* Brand Column */}
					<div className="md:col-span-1">
						<Link
							href="/"
							className="flex items-center gap-2 font-bold text-xl text-white hover:opacity-80 transition mb-4"
						>
							<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
								<Zap className="w-4 h-4 text-white" />
							</div>
							<span>
								One<span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Foundr</span>
							</span>
						</Link>
						<p className="text-sm leading-relaxed text-gray-400">
							Practical guides for solo founders. Build a profitable business by yourself, on your terms.
						</p>
						<p className="text-sm mt-4 text-gray-500">
							Built for founders everywhere 🌍
						</p>
					</div>

					{/* Pillars Column */}
					<div>
						<h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
							Explore
						</h3>
						<ul className="flex flex-col gap-2">
							{footerNav.pillars.map((link) => (
								<li key={link.href}>
									<Link
										href={link.href}
										className="text-sm text-gray-400 hover:text-orange-400 transition"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Company Column */}
					<div>
						<h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
							Company
						</h3>
						<ul className="flex flex-col gap-2">
							{footerNav.company.map((link) => (
								<li key={link.href}>
									<Link
										href={link.href}
										className="text-sm text-gray-400 hover:text-orange-400 transition"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Legal Column */}
					<div>
						<h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
							Legal
						</h3>
						<ul className="flex flex-col gap-2">
							{footerNav.legal.map((link) => (
								<li key={link.href}>
									<Link
										href={link.href}
										className="text-sm text-gray-400 hover:text-orange-400 transition"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
					<p className="text-sm text-gray-500">
						© {currentYear} OneFoundr. All rights reserved.
					</p>
					<p className="text-sm text-gray-500">
						Built for solo founders everywhere.
					</p>
				</div>
			</div>
		</footer>
	)
}

