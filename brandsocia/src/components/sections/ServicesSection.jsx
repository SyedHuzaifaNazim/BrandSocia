'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { services, rotatingTexts } from '@/lib/constants/services'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import Link from 'next/link'

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)
  const router = useRouter()

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % rotatingTexts.length)
    }, 3000)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => {
      clearInterval(interval)
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [rotatingTexts.length])

  const handleNavigate = (path) => {
    router.push(path)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  }

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-primary-500/10 to-secondary-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-primary-600/10 to-secondary-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20 max-w-4xl mx-auto"
        >
          <motion.span 
            className="text-sm font-semibold text-primary-600 bg-primary-50 px-4 py-2 rounded-full mb-6 inline-block"
          >
            What We Offer
          </motion.span>

          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8"
          >
            <span className="block bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 text-transparent mb-4">
              Creative Services
            </span>
            <span className="block text-3xl md:text-4xl text-gray-700 font-normal">
              Transforming{' '}
              <span className="inline-block mx-2 text-primary-600 relative min-w-[220px] text-left align-middle">
                <span className="block h-12 overflow-hidden relative">
                  {rotatingTexts.map((text, index) => (
                    <span
                      key={index}
                      className={`block absolute inset-0 transition-all duration-700 ${
                        index === activeIndex ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
                      }`}
                    >
                      {text}
                    </span>
                  ))}
                </span>
              </span>
            </span>
            <span className="block text-3xl md:text-4xl text-gray-700 font-normal mt-4">
              through innovation
            </span>
          </motion.h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            We craft digital experiences that blend creativity with strategy, delivering measurable results that drive your business forward.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button onClick={() => router.push('/contact')} variant="primary" className="px-10 py-5 rounded-2xl font-semibold">
              Start Your Project →
            </Button>
            <Button onClick={() => handleNavigate('/portfolio')} variant="outline" className="px-10 py-5 rounded-2xl font-semibold">
              View Our Work →
            </Button>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20"
        >
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              service={service} 
              index={index} 
              isVisible={isVisible}
              cardVariants={cardVariants}
            />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
          className="bg-gradient-to-r from-primary-500/10 to-primary-700/10 backdrop-blur-sm border border-primary-200/30 rounded-3xl p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Ready to transform your digital presence?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
            Let's collaborate to create something extraordinary. Our team is ready to bring your vision to life with cutting-edge solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => handleNavigate('/contact')} variant="primary" size="lg" className="px-8 py-4 rounded-xl">
              Schedule a Consultation
            </Button>
            <Button onClick={() => handleNavigate('/services')} variant="outline" size="lg" className="px-8 py-4 rounded-xl border-2">
              Explore All Services
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ServiceCard({ service, index, isVisible, cardVariants }) {
  const [isHovered, setIsHovered] = useState(false)
  const router = useRouter()

  return (
    <motion.div variants={cardVariants} className="h-full">
      <Card
        className={`h-full rounded-3xl transition-all duration-500 ease-out overflow-hidden group relative bg-gradient-to-br from-white to-orange-50 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        } ${isHovered ? 'shadow-2xl -translate-y-2' : 'shadow-lg'}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex flex-col h-full relative z-10 p-8">
          {/* Logo */}
          <div className="mb-6 flex justify-center">
            <img
              src={service.logo}
              alt={`${service.title} logo`}
              className="w-20 h-20 object-contain rounded-xl shadow-lg bg-white p-2 group-hover:scale-110 transition-transform duration-500"
            />
          </div>

          {/* Title & Desc */}
          <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

          {/* Features */}
          <ul className="mb-8 space-y-3">
            {service.features.map((feature, i) => (
              <li key={i} className="flex items-start text-gray-700">
                <svg className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* Footer */}
          <div className="mt-auto pt-6 border-t border-orange-200">
            <div className="flex justify-between items-center">
              <Link href={`/services/${service.slug}`}>
                <button className="text-orange-600 hover:text-orange-700 bg-orange-50 hover:bg-orange-100 px-6 py-3 rounded-xl transition-all duration-300">
                  Learn More →
                </button>
              </Link>
              {service.price && (
                <div className="text-right text-gray-800">
                  <span className="text-sm opacity-80 block">Starting from</span>
                  <span className="text-lg font-bold">{service.price}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
