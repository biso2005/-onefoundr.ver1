import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          terracotta: '#E05D26',
          amber: '#F59E0B',
          teal: '#0D4D4D',
          obsidian: '#1A1A1A',
        },
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(to right, #E05D26, #F59E0B)',
        'gradient-teal': 'linear-gradient(to right, #0D4D4D, #059669)',
      },
      fontFamily: {
        sans: ['var(--font-geist)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
