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

export default function ContentStrategy() {
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
            <div className="w-24 h-24 rounded-2xl bg-amber-600/30 flex items-center justify-center overflow-hidden backdrop-blur-sm border border-amber-500/50">
              <img 
                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" 
                alt="Content Strategy" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-600">
            Content Strategy
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Our content strategies tell compelling brand stories that drive meaningful engagement and establish thought leadership in your industry.
          </p>
          <Button onClick={() => router.push('/contact')} className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700">
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
          Our Content Strategy Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div variants={itemVariants}>
            <Card className="h-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-amber-900/50 flex items-center justify-center text-amber-400 mr-4 border border-amber-700/50">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-amber-400">Content Planning</h3>
              </div>
              <p className="text-gray-300 mt-4">
                Strategic content calendars and planning that align with your business goals and audience needs. We develop comprehensive plans that ensure consistent, relevant content delivery.
              </p>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="h-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-orange-900/50 flex items-center justify-center text-orange-400 mr-4 border border-orange-700/50">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-orange-400">Copywriting</h3>
              </div>
              <p className="text-gray-300 mt-4">
                Compelling copy that resonates with your audience and drives action across all platforms. Our expert copywriters craft messaging that converts visitors into customers.
              </p>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="h-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-yellow-900/50 flex items-center justify-center text-yellow-400 mr-4 border border-yellow-700/50">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-yellow-400">Blog Management</h3>
              </div>
              <p className="text-gray-300 mt-4">
                Complete blog management services including topic research, writing, editing, and publishing. We handle every aspect of your blog to establish thought leadership in your industry.
              </p>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="h-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-red-900/50 flex items-center justify-center text-red-400 mr-4 border border-red-700/50">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-red-400">Content Promotion</h3>
              </div>
              <p className="text-gray-300 mt-4">
                Strategic distribution and promotion of content to maximize reach and engagement across channels. We ensure your content reaches the right audience at the right time.
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
          Our Content Development Process
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          {[
            { title: 'Research & Analysis', description: 'We analyze your audience, competitors, and industry trends to identify content opportunities.' },
            { title: 'Strategy Development', description: 'We create a comprehensive content strategy aligned with your business goals and audience needs.' },
            { title: 'Content Creation', description: 'Our team produces high-quality content that engages your audience and drives meaningful action.' },
            { title: 'Distribution & Measurement', description: 'We distribute your content across relevant channels and measure performance to optimize results.' }
          ].map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex mb-12 last:mb-0"
            >
              <div className="mr-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold">
                  {index + 1}
                </div>
                {index < 3 && <div className="w-0.5 h-full ml-6 bg-gradient-to-b from-amber-500 to-orange-600"></div>}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Results Section */}
      <motion.div
        className="container mx-auto px-4 py-20"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="text-4xl font-bold text-center mb-16">
          Results You Can Expect
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { title: 'Increased Engagement', value: '150%', description: 'Average increase in audience engagement with strategic content' },
            { title: 'Higher Conversion', value: '35%', description: 'Typical improvement in conversion rates with targeted content' },
            { title: 'Brand Authority', value: '200%', description: 'Growth in brand mentions and industry recognition' }
          ].map((result, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 p-8 rounded-2xl text-center"
            >
              <h3 className="text-2xl font-bold mb-2">{result.title}</h3>
              <p className="text-4xl font-bold text-amber-400 my-4">{result.value}</p>
              <p className="text-gray-300">{result.description}</p>
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
          <Card className="bg-gradient-to-br from-amber-900/40 to-orange-900/40 border border-amber-700/50 p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to develop a powerful content strategy?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's create content that engages your audience and drives meaningful results for your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button onClick={() => router.push('/contact')} className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700">
                Get Started
              </Button>
              <Button onClick={() => router.push('/portfolio')} variant="outline" className="border-white text-white hover:bg-white/10">
                View Content Projects
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