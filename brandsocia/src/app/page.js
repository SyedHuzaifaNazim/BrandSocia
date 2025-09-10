'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header'
import Hero from '@/components/sections/Hero'
import ServicesSection from '@/components/sections/ServicesSection'
import PortfolioPreview from '@/components/sections/PortfolioPreview'
import BlogPreview from '@/components/sections/BlogPreview'
import ContactCTA from '@/components/sections/ContactCTA'
import Footer from '@/components/layout/Footer'
import ColorGradientBackground from '@/components/ColorGradientBackground'
import AnimatedGradientBackground from '@/components/AnimatedGradientBackground'
import Error from '@/app/error'

// Animation variants for page sections
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  // Add smooth scrolling effect
  useEffect(() => {
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Cleanup function
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="relative overflow-hidden"
    >
      <Header />
      <ColorGradientBackground />
      <AnimatedGradientBackground />
      
      <motion.div 
        variants={fadeInUp} 
        transition={{ duration: 0.6 }}
      >
        <Hero />
      </motion.div>
      
      <motion.div 
        variants={fadeInUp} 
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <ServicesSection />
      </motion.div>
      
      <motion.div 
        variants={fadeInUp} 
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <PortfolioPreview />
      </motion.div>
      
      <motion.div 
        variants={fadeInUp} 
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <BlogPreview />
      </motion.div>
      
      <motion.div 
        variants={fadeInUp} 
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <ContactCTA />
      </motion.div>
      {/* <Error /> */}
      <Footer />
    </motion.div>
  )
}