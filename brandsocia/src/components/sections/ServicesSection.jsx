// components/sections/ServicesSection.jsx
'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { services, rotatingTexts } from '@/lib/constants/services'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

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
      { threshold: 0.2 }
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

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Hero Title Section */}
        <div className="text-center mb-16">
          <div className="inline-block overflow-hidden">
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800">
                Our Services
              </span>
              <span className="block mt-2 text-gray-800">
                Transforming{' '}
                <span className="inline-block ml-2 text-primary-600 relative min-w-[200px] text-left">
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-secondary-400 transform origin-left transition-all duration-500 scale-x-100"></span>
                  <span className="block h-12 overflow-hidden">
                    {rotatingTexts.map((text, index) => (
                      <span
                        key={index}
                        className={`block transition-all duration-500 ${
                          index === activeIndex
                            ? 'translate-y-0 opacity-100'
                            : '-translate-y-full opacity-0 absolute'
                        }`}
                      >
                        {text}
                      </span>
                    ))}
                  </span>
                </span>
              </span>
              <span className="block mt-2 text-gray-800">through digital excellence</span>
            </h2>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              We help brands grow with innovative digital strategies and stunning design that delivers measurable results.
            </p>
            
            <Button 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg group"
              variant="primary"
            >
              Start Your Project
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              service={service} 
              index={index} 
              isVisible={isVisible} 
            />
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className={`bg-gradient-to-r from-primary-500 to-primary-700 rounded-2xl p-10 text-center text-white transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Ready to get started?</h2>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto text-lg">
            Contact us today to discuss how we can help you achieve your business goals with our digital marketing and design services.
          </p>
          <Button href="/contact" variant="secondary" size="lg">
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, index, isVisible }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card 
      className={`h-full p-6 rounded-2xl transition-all duration-700 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      } ${isHovered ? 'shadow-2xl bg-white border-primary-100 transform -translate-y-2' : 'shadow-md'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center transition-all duration-300 mb-4 text-3xl shadow-lg`}>
            {service.icon}
          </div>
          
          <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
          <p className="text-gray-600 mb-5">{service.description}</p>
          
          <ul className="mb-6">
            {service.features.map((feature, i) => (
              <li key={i} className="flex items-center mb-3">
                <svg className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-auto">
          <Button 
            href={`/services/${service.slug}`}
            variant="outline"
            className="w-full group"
          >
            Learn More
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Button>
        </div>
      </div>
    </Card>
  )
}