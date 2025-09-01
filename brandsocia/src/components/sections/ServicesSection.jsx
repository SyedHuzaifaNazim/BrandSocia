'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const services = [
    {
      title: "Social Media Marketing",
      description: "We create data-driven social media strategies that increase engagement, build brand awareness, and drive conversions across all major platforms.",
      link: "/services/social-media-marketing",
      icon: "📱"
    },
    {
      title: "Web Design & Development",
      description: "Our custom websites combine stunning design with seamless functionality to create digital experiences that convert visitors into customers.",
      link: "/services/web-design-development",
      icon: "💻"
    },
    {
      title: "Brand Identity Design",
      description: "We develop distinctive visual identities that communicate your brand values and differentiate you from competitors in the marketplace.",
      link: "/services/brand-identity",
      icon: "🎨"
    },
    {
      title: "Content Strategy",
      description: "Our content strategies tell compelling brand stories that drive meaningful engagement and establish thought leadership in your industry.",
      link: "/services/content-strategy",
      icon: "📝"
    },
    {
      title: "SEO Optimization",
      description: "We implement data-driven SEO strategies that improve your visibility, drive organic traffic, and increase conversions through search engines.",
      link: "/services/seo-optimization",
      icon: "🔍"
    },
    {
      title: "E-commerce Solutions",
      description: "Our complete e-commerce solutions streamline the shopping experience, boost sales, and create seamless customer journeys from browse to purchase.",
      link: "/services/ecommerce-solutions",
      icon: "🛒"
    }
  ]

  const rotatingTexts = ["brands", "engagement", "conversions", "growth"]

  useEffect(() => {
    // Rotating text animation
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % rotatingTexts.length)
    }, 3000)

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
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
    <section ref={sectionRef} className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Hero Title Section */}
        <div className="text-center mb-16">
          <div className="inline-block overflow-hidden">
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <span className="block">Our Services</span>
              <span className="block mt-2">
                Transforming{' '}
                <span className="inline-block ml-2 text-primary-500 relative min-w-[200px] text-left">
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-secondary-400 transform origin-left transition-all duration-500"></span>
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
              <span className="block mt-2">through digital excellence</span>
            </h2>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              We help brands grow with innovative digital strategies and stunning design that delivers measurable results.
            </p>
            
            <Link 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 bg-primary-500 text-black rounded-lg font-semibold transition-all duration-300 hover:bg-primary-600 hover:shadow-lg group"
            >
              Start Your Project
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              service={service} 
              index={index} 
              isVisible={isVisible} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, index, isVisible }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className={`p-6 rounded-xl border border-gray-100 transition-all duration-700 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      } ${isHovered ? 'shadow-lg bg-primary-50 border-primary-200 transform -translate-y-2' : 'shadow-sm bg-white'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center transition-all duration-300 mb-4 text-3xl">
            {service.icon}
          </div>
          
          <h3 className="text-2xl font-bold text-dark mb-4">{service.title}</h3>
          <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
        </div>
        
        <div className="mt-auto">
          <Link 
            href={service.link}
            className="inline-flex items-center text-primary-500 font-semibold group"
          >
            Learn More
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </div>
      </div>
    </div>
  )
}