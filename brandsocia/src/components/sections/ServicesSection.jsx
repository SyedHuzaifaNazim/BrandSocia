// components/sections/ServicesSection.jsx
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
  const [hoveredCard, setHoveredCard] = useState(null)
  const sectionRef = useRef(null)
  const router = useRouter()

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % rotatingTexts.length)
    }, 3000)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      clearInterval(interval)
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [rotatingTexts.length])

  const handleNavigate = (path) => {
    router.push(path)
  }
  
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-primary-500/10 to-secondary-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-primary-600/10 to-secondary-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Title Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20 max-w-4xl mx-auto"
        >
          <div className="inline-block overflow-hidden mb-4">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-sm font-semibold text-primary-600 bg-primary-50 px-4 py-2 rounded-full mb-6 inline-block"
            >
              What We Offer
            </motion.span>
          </div>
          
          <div className="inline-block overflow-hidden">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8"
            >
              <span className="block bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-4">
                Creative Services
              </span>
              <span className="block text-3xl md:text-4xl text-gray-700 font-normal">
                Transforming{' '}
                <span className="inline-block mx-2 text-primary-600 relative min-w-[220px] text-left align-middle">
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary-400 transform origin-left transition-all duration-500 scale-x-105"></span>
                  <span className="block h-12 overflow-hidden relative">
                    {rotatingTexts.map((text, index) => (
                      <span
                        key={index}
                        className={`block transition-all duration-700 absolute inset-0 ${
                          index === activeIndex
                            ? 'translate-y-0 opacity-100'
                            : '-translate-y-full opacity-0'
                        }`}
                        style={{ 
                          transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                          transform: index === activeIndex ? 'translateY(0)' : 'translateY(-100%)'
                        }}
                      >
                        {text}
                      </span>
                    ))}
                  </span>
                </span>
              </span>
              <span className="block text-3xl md:text-4xl text-gray-700 font-normal mt-4">through innovation</span>
            </motion.h2>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          >
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              We craft digital experiences that blend creativity with strategy, delivering measurable results that drive your business forward.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={() => router.push('/contact')}
                className="group px-10 py-5 rounded-2xl font-semibold transition-all duration-300 hover:shadow-2xl shadow-lg"
                variant="primary"
              >
                Start Your Project
                <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
              </Button>
              <Button 
                onClick={() => handleNavigate('/portfolio')}
                className="group px-10 py-5 rounded-2xl font-semibold border-2 border-gray-300 bg-transparent text-gray-800 hover:bg-gray-50 transition-all duration-300"
                variant="outline"
              >
                View Our Work
                <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
              </Button>
            </div>
          </motion.div>
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
        
        {/* Trust Indicators */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
          className="flex flex-col items-center justify-center mb-16"
        >
          <p className="text-gray-500 text-sm font-medium mb-6">Trusted by innovative companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            
              <div className="h-8 w-auto">
                <div className="h-full w-24 rounded-lg">
                  <img src="/companies/cropped-cropped-logo-with-blue-and-white-1-2-300x287-removebg-preview.png" alt="" />
                </div>
              </div>
              <div className="h-8 w-auto">
                <div className="h-full w-24 rounded-lg">
                  <img src="/companies/Lettermark_Logo_with_Interlinked_Circles-removebg-preview.png" alt="" />
                </div>
              </div>
              <div className="h-8 w-auto">
                <div className="h-full w-24 rounded-lg">
                  <img src="/companies/second_concept_blue-01_3.webp" alt="" />
                </div>
              </div>

          </div>
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
            <Button 
              onClick={() => handleNavigate('/contact')} 
              variant="primary" 
              size="lg" 
              className="px-8 py-4 rounded-xl"
            >
              Schedule a Consultation
            </Button>
            <Button 
              onClick={() => handleNavigate('/services')} 
              variant="outline" 
              size="lg" 
              className="px-8 py-4 rounded-xl border-2"
            >
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

  const handleLearnMore = () => {
    router.push(`/services/${service.slug}`)
  }

  return (
    <motion.div
      variants={cardVariants}
      className="h-full"
    >
      <Card 
        className={`h-full p-8 rounded-3xl transition-all duration-500 ease-out overflow-hidden group relative ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        } ${
          isHovered 
            ? 'shadow-2xl bg-transparent border-primary-100/50 transform -translate-y-2' 
            : 'shadow-lg bg-transparent/80 backdrop-blur-sm border-gray-200/50'
        }`}
        style={{ 
          transitionDelay: `${index * 100}ms`,
          transitionProperty: 'transform, box-shadow, border-color, background-color'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Hover effect background */}
        <div className={`absolute inset-0 bg-gradient-to-br from-primary-50/30 to-secondary-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
        
        <div className="flex flex-col h-full relative z-10">
          <div className="mb-6">
            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center transition-all duration-500 mb-6 text-4xl shadow-lg group-hover:scale-110 group-hover:shadow-xl`}>
              {service.icon}
            </div>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-primary-700 transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
            
            <ul className="mb-8 space-y-3">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <svg className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-auto pt-6 border-t border-gray-100/50 group-hover:border-primary-100/50 transition-colors duration-300">
            <div className="flex justify-between items-center">
              <Link href={`/services/${service.slug}`}>
                <button 
                  className="group-hover:text-primary-600 group-hover:bg-primary-50 px-6 py-3 rounded-xl transition-all duration-300"
                >
                  Learn More
                  <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
                </button>
              </Link>
              
              {service.price && (
                <div className="text-right">
                  <span className="text-sm text-gray-500 block">Starting from</span>
                  <span className="text-lg font-bold text-primary-600">{service.price}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}