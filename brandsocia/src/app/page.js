import Header from '@/components/layout/Header'
import Hero from '@/components/sections/Hero'
import ServicesSection from '@/components/sections/ServicesSection'
import PortfolioPreview from '@/components/sections/PortfolioPreview'
import BlogPreview from '@/components/sections/BlogPreview'
import ContactCTA from '@/components/sections/ContactCTA'
import Footer from '@/components/layout/Footer'
import ColorGradientBackground from '@/components/ColorGradientBackground'
import AnimatedGradientBackground from '@/components/AnimatedGradientBackground'

export default function Home() {
  return (
    <>
      <Header />
      <ColorGradientBackground />
      <AnimatedGradientBackground />
      <Hero />
      <ServicesSection />
      <PortfolioPreview />
      <BlogPreview />
      <ContactCTA />
      <Footer />
    </>
  )
}