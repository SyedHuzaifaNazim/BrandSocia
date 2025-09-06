'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import ServicesSection from '@/components/sections/ServicesSection';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ColorGradientBackground from '@/components/ColorGradientBackground';
import AnimatedGradientBackground from '@/components/AnimatedGradientBackground';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function ServicesPage() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <ColorGradientBackground />
      <AnimatedGradientBackground />
      <Header />
      
      <main className="min-h-screen pt-24 pb-16">
        <motion.div 
          className="container mx-auto px-4 pt-8 pb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="block bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Our Services
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We offer a comprehensive range of digital marketing and design services tailored to help your business thrive in the digital landscape.
            </p>
          </motion.div>
        </motion.div>
        
        <ServicesSection />
        
        <motion.div 
          ref={sectionRef}
          className="container mx-auto px-4 py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Card className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-orange-50 to-orange-100/50 border border-orange-200/50 shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Ready to transform your digital presence?</h2>
                <p className="text-lg text-gray-600 mb-6">Let's discuss your project and create a tailored solution that drives results for your business.</p>
                <Button 
                  className="group px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:shadow-2xl shadow-lg"
                  onClick={() => window.location.href = '/contact'}
                >
                  Get in Touch
                  <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
                </Button>
              </div>
              <div className="w-full md:w-1/3 flex-shrink-0">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-orange-400 to-orange-600 p-8 flex items-center justify-center shadow-lg">
                  <span className="text-8xl">🚀</span>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </main>
      
      <Footer />
    </>
  );
}