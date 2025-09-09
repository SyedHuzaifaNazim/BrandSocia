'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { NAV_LINKS, SERVICES, SOCIAL_LINKS, COMPANY_INFO } from "@/lib/constants";
import { motion, AnimatePresence } from 'framer-motion';

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);
  const newsletterSenderEmail = "brandsocia7@gmail.com";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setMessage("Please enter a valid email address.");
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setMessage("Thank you for subscribing! 🎉 You'll receive our newsletter from " + newsletterSenderEmail);
      setEmail("");
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
      // Clear message after 5 seconds
      setTimeout(() => setMessage(""), 5000);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <footer className="relative overflow-hidden" ref={footerRef}>
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900 via-black to-orange-800 opacity-95 z-0">
        {/* Animated gradient elements */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isVisible ? { opacity: 0.2, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full blur-3xl opacity-20"
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isVisible ? { opacity: 0.15, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-red-600 to-orange-400 rounded-full blur-3xl opacity-20"
        ></motion.div>
      </div>
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik02MCA2MEgwdjEuNUw2MCA2MHpNNjAgNjBIMHYtMS41TDYwIDYwek02MCA2MEgwdjEuNUw2MCA2MHpNNjAgNjBIMHYtMS41TDYwIDYweiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')] opacity-10 z-0"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20"
        >
          {/* Brand section */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400 bg-300% animate-gradient"
              >
                <img src={COMPANY_INFO.logo} alt={COMPANY_INFO.name} width={200} height={150} />
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                className="text-orange-100 max-w-md text-lg mt-6 leading-relaxed"
              >
                We help brands grow with innovative digital strategies and stunning design that converts visitors into customers.
              </motion.p>
            </div>
            
            {/* Contact information */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="space-y-4 mt-8"
            >
              <div className="flex items-center group">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center mr-4 transition-all duration-300 group-hover:scale-110">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-orange-200 transition-colors duration-300 group-hover:text-white">
                  {COMPANY_INFO.email}
                </p>
              </div>
              
              <div className="flex items-center group">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center mr-4 transition-all duration-300 group-hover:scale-110">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <p className="text-orange-200 transition-colors duration-300 group-hover:text-white">
                  {COMPANY_INFO.phone}
                </p>
              </div>
              
              <div className="flex items-center group">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center mr-4 transition-all duration-300 group-hover:scale-110">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-orange-200 transition-colors duration-300 group-hover:text-white">
                  {COMPANY_INFO.address}
                </p>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Links grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-semibold mb-6 text-orange-300 relative inline-block pb-2">
                Navigation
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full"></span>
              </h4>
              <ul className="space-y-4">
                {NAV_LINKS.map((item) => (
                  <li key={item.label}>
                    <Link 
                      href={item.href} 
                      className="text-orange-100 hover:text-white transition-all duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 transition-all duration-300 group-hover:mr-4 group-hover:w-3 group-hover:h-3"></span>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-semibold mb-6 text-orange-300 relative inline-block pb-2">
                Services
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full"></span>
              </h4>
              <ul className="space-y-4">
                {SERVICES.map((service) => (
                  <li key={service.label}>
                    <Link 
                      href={service.href} 
                      className="text-orange-100 hover:text-white transition-all duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 transition-all duration-300 group-hover:mr-4 group-hover:w-3 group-hover:h-3"></span>
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-semibold mb-6 text-orange-300 relative inline-block pb-2">
                Connect
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full"></span>
              </h4>
              
              <div className="flex space-x-3 mb-8">
                {SOCIAL_LINKS.map((social) => (
                  <motion.a
                    // logo={social.icon} 
                    key={social.name}
                    href={social.href} 
                    className="w-12 h-12 rounded-xl bg-gradient-to-b from-orange-800/40 to-orange-900/70 flex items-center justify-center text-orange-200 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/20 backdrop-blur-sm border border-orange-700/30"
                    aria-label={social.name}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="w-5 h-5 bg-current rounded-sm"></div>
                  </motion.a>
                ))}
              </div>
              
              {/* Newsletter subscription */}
              <div className="mt-8">
                <h5 className="text-lg font-medium mb-4 text-orange-200">Join our newsletter</h5>
                <p className="text-sm text-orange-300/80 mb-6 leading-relaxed">
                  Stay updated with our latest news and offers. We'll send our newsletters from {newsletterSenderEmail}
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
                  <div className="relative">
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      className="w-full px-5 py-4 rounded-xl bg-orange-900/30 border border-orange-700/50 text-white placeholder-orange-300/70 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all duration-300 backdrop-blur-sm"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <motion.button 
                    type="submit" 
                    className="px-6 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-medium rounded-xl hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center shadow-lg hover:shadow-orange-500/30 relative overflow-hidden group"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </>
                      ) : "Subscribe"}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.button>
                  <p className="text-xs text-orange-300/60 mt-2">
                    By subscribing, you agree to receive our newsletter and marketing emails. 
                    You can unsubscribe at any time. We respect your privacy.
                  </p>
                </form>
                <AnimatePresence>
                  {message && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className={`mt-4 p-4 rounded-xl text-sm font-medium transition-all duration-300 ${
                        message.includes("Thank you") 
                          ? "bg-green-900/30 text-green-300 border border-green-800/50" 
                          : "bg-red-900/30 text-red-300 border border-red-800/50"
                      }`}
                    >
                      {message}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* TextHoverEffect section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="h-auto flex items-center justify-center mb-10"
        >
          <TextHoverEffect text="BRANDSOCIA" duration={0.15} />
        </motion.div>
        
        {/* Bottom section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="border-t border-orange-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-orange-300 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-orange-300 hover:text-white transition-colors text-sm hover:underline">Privacy Policy</a>
            <a href="#" className="text-orange-300 hover:text-white transition-colors text-sm hover:underline">Terms of Service</a>
            <a href="#" className="text-orange-300 hover:text-white transition-colors text-sm hover:underline">Cookie Policy</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}