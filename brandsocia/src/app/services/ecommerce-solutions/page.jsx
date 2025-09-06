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

export default function EcommerceSolutions() {
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
            <div className="w-24 h-24 rounded-2xl bg-red-600/30 flex items-center justify-center text-4xl backdrop-blur-sm border border-red-500/50">
              🛒
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-rose-600">
            E-commerce Solutions
          </h1>
          <p className="text-xl text-black mb-8">
            Our complete e-commerce solutions streamline the shopping experience, boost sales, and create seamless customer journeys from browse to purchase.
          </p>
          <Button onClick={() => router.push('/contact')} className="bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700">
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
        <motion.h2 variants={itemVariants} className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
          Our E-commerce Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div variants={itemVariants}>
            <Card className="h-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-red-900/50 flex items-center justify-center text-red-400 mr-4 border border-red-700/50">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-red-400">Store Setup</h3>
              </div>
              <p className="text-gray-300 mt-4">
                Complete e-commerce store development with custom design, product catalog setup, and inventory management. We build stores that drive sales and enhance customer experience.
              </p>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="h-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-rose-900/50 flex items-center justify-center text-rose-400 mr-4 border border-rose-700/50">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-rose-400">Payment Integration</h3>
              </div>
              <p className="text-gray-300 mt-4">
                Secure payment gateway integration with multiple options including credit cards, digital wallets, and installment plans. We ensure smooth, secure transactions for your customers.
              </p>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="h-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-pink-900/50 flex items-center justify-center text-pink-400 mr-4 border border-pink-700/50">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-pink-400">Conversion Optimization</h3>
              </div>
              <p className="text-gray-300 mt-4">
                Data-driven strategies to increase conversion rates, reduce cart abandonment, and maximize customer lifetime value. We turn browsers into buyers with proven optimization techniques.
              </p>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="h-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-900/50 flex items-center justify-center text-purple-400 mr-4 border border-purple-700/50">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-purple-400">Performance Analytics</h3>
              </div>
              <p className="text-gray-300 mt-4">
                Comprehensive analytics and reporting to track performance, customer behavior, and ROI of your e-commerce store. We provide actionable insights to continuously improve your store.
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
          Our E-commerce Development Process
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          {[
            { title: 'Discovery & Planning', description: 'We analyze your business needs, target audience, and competition to create a strategic e-commerce plan.' },
            { title: 'Design & Development', description: 'Our team designs and builds a custom e-commerce solution that aligns with your brand and business goals.' },
            { title: 'Testing & Launch', description: 'We thoroughly test all aspects of your store before launching to ensure a flawless shopping experience.' },
            { title: 'Optimization & Growth', description: 'Post-launch, we continuously monitor, optimize, and scale your e-commerce store for maximum performance.' }
          ].map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex mb-12 last:mb-0"
            >
              <div className="mr-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-rose-600 text-white font-bold">
                  {index + 1}
                </div>
                {index < 3 && <div className="w-0.5 h-full ml-6 bg-gradient-to-b from-red-500 to-rose-600"></div>}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">{step.title}</h3>
                <p className="text-black">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Platforms Section */}
      <motion.div
        className="container mx-auto px-4 py-20"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="text-4xl font-bold text-center mb-16">
          E-commerce Platforms We Work With
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { name: 'Shopify', icon: '🛍️' },
            { name: 'WooCommerce', icon: '🛒' },
            { name: 'Magento', icon: '🏪' },
            { name: 'BigCommerce', icon: '🏬' },
          ].map((platform, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 p-6 rounded-2xl text-center"
            >
              <div className="text-4xl mb-4">{platform.icon}</div>
              <h3 className="text-xl font-bold text-white">{platform.name}</h3>
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
          <Card className="bg-gradient-to-br from-red-900/40 to-rose-900/40 border border-red-700/50 p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to build your e-commerce store?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's create a seamless shopping experience that converts visitors into loyal customers.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button onClick={() => router.push('/contact')} className="bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700">
                Get Started
              </Button>
              <Button onClick={() => router.push('/portfolio')} variant="outline" className="border-white text-white hover:bg-white/10">
              View E-commerce Projects
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