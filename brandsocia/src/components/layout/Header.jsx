'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { NAV_LINKS } from '@/lib/constants'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeHover, setActiveHover] = useState(null)
  const pathname = usePathname()
  
  const { scrollY } = useScroll()
  
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isMobileMenuOpen])

  const isActive = (href) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <motion.header 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-lg py-2' 
            : 'bg-transparent py-4'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center transition-all duration-300 hover:scale-105"
            >
              <div className={`relative transition-opacity duration-500 ${isScrolled ? 'opacity-0 absolute' : 'opacity-100'}`}>
                <Image
                  src="/WhatsApp_Image_2025-07-01_at_17.12.43_38099a7e-removebg-preview.png"
                  alt="BrandSocia Logo"
                  width={160}
                  height={40}
                  className="h-20 w-auto object-contain"
                  priority
                />
              </div>
              
              <div className={`relative transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0 absolute'}`}>
                <Image
                  src="/WhatsApp_Image_2025-07-01_at_17.12.44_ca3aba3a-removebg-preview.png"
                  alt="BrandSocia Logo"
                  width={160}
                  height={40}
                  className="h-20 w-auto object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 font-medium transition-all duration-300 group ${
                    isActive(link.href)
                      ? 'text-primary-600'
                      : isScrolled 
                        ? 'text-dark hover:text-primary-500' 
                        : 'text-white hover:text-primary-300'
                  }`}
                  onMouseEnter={() => setActiveHover(link.href)}
                  onMouseLeave={() => setActiveHover(null)}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                >
                  {link.label}
                  
                  {/* Animated underline */}
                  <span className={`
                    absolute bottom-0 left-0 h-0.5 bg-primary-500 transition-all duration-300
                    ${isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'}
                    ${activeHover === link.href ? 'w-full' : ''}
                  `}></span>
                  
                  {/* Hover effect circle */}
                  <span className={`
                    absolute -inset-2 rounded-full bg-primary-100 opacity-0 transition-all duration-300
                    group-hover:opacity-100 scale-75 group-hover:scale-100
                    ${activeHover === link.href ? 'opacity-100 scale-100' : ''}
                  `}></span>
                </Link>
              ))}
              
              {/* CTA Button */}
              <Link
                href="/contact"
                className="ml-4 px-6 py-2.5 bg-primary-500 text-black rounded-full font-semibold 
                         transition-all duration-300 hover:bg-primary-600 hover:shadow-lg 
                         hover:-translate-y-0.5 shadow-md hover:shadow-primary-200/50"
              >
                Get Started
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden p-2 rounded-md transition-all duration-300 relative ${
                isScrolled 
                  ? 'text-dark hover:text-primary-500' 
                  : 'text-white hover:text-primary-300'
              }`}
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center relative">
                <span className={`
                  block w-6 h-0.5 bg-current transition-all duration-300 transform
                  ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}
                `}></span>
                <span className={`
                  block w-6 h-0.5 bg-current transition-all duration-300 my-1.5
                  ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}
                `}></span>
                <span className={`
                  block w-6 h-0.5 bg-current transition-all duration-300 transform
                  ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}
                `}></span>
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden"
              onClick={closeMobileMenu}
              aria-hidden="true"
            ></motion.div>
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl z-50 overflow-y-auto md:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                  <span className="text-xl font-bold text-primary-600">Menu</span>
                  <button
                    onClick={closeMobileMenu}
                    className="p-2 rounded-md hover:bg-gray-100 transition-colors duration-300"
                    aria-label="Close menu"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 p-6">
                  <ul className="space-y-3">
                    {NAV_LINKS.map((link) => (
                      <motion.li 
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + NAV_LINKS.indexOf(link) * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          onClick={closeMobileMenu}
                          className={`
                            block px-4 py-3 rounded-lg text-lg font-medium transition-all duration-300
                            transform hover:translate-x-2
                            ${isActive(link.href)
                              ? 'bg-primary-500 text-white shadow-md'
                              : 'text-dark hover:bg-primary-50 hover:text-primary-600'
                            }
                          `}
                          aria-current={isActive(link.href) ? 'page' : undefined}
                        >
                          {link.label}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* CTA Section */}
                <div className="p-6 border-t border-gray-100">
                  <Link
                    href="/contact"
                    onClick={closeMobileMenu}
                    className="block w-full text-center px-6 py-3 bg-primary-500 text-black rounded-lg 
                             font-semibold transition-all duration-300 hover:bg-primary-600 hover:shadow-md"
                  >
                    Start Your Project
                  </Link>
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-gray-100 bg-gray-50">
                  <p className="text-sm text-gray-500 mb-4 text-center">Follow Us</p>
                  <div className="flex justify-center space-x-4">
                    <a
                      href="#"
                      className="p-2 text-gray-600 hover:text-primary-500 transition-colors duration-300 transform hover:scale-110"
                      aria-label="Twitter"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="p-2 text-gray-600 hover:text-primary-500 transition-colors duration-300 transform hover:scale-110"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="p-2 text-gray-600 hover:text-primary-500 transition-colors duration-300 transform hover:scale-110"
                      aria-label="Facebook"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="p-2 text-gray-600 hover:text-primary-500 transition-colors duration-300 transform hover:scale-110"
                      aria-label="Instagram"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}