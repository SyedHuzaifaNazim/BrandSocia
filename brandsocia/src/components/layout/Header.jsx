'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from './Navigation'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent hydration mismatch by only rendering after mount
  if (!isMounted) {
    return (
      <header className="fixed top-0 w-full z-50 bg-transparent py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="w-40 h-10"></div>
            <div className="md:hidden">
              <div className="w-6 h-6"></div>
            </div>
          </div>
        </div>
      </header>
    )
  }

  return (
    <header className={`
      fixed top-0 w-full z-50 transition-all duration-500
      ${isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
        : 'bg-transparent py-4'
      }
    `}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link 
            href="/" 
            className="flex items-center transition-all duration-300 hover:scale-105"
          >
            {/* White logo (visible when not scrolled) */}
            <div className={`
              relative transition-opacity duration-500
              ${isScrolled ? 'opacity-0 absolute' : 'opacity-100'}
            `}>
              <Image
                src="/WhatsApp_Image_2025-07-01_at_17.12.43_38099a7e-removebg-preview.png"
                alt="BrandSocia Logo"
                width={160}
                height={40}
                className="h-30 w-auto object-contain"
                priority
              />
            </div>
            
            {/* Black/colored logo (visible when scrolled) */}
            <div className={`
              relative transition-opacity duration-500
              ${isScrolled ? 'opacity-100' : 'opacity-0 absolute'}
            `}>
              <Image
                src="/WhatsApp_Image_2025-07-01_at_17.12.44_ca3aba3a-removebg-preview.png" // Use your black/colored version
                alt="BrandSocia Logo"
                width={160}
                height={40}
                className="h-30 w-auto object-contain"
                priority
              />
            </div>
          </Link>
          
          <Navigation isScrolled={isScrolled} />
        </div>
      </div>
    </header>
  )
}