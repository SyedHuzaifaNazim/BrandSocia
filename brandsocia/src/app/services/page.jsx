// app/services/page.jsx
import ServicesSection from '@/components/sections/ServicesSection'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ColorGradientBackground from '@/components/ColorGradientBackground'
import AnimatedGradientBackground from '@/components/AnimatedGradientBackground'

export const metadata = {
  title: 'Services | BrandSocia',
  description: 'Discover our comprehensive digital marketing and design services tailored to help your business thrive in the digital landscape.',
}

export default function ServicesPage() {
  return (
    <>
    <ColorGradientBackground />
    <AnimatedGradientBackground />
    <Header />
    <div className='h-20'></div>
    <ServicesSection />
    <Footer />
    </>
)
}