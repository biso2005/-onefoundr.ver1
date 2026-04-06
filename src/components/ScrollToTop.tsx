"use client"

import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
	const [visible, setVisible] = useState(false)

	useEffect(() => {
		function handleScroll() {
			setVisible(window.scrollY > 400)
		}

		window.addEventListener('scroll', handleScroll, { passive: true })
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	if (!visible) return null

	return (
		<button
			onClick={scrollToTop}
			aria-label="Scroll to top"
			className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 flex items-center justify-center"
		>
			<ArrowUp className="w-5 h-5" />
		</button>
	)
}


