import Hero from '@/components/sections/Hero'
import ServiceGrid from '@/components/sections/ServiceGrid'
import PortfolioPreview from '@/components/sections/PortfolioPreview'
import BlogPreview from '@/components/sections/BlogPreview'
import ContactCTA from '@/components/sections/ContactCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceGrid />
      <PortfolioPreview />
      <BlogPreview />
      <ContactCTA />
    </>
  )
}