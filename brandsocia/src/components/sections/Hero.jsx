'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'

export default function Hero() {
  const videoRef = useRef(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  useEffect(() => {
    // Try to play the video automatically
    const playVideo = async () => {
      try {
        if (videoRef.current) {
          // Start with muted autoplay (most browsers allow this)
          videoRef.current.muted = true;
          await videoRef.current.play().catch(e => console.log('Autoplay prevented:', e));
          setIsVideoLoaded(true);
        }
      } catch (error) {
        console.log('Video play error:', error)
        // If video fails to load, still show content
        setIsVideoLoaded(true);
      }
    }

    playVideo()
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          // playsInline
          className="w-full h-full object-cover mobile-scale mobile-video" // Added mobile-scale class
        >
          {/* Use correct path - video should be in public/videos directory */}
          <source src="/videos/WhatsApp-Video-2025-07-10-at-14.36.39_c3cabd90.mp4" type="video/mp4" />
          <source src="/videos/WhatsApp-Video-2025-07-10-at-14.36.39_c3cabd90.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
      </div>

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: isVideoLoaded ? 1 : 0, 
          y: isVideoLoaded ? 0 : 20 
        }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="container mx-auto px-4 relative z-10 text-center text-white mobile-content" // Added mobile-content class
      >
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVideoLoaded ? 1 : 0, y: isVideoLoaded ? 0 : 20 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight"> {/* Adjusted sizes and margins */}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400">Creative Digital</span> <br />
              <span className="text-white">Solutions for Your Brand</span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVideoLoaded ? 1 : 0, y: isVideoLoaded ? 0 : 20 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-10 text-gray-200 max-w-2xl mx-auto" // Adjusted sizes and margins
          >
            We help brands grow with innovative digital strategies and stunning design that converts visitors into customers.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVideoLoaded ? 1 : 0, y: isVideoLoaded ? 0 : 20 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center" // Adjusted gap
          >
            <Button href="/services" variant="primary" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full"> {/* Adjusted sizes */}
              Explore Services
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-white text-white hover:bg-white hover:text-primary-600"> {/* Adjusted sizes */}
              Get in Touch
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVideoLoaded ? 0.8 : 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 1.2 }}
            className="mt-10 sm:mt-16 flex flex-wrap justify-center gap-4 sm:gap-8" // Adjusted for mobile
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
              <span className="text-gray-300 text-sm">Innovative</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-secondary-400 rounded-full"></div>
              <span className="text-gray-300 text-sm">Creative</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="text-gray-300 text-sm">Results-Driven</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Add mobile-specific styles */}
      <style jsx>{`
        @media (max-width: 640px) {
          .mobile-scale {
            transform: scale(1.1); /* Slightly scale up video to remove black bars */
          }
          .mobile-content {
            padding-top: 20%; /* Adjust content position for mobile */
          }
        }
      `}</style>
    </section>
  )
}