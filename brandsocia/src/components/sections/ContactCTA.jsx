'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export default function ContactCTA() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
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
    <section 
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/90 via-primary-700/90 to-primary-900/90"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-10"></div>
        
        {/* Animated gradient orbs */}
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={isVisible ? { opacity: 0.3, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 1.2 }}
          className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-secondary-400/30 blur-3xl"
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          animate={isVisible ? { opacity: 0.3, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-secondary-500/30 blur-3xl"
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20 shadow-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent"
            >
              Ready to Transform Your Digital Presence?
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl mb-10 max-w-2xl mx-auto text-white/90"
            >
              Let's collaborate to create impactful digital experiences that drive results and help your business reach new heights.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button 
                href="/contact" 
                variant="secondary" 
                className="text-primary-800 bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 text-base px-8 py-4 font-semibold"
              >
                Schedule a Consultation
              </Button>
              
              <Button 
                href="/portfolio" 
                variant="outline" 
                className="text-white border-white hover:bg-white/20 transition-all duration-300 text-base px-8 py-4 font-semibold"
              >
                View Our Work
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}