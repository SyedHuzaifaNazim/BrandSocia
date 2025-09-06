'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ColorGradientBackground from '@/components/ColorGradientBackground';
import AnimatedGradientBackground from '@/components/AnimatedGradientBackground';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function WebDevelopment() {
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

  const features = [
    {
      title: "WordPress Development",
      description: "Custom WordPress themes and plugins tailored to your specific business needs.",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      imageAlt: "WordPress Development"
    },
    {
      title: "Full-Stack Applications",
      description: "Complete web applications with modern frontend and backend technologies.",
      imageUrl: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      imageAlt: "Full-Stack Applications"
    },
    {
      title: "E-Commerce Solutions",
      description: "Online stores with secure payment gateways and inventory management.",
      imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      imageAlt: "E-Commerce Solutions"
    },
    {
      title: "Responsive Design",
      description: "Websites that look great on all devices from desktop to mobile.",
      imageUrl: "https://images.unsplash.com/photo-1526406915894-7bcd65f60845?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      imageAlt: "Responsive Design"
    },
    {
      title: "API Integration",
      description: "Seamless integration with third-party services and platforms.",
      imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      imageAlt: "API Integration"
    },
    {
      title: "Performance Optimization",
      description: "Fast-loading websites with optimized code and assets.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      imageAlt: "Performance Optimization"
    }
  ];

  const process = [
    {
      title: "Discovery & Planning",
      description: "We analyze your requirements and create a detailed project plan.",
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      imageAlt: "Discovery & Planning"
    },
    {
      title: "Design & Prototyping",
      description: "We create wireframes and designs for your approval.",
      imageUrl: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      imageAlt: "Design & Prototyping"
    },
    {
      title: "Development",
      description: "Our developers bring your website to life with clean code.",
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      imageAlt: "Development"
    },
    {
      title: "Testing & Quality Assurance",
      description: "We thoroughly test your website across all devices and browsers.",
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      imageAlt: "Testing & Quality Assurance"
    },
    {
      title: "Deployment & Launch",
      description: "We deploy your website and ensure everything works perfectly.",
      imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      imageAlt: "Deployment & Launch"
    },
    {
      title: "Maintenance & Support",
      description: "We provide ongoing support and maintenance services.",
      imageUrl: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      imageAlt: "Maintenance & Support"
    }
  ];

  const portfolioItems = [
    {
      title: "E-commerce Platform",
      description: "A fully responsive online store with secure payment processing.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
    },
    {
      title: "Corporate Website",
      description: "A professional website for a leading financial services company.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
    },
    {
      title: "SaaS Application",
      description: "A cloud-based software solution with user authentication and dashboard.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
    }
  ];

  return (
    <>
      <ColorGradientBackground />
      <AnimatedGradientBackground />
      <Header />
      
      <main className="min-h-screen pt-24 pb-16">
        {/* Hero Section */}
        <motion.div 
          className="container mx-auto px-4 pt-8 pb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="block bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  Web Development
                </span>
                <span className="block text-3xl md:text-4xl text-gray-700 font-normal mt-2">
                  Services
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Custom websites and web applications built with modern technologies to drive your business growth and online presence.
              </p>
              <Button 
                className="group px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:shadow-2xl shadow-lg"
                onClick={() => router.push('/contact')}
              >
                Start Your Project
                <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
              </Button>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80" 
                  alt="Web Development" 
                  className="w-full h-auto object-cover transition-all duration-500 hover:scale-105"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Features Section */}
        <motion.div 
          ref={sectionRef}
          className="container mx-auto px-4 py-16 bg-gray-50/50 rounded-3xl my-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Web Development Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">We offer a comprehensive range of web development services to meet your business needs.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              >
                <Card className="h-full p-8 rounded-3xl transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center overflow-hidden mb-6 shadow-lg">
                    <img 
                      src={feature.imageUrl} 
                      alt={feature.imageAlt} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Process Section */}
        <motion.div 
          className="container mx-auto px-4 py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Development Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">We follow a structured approach to deliver high-quality web solutions.</p>
          </div>
          
          <div className="relative">
            {/* Process Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-orange-300 to-orange-500 rounded-full hidden md:block"></div>
            
            <div className="space-y-12">
              {process.map((step, index) => (
                <motion.div 
                  key={index}
                  className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                >
                  <div className="md:w-1/2 flex flex-col items-center md:items-end">
                    <Card className={`p-6 rounded-3xl w-full max-w-md ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-orange-400 to-orange-600 flex items-center justify-center overflow-hidden shadow-md flex-shrink-0">
                          <img 
                            src={step.imageUrl} 
                            alt={step.imageAlt} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                  
                  <div className="relative md:w-0">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                  
                  <div className="md:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Portfolio Section */}
        <motion.div 
          className="container mx-auto px-4 py-16 bg-gray-50/50 rounded-3xl my-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Web Development Portfolio</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Check out some of our recent web development projects.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              >
                <Card className="h-full overflow-hidden rounded-3xl transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <Link href="/portfolio" className="text-primary-600 font-medium hover:text-primary-700 transition-colors duration-300">
                      View Project
                      <span className="ml-1">→</span>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
{/* CTA Section */}
<motion.div 
  className="container mx-auto px-4 py-16"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
>
  <Card className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-orange-50 to-orange-100/50 border border-orange-200/50 shadow-xl">
    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Ready to Build Your Website?</h2>
        <p className="text-lg text-gray-600 mb-6">Let's discuss your project and create a custom solution that drives results.</p>
        <Button 
          className="group px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:shadow-2xl shadow-lg"
          onClick={() => router.push('/contact')}
        >
          Start Your Project
          <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
        </Button>
      </div>
      <div className="w-full md:w-1/3 flex-shrink-0">
        <div className="aspect-square rounded-3xl overflow-hidden p-4 flex items-center justify-center shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80" 
            alt="Web Development" 
            className="w-full h-full object-cover rounded-2xl"
          />
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