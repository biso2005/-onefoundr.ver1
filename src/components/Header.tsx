'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Zap, ChevronDown } from 'lucide-react'
import { mainNav } from '@/data/navigation'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [exploreOpen, setExploreOpen] = useState(false)
  const pathname = usePathname()

  function isActive(href: string) {
    if (href === '/') return pathname === '/'
    return pathname?.startsWith(href)
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl text-gray-900 hover:opacity-80 transition"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span>
              One<span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Foundr</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {mainNav.map((item) => {
              if (item.children) {
                return (
                  <div key={item.label} className="relative">
                    <button
                      onClick={() => setExploreOpen(!exploreOpen)}
                      className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition ${
                        isActive(item.href)
                          ? 'text-orange-500 bg-orange-50'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${exploreOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {exploreOpen && (
                      <>
                        <div
                          className="fixed inset-0 z-10"
                          onClick={() => setExploreOpen(false)}
                        />
                        <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl border border-gray-100 shadow-lg z-20 py-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setExploreOpen(false)}
                              className="block px-4 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-orange-50 transition"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                )
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                    isActive(item.href)
                      ? 'text-orange-500 bg-orange-50'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}

            {/* CTA */}
            <Link
              href="/start-here"
              className="ml-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              Start Here →
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-50 transition"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {mainNav.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition ${
                    isActive(item.href)
                      ? 'text-orange-500 bg-orange-50'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-4 mt-1 flex flex-col gap-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-4 py-2 rounded-lg text-sm text-gray-500 hover:text-gray-900 hover:bg-orange-50 transition"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              href="/start-here"
              onClick={() => setMobileOpen(false)}
              className="mt-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-5 py-3 rounded-lg text-sm font-semibold text-center hover:shadow-lg transition"
            >
              Start Here →
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
