'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { services, rotatingTexts } from '@/lib/constants/services'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import Link from 'next/link'
import Image from 'next/image'

export default function ServicesCard() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)
  const router = useRouter()

  // Show only first 3 services for preview
  const previewServices = services.slice(0, 3)

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
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
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
    <section ref={sectionRef} className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our range of creative solutions designed to help your business grow
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {previewServices.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              isVisible={isVisible}
              cardVariants={cardVariants}
            />
          ))}
        </motion.div>

        {/* CTA */}
        <div className="text-center">
          <Button
            onClick={() => handleNavigate('/services')}
            variant="outline"
            className="px-8 py-3 rounded-xl"
          >
            View All Services
            <span className="ml-2">→</span>
          </Button>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, index, isVisible, cardVariants }) {
  const [isHovered, setIsHovered] = useState(false)

  // Use Pexels images instead of local
  const serviceImages = [
    'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg', // service 1
    'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg', // service 2
    'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg'  // service 3
  ]

  return (
    <motion.div variants={cardVariants} className="h-full">
      <Card
        className={`h-full overflow-hidden rounded-2xl transition-all duration-300 ${
          isHovered ? 'shadow-lg transform -translate-y-1' : 'shadow'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background image */}
        <div className="relative h-48 w-full">
          <Image
            src={serviceImages[index % serviceImages.length]}
            alt={service.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-transparent bg-opacity-40 flex items-center justify-center">
            <Image
              src={service.logo || `/images/logos/${service.slug}-${service.icon}`}
              alt={`${service.title} logo`}
              width={64}
              height={64}
              className="filter brightness-0 invert"
            />
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-2">{service.description}</p>

          <Link
            href={`/services/${service.slug}`}
            className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
          >
            Learn More
            <span className="ml-1">→</span>
          </Link>
        </div>
      </Card>
    </motion.div>
  )
}
