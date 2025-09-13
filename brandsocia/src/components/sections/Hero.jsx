'use client'
import { useState } from 'react'

export default function Hero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  return (
    <section className="relative h-auto flex items-center justify-center overflow-hidden">
      {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          onCanPlay={() => setIsVideoLoaded(true)} 
          className="w-auto h-auto object-cover"
        >
          <source src="/videos/WhatsApp-Video-2025-07-10-at-14.36.39_c3cabd90.mp4" type="video/mp4" />
          <source src="/videos/WhatsApp-Video-2025-07-10-at-14.36.39_c3cabd90.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div> */}

    </section>
  )
}
