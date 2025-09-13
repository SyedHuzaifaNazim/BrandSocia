'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const projects = [
  {
    id: 1,
    title: 'TaxFilerz',
    category: 'Branding',
    image: '/companies/TaxFilerz.jpg',
    link: 'https://taxfilerz.com/',
    description: 'TaxFilerz is a tax preparation software that helps individuals and businesses file their taxes online. It provides a user-friendly interface, automated tax calculations, and secure data storage. TaxFilerz is trusted by millions of users around the world.',
  },
  {
    id: 2,
    title: 'Brand4you',
    category: 'Web Design',
    image: '/companies/Brand4you.jpg',
    link: 'https://www.brands4you.store/',
    description: 'Brand4you is a brand management platform that helps businesses manage their brand identity, customer relationships, and marketing efforts. It provides a range of tools, including brand guidelines, customer feedback, and social media management. Brand4you is trusted by millions of businesses around the world.',
  },
  {
    id: 3,
    title: 'Sasti Shopping',
    category: 'Marketing',
    image: '/companies/Sastishopping.jpg',
    link: 'https://sastishopping.shop/',
    description: 'Sasti Shopping is an e-commerce platform that offers a wide range of products to customers. We have a user-friendly interface, secure payment gateways, and fast delivery services. Sasti Shopping is trusted by millions of customers around the world.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12,
    },
  },
  hover: {
    y: -10,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 10,
    },
  },
};

export default function PortfolioPreview() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
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
      className="py-20 bg-gradient-to-b relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-primary-500/5 to-secondary-400/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></motion.div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-primary-600/5 to-secondary-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></motion.div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="text-sm font-semibold text-primary-600 bg-primary-50 px-4 py-2 rounded-full">
              Our Work
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Explore our portfolio of successful projects and see how we've helped businesses achieve 
            their goals through innovative design and strategic thinking.
          </p>
        </motion.div>
        
        {/* Projects Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="relative group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Card className="overflow-hidden h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform group-hover:-translate-y-2">
                {/* Image Container with Hover Effect */}
                <div className="h-64 bg-gray-200 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-800 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  {/* Hover Action Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Button 
                      variant="outline" 
                      className="border-2 border-white text-white bg-black/20 backdrop-blur-sm hover:bg-white hover:text-black transform translate-y-4 group-hover:translate-y-0 transition-all duration-500"
                      href={project.link}
                    >
                      View Case Study
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Button>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Featured Project</span>
                    <div className="flex space-x-2">
                      {[1, 2, 3].map((tech) => (
                        <div key={tech} className="w-2 h-2 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75"></div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Accent Border Effect */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-400 to-secondary-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-500/10 to-primary-700/10 backdrop-blur-sm border border-primary-200/30 rounded-3xl p-12 mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Ready to create something amazing together?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can bring your vision to life with our expertise in design and development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="/portfolio" 
                variant="primary" 
                size="lg"
                className="px-8 py-4 rounded-xl group"
              >
                View Full Portfolio
                <svg className="w-3 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {/* <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /> */}
                </svg>
              </Button>
              {/* <Button 
                href="/contact" 
                variant="outline" 
                size="lg"
                className="px-8 py-4 rounded-xl border-2"
              >
                Start a Project
              </Button> */}
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .group:hover .transform {
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}