'use client'

import { useEffect, useRef } from 'react'
import Button from '@/components/ui/Button'

export default function Hero() {
  const videoRef = useRef(null)

  useEffect(() => {
    // Try to play the video automatically
    const playVideo = async () => {
      try {
        if (videoRef.current) {
          // Start with muted autoplay (most browsers allow this)
          videoRef.current.muted = true;
          await videoRef.current.play().catch(e => console.log('Autoplay prevented:', e));
        }
      } catch (error) {
        console.log('Video play error:', error)
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
          playsInline
          className="w-full h-full object-cover" 
        >
          {/* Use correct path - video should be in public/videos directory */}
          <source src="/videos/WhatsApp-Video-2025-07-10-at-14.36.39_c3cabd90.mp4" type="video/mp4" />
          <source src="/videos/WhatsApp-Video-2025-07-10-at-14.36.39_c3cabd90.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay for better text visibility */}
        {/* <div className="absolute inset-0 bg-yellow bg-opacity-50"></div> */}
      </div>

      {/* Content */}
      {/* <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Creative Digital Solutions for Your Brand
          </h1>
          <p className="text-xl mb-8">
            We help brands grow with innovative digital strategies and stunning design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/services" variant="secondary" className="bg-secondary-500 hover:bg-secondary-600 text-dark">
              Our Services
            </Button>
            <Button href="/contact" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-500">
              Get in Touch
            </Button>
          </div>
        </div>
      </div> */}
    </section>
  )
}