'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ColorGradientBackground from '@/components/ColorGradientBackground';
import AnimatedGradientBackground from '@/components/AnimatedGradientBackground';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function BrandIdentity() {
  const router = useRouter();
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <ColorGradientBackground />
      <AnimatedGradientBackground />
      <Header />
      <main className="min-h-screen text-white" ref={sectionRef}>
      {/* Hero Section */}
      <motion.div
        className="container mx-auto px-4 py-20"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="max-w-4xl mx-auto text-center mb-16">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 rounded-2xl bg-teal-600/30 flex items-center justify-center overflow-hidden backdrop-blur-sm border border-teal-500/50">
              <img 
                src="https://images.unsplash.com/photo-1611784728558-6a9848d5f2f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" 
                alt="Brand Identity Design" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-600">
            Brand Identity
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            We develop distinctive visual identities that communicate your brand values and differentiate you from competitors in the marketplace.
          </p>
          <Button onClick={() => router.push('/contact')} className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700">
            Get Started
          </Button>
        </motion.div>
      </motion.div>

      {/* Services Section */}
      <motion.div
        className="container mx-auto px-4 py-20 bg-gray-900 rounded-3xl"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="text-4xl font-bold text-center mb-16">
          Our Brand Identity Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div variants={itemVariants}>
            <Card className="h-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-green-900/50 flex items-center justify-center text-green-400 mr-4 border border-green-700/50">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-green-400">Logo Design</h3>
              </div>
              <p className="text-gray-300 mt-4">
                Memorable logo designs that capture your brand essence and make a lasting impression on your audience. We create unique, versatile, and timeless logos that stand out in the market.
              </p>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="h-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-teal-900/50 flex items-center justify-center text-teal-400 mr-4 border border-teal-700/50">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-teal-400">Brand Guidelines</h3>
              </div>
              <p className="text-gray-300 mt-4">
                Comprehensive brand manuals that ensure consistent application of your brand across all touchpoints. Our guidelines provide clear instructions for maintaining brand integrity.
              </p>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="h-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-emerald-900/50 flex items-center justify-center text-emerald-400 mr-4 border border-emerald-700/50">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-emerald-400">Visual Assets</h3>
              </div>
              <p className="text-gray-300 mt-4">
                Complete set of visual assets including color palettes, typography, imagery, and iconography. We create cohesive visual elements that strengthen your brand recognition.
              </p>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="h-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-lime-900/50 flex items-center justify-center text-lime-400 mr-4 border border-lime-700/50">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-lime-400">Brand Applications</h3>
              </div>
              <p className="text-gray-300 mt-4">
                Implementation of your brand across various applications including stationery, packaging, and digital platforms. We ensure your brand looks professional across all touchpoints.
              </p>
            </Card>
          </motion.div>
        </div>
      </motion.div>

      {/* Process Section */}
      <motion.div
        className="container mx-auto px-4 py-20"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="text-4xl font-bold text-center mb-16">
          Our Brand Development Process
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          {[
            { title: 'Brand Discovery', description: 'We research your industry, competitors, and target audience to understand your unique position in the market.' },
            { title: 'Strategy Development', description: 'We create a comprehensive brand strategy that aligns with your business goals and resonates with your audience.' },
            { title: 'Design & Creation', description: 'We design visual elements and create brand assets that communicate your brand personality and values.' },
            { title: 'Implementation', description: 'We implement your brand across all touchpoints and provide guidelines for consistent application.' }
          ].map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex mb-12 last:mb-0"
            >
              <div className="mr-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-teal-600 text-white font-bold">
                  {index + 1}
                </div>
                {index < 3 && <div className="w-0.5 h-full ml-6 bg-gradient-to-b from-green-500 to-teal-600"></div>}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        className="container mx-auto px-4 py-20"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-green-900/40 to-teal-900/40 border border-green-700/50 p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to build a strong brand identity?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's create a brand that resonates with your audience and stands out in the marketplace.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button onClick={() => router.push('/contact')} className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700">
                Get Started
              </Button>
              <Button onClick={() => router.push('/portfolio')} variant="outline" className="border-white text-white hover:bg-white/10">
                View Brand Projects
              </Button>
            </div>
          </Card>
        </motion.div>
      </motion.div>
      </main>
      
      <Footer />
    </>
  );
}