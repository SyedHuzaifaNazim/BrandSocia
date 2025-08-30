'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            BrandSocia
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-dark hover:text-primary transition-colors">Home</Link>
            <Link href="/about" className="text-dark hover:text-primary transition-colors">About</Link>
            <Link href="/services" className="text-dark hover:text-primary transition-colors">Services</Link>
            <Link href="/portfolio" className="text-dark hover:text-primary transition-colors">Portfolio</Link>
            <Link href="/blog" className="text-dark hover:text-primary transition-colors">Blog</Link>
            <Link href="/contact" className="text-dark hover:text-primary transition-colors">Contact</Link>
          </nav>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 space-y-4 pb-4">
            <Link href="/" className="block text-dark hover:text-primary transition-colors">Home</Link>
            <Link href="/about" className="block text-dark hover:text-primary transition-colors">About</Link>
            <Link href="/services" className="block text-dark hover:text-primary transition-colors">Services</Link>
            <Link href="/portfolio" className="block text-dark hover:text-primary transition-colors">Portfolio</Link>
            <Link href="/blog" className="block text-dark hover:text-primary transition-colors">Blog</Link>
            <Link href="/contact" className="block text-dark hover:text-primary transition-colors">Contact</Link>
          </nav>
        )}
      </div>
    </header>
  )
}