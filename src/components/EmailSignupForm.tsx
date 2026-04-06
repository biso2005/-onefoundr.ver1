'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle } from 'lucide-react'

interface EmailSignupFormProps {
	placeholder?: string
	buttonText?: string
	successMessage?: string
	variant?: 'default' | 'inline' | 'stacked'
    leadMagnetFile?: string
}

export default function EmailSignupForm({
	placeholder = 'Enter your email address',
	buttonText = 'Get Free Guides',
	successMessage = 'You\'re in. Check your inbox.',
	variant = 'inline',
    leadMagnetFile,
}: EmailSignupFormProps) {
	const [email, setEmail] = useState('')
	const [submitted, setSubmitted] = useState(false)
	const [loading, setLoading] = useState(false)

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault()
		if (!email) return
		setLoading(true)
		// TODO: connect to email provider
		await new Promise(resolve => setTimeout(resolve, 800))
		setSubmitted(true)
		setLoading(false)
	}

	if (submitted) {
		return (
			<div className="flex flex-col items-start gap-3">
				<div className="flex items-center gap-3 text-green-600 font-semibold">
					<CheckCircle className="w-5 h-5 flex-shrink-0" />
					<span>{successMessage}</span>
				</div>
				{leadMagnetFile ? (
					<a
						href={leadMagnetFile}
						download
						className="mt-2 inline-flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg font-semibold"
					>
						Download the guide
					</a>
				) : null}
			</div>
		)
	}

	if (variant === 'stacked') {
		return (
			<form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
				<input
					type="email"
					value={email}
					onChange={e => setEmail(e.target.value)}
					placeholder={placeholder}
					required
					className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
				/>
				<button
					type="submit"
					disabled={loading}
					className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition disabled:opacity-70 flex items-center justify-center gap-2"
				>
					{loading ? 'Sending...' : (
						<>
							{buttonText}
							<ArrowRight className="w-4 h-4" />
						</>
					)}
				</button>
			</form>
		)
	}

	return (
		<form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full">
			<input
				type="email"
				value={email}
				onChange={e => setEmail(e.target.value)}
				placeholder={placeholder}
				required
				className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
			/>
			<button
				type="submit"
				disabled={loading}
				className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition disabled:opacity-70 flex items-center gap-2 whitespace-nowrap"
			>
				{loading ? 'Sending...' : (
					<>
						{buttonText}
						<ArrowRight className="w-4 h-4" />
					</>
				)}
			</button>
		</form>
	)
}

