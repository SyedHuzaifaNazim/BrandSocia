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

export default function SEO() {
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
            <div className="w-24 h-24 rounded-2xl bg-blue-600/30 flex items-center justify-center overflow-hidden backdrop-blur-sm border border-blue-500/50">
              <img 
                src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" 
                alt="Search Engine Optimization" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Search Engine Optimization
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Boost your online visibility and drive organic traffic with our data-driven SEO strategies tailored to your business goals.
          </p>
          <Button onClick={() => router.push('/contact')} className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
            Get Started
          </Button>
        </motion.div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        className="container mx-auto px-4 py-20 bg-gray-900 rounded-3xl"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="text-4xl font-bold text-center mb-16">
          Our SEO Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div variants={itemVariants}>
            <Card className="h-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 p-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Technical SEO</h3>
              <p className="text-gray-300">
                We optimize your website structure, speed, and mobile-friendliness to ensure search engines can easily crawl and index your content.
              </p>
            </Card>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card className="h-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 p-8">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">On-Page SEO</h3>
              <p className="text-gray-300">
                Our experts optimize your content, meta tags, and internal linking structure to improve relevance and keyword rankings.
              </p>
            </Card>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card className="h-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 p-8">
              <h3 className="text-2xl font-bold mb-4 text-indigo-400">Off-Page SEO</h3>
              <p className="text-gray-300">
                We build high-quality backlinks and enhance your online reputation to boost your domain authority and rankings.
              </p>
            </Card>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card className="h-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 p-8">
              <h3 className="text-2xl font-bold mb-4 text-pink-400">Local SEO</h3>
              <p className="text-gray-300">
                Dominate local search results with optimized Google Business Profile and location-based keyword strategies.
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
          Our SEO Process
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          {[
            { title: 'SEO Audit', description: 'We analyze your current SEO performance, identify issues, and create a roadmap for improvement.' },
            { title: 'Keyword Research', description: 'We identify high-value keywords that your target audience is searching for.' },
            { title: 'On-Page Optimization', description: 'We optimize your website content and structure for better search engine visibility.' },
            { title: 'Off-Page Strategy', description: 'We implement link building and brand mention strategies to boost your authority.' },
            { title: 'Monitoring & Reporting', description: 'We track your rankings, traffic, and conversions, making data-driven adjustments.' }
          ].map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex mb-12 last:mb-0"
            >
              <div className="mr-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold">
                  {index + 1}
                </div>
                {index < 4 && <div className="w-0.5 h-full ml-6 bg-gradient-to-b from-blue-500 to-purple-600"></div>}
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
        className="container mx-auto px-4 py-20 bg-gray-900 rounded-3xl"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="text-4xl font-bold text-center mb-16">
          Results You Can Expect
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div variants={itemVariants}>
            <Card className="h-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 p-8 text-center">
              <h3 className="text-5xl font-bold mb-4 text-blue-400">+150%</h3>
              <p className="text-xl text-gray-300">Increase in Organic Traffic</p>
            </Card>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card className="h-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 p-8 text-center">
              <h3 className="text-5xl font-bold mb-4 text-purple-400">Top 10</h3>
              <p className="text-xl text-gray-300">Rankings for Target Keywords</p>
            </Card>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card className="h-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 p-8 text-center">
              <h3 className="text-5xl font-bold mb-4 text-indigo-400">+75%</h3>
              <p className="text-xl text-gray-300">Increase in Conversions</p>
            </Card>
          </motion.div>
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
          <Card className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-700/50 p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Boost Your Search Rankings?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's create an SEO strategy that drives real business results for your company.  
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button onClick={() => router.push('/contact')} className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                Get a Free SEO Audit
              </Button>
              <Button onClick={() => router.push('/portfolio')} variant="outline" className="border-white text-white hover:bg-white/10">
                View Our Portfolio
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