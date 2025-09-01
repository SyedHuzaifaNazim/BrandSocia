import Header from '@/components/layout/Header'
import Hero from '@/components/sections/Hero'
import ServicesSection from '@/components/sections/ServicesSection'
import ServiceGrid from '@/components/sections/ServiceGrid'
import PortfolioPreview from '@/components/sections/PortfolioPreview'
import BlogPreview from '@/components/sections/BlogPreview'
import ContactCTA from '@/components/sections/ContactCTA'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ServicesSection />
      <ServiceGrid />
      <PortfolioPreview />
      <BlogPreview />
      <ContactCTA />
      <Footer />
    </>
  )
}