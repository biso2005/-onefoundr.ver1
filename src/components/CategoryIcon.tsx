import type { LucideIcon } from 'lucide-react'
import * as Icons from 'lucide-react'

type IconProp = string | LucideIcon

interface CategoryIconProps {
	icon: IconProp
	gradient: string
	size?: 'sm' | 'md' | 'lg'
}

const sizeMap = {
	sm: { container: 'w-10 h-10', icon: 'w-5 h-5' },
	md: { container: 'w-12 h-12', icon: 'w-6 h-6' },
	lg: { container: 'w-16 h-16', icon: 'w-8 h-8' },
}

export default function CategoryIcon({ icon, gradient, size = 'md' }: CategoryIconProps) {
	const sizes = sizeMap[size]

	// Resolve icon prop: if string, look up in lucide-react exports; otherwise use directly
	let ResolvedIcon: LucideIcon | undefined
	if (typeof icon === 'string') {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		ResolvedIcon = (Icons as any)[icon] as LucideIcon | undefined
	} else {
		ResolvedIcon = icon
	}

	const IconComponent = ResolvedIcon ?? (Icons as any).Zap

	return (
		<div
			className={`${sizes.container} rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0`}
		>
			<IconComponent className={`${sizes.icon} text-white`} />
		</div>
	)
}
