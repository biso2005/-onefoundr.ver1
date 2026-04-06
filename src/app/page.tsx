import HeroSection from '@/components/home/HeroSection'
import PathSelector from '@/components/home/PathSelector'
import PillarGrid from '@/components/home/PillarGrid'
import FeaturedGuides from '@/components/home/FeaturedGuides'
import NewsletterCTA from '@/components/NewsletterCTA'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PathSelector />
      <PillarGrid />
      <FeaturedGuides />
      <NewsletterCTA />
    </>
  )
}
