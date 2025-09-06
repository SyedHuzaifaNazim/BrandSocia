'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ColorGradientBackground from '@/components/ColorGradientBackground';
import AnimatedGradientBackground from '@/components/AnimatedGradientBackground';
import {Button} from '@/components/ui/Button';
import {Card} from '@/components/ui/Card';

export default function GraphicDesigning() {
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
      
      <main className="min-h-screen pt-24 pb-16" ref={sectionRef}>
      {/* Hero Section */}
      <motion.div
        className="container mx-auto px-4 py-20"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="max-w-4xl mx-auto text-center mb-16">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 rounded-2xl bg-purple-600/30 flex items-center justify-center text-4xl backdrop-blur-sm border border-purple-500/50">
              ✏️
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Graphic Designing
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Our graphic design services include creating visual concepts that inspire, inform, and captivate consumers. We develop the overall layout and production design for various applications.
          </p>
          <Button onClick={() => router.push('/contact')} className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700">
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
          Our Graphic Design Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div variants={itemVariants}>
            <Card className="h-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-900/50 flex items-center justify-center text-purple-400 mr-4 border border-purple-700/50">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-purple-400">Logo Design</h3>
              </div>
              <p className="text-gray-300 mt-4">
                Professional logo designs that represent your brand identity and make a memorable impression. We create unique, versatile, and timeless logos that stand out in the market.
              </p>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="h-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-pink-900/50 flex items-center justify-center text-pink-400 mr-4 border border-pink-700/50">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-pink-400">Brochures & Flyers</h3>
              </div>
              <p className="text-gray-300 mt-4">
                Eye-catching print materials that effectively communicate your message and promote your offerings. Our designs are attention-grabbing and conversion-focused.
              </p>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="h-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-indigo-900/50 flex items-center justify-center text-indigo-400 mr-4 border border-indigo-700/50">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-indigo-400">Business Cards</h3>
              </div>
              <p className="text-gray-300 mt-4">
                Professionally designed business cards that leave a lasting impression and facilitate networking. We create cards that reflect your brand's personality and professionalism.
              </p>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="h-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-400 mr-4 border border-blue-700/50">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14v6m-3-3h6M6 10h2a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6a2 2 0 012-2zm10-4a2 2 0 11-4 0 2 2 0 014 0zM6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-blue-400">Social Media Graphics</h3>
              </div>
              <p className="text-gray-300 mt-4">
                Engaging visuals for social media platforms that increase engagement and brand visibility. Our designs are optimized for each platform and tailored to your target audience.
              </p>
            </Card>
          </motion.div>
        </div>
      </motion.div>

      {/* Portfolio Section */}
      <motion.div
        className="container mx-auto px-4 py-20"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="text-4xl font-bold text-center mb-16">
          Our Design Process
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          {[
            { title: 'Discovery', description: 'We learn about your brand, goals, and target audience to understand your design needs.' },
            { title: 'Concept Development', description: 'We create initial design concepts based on your requirements and brand identity.' },
            { title: 'Refinement', description: 'We refine the chosen concept with your feedback until it perfectly matches your vision.' },
            { title: 'Finalization', description: 'We prepare the final designs in all required formats for your immediate use.' }
          ].map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex mb-12 last:mb-0"
            >
              <div className="mr-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold">
                  {index + 1}
                </div>
                {index < 3 && <div className="w-0.5 h-full ml-6 bg-gradient-to-b from-purple-500 to-pink-600"></div>}
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
          <Card className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-700/50 p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to elevate your visual identity?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's create stunning visual designs that capture attention and communicate your message effectively.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button onClick={() => router.push('/contact')} className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700">
                Get Started
              </Button>
              <Button onClick={() => router.push('/portfolio')} variant="outline" className="border-white text-white hover:bg-white/10">
                View Design Projects
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