import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Pillar4Placeholder({ title, description, href }: { title: string; description?: string; href?: string }) {
  return (
    <div className="max-w-3xl bg-white rounded-xl border border-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-3">{title}</h1>
      {description && <p className="text-sm text-gray-500 mb-6">{description}</p>}
      <div className="flex items-center gap-2 text-orange-500 font-semibold">
        <span>Placeholder</span>
        {href && (
          <Link href={href} className="flex items-center gap-2">
            <span>Open</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </div>
    </div>
  )
}
