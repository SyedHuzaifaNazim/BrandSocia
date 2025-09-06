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

export default function SocialMediaMarketing() {
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
      title: "Strategy Development",
      description: "Comprehensive social media strategies tailored to your business goals and target audience.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      imageAlt: "Strategy Development"
    },
    {
      title: "Content Creation",
      description: "Engaging content creation including images, videos, and copy that resonates with your audience.",
      imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      imageAlt: "Content Creation"
    },
    {
      title: "Community Management",
      description: "Active community engagement and management to build relationships with your audience.",
      imageUrl: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      imageAlt: "Community Management"
    },
    {
      title: "Performance Analytics",
      description: "Detailed analytics and reporting to measure performance and optimize your social media strategy.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      imageAlt: "Performance Analytics"
    },
    {
      title: "Paid Advertising",
      description: "Strategic paid social campaigns to reach new audiences and drive conversions.",
      imageUrl: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      imageAlt: "Paid Advertising"
    },
    {
      title: "Influencer Marketing",
      description: "Partnerships with relevant influencers to expand your reach and credibility.",
      imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      imageAlt: "Influencer Marketing"
    }
  ];

  const platforms = [
    {
      name: "Instagram",
      description: "Visual storytelling and engagement with your audience through photos, videos, and Stories.",
      imageUrl: "https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      imageAlt: "Instagram Platform"
    },
    {
      name: "Facebook",
      description: "Community building and targeted advertising to reach specific demographics.",
      imageUrl: "https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      imageAlt: "Facebook Platform"
    },
    {
      name: "Twitter",
      description: "Real-time engagement and conversation with your audience and industry.",
      imageUrl: "https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      imageAlt: "Twitter Platform"
    },
    {
      name: "LinkedIn",
      description: "Professional networking and B2B marketing to establish industry authority.",
      imageUrl: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      imageAlt: "LinkedIn Platform"
    },
    {
      name: "TikTok",
      description: "Creative short-form video content to reach younger audiences.",
      imageUrl: "https://images.unsplash.com/photo-1611605698802-7d4e19d8ef3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      imageAlt: "TikTok Platform"
    },
    {
      name: "YouTube",
      description: "Long-form video content to educate and engage your audience.",
      imageUrl: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      imageAlt: "YouTube Platform"
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
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                  Social Media
                </span>
                <span className="block text-3xl md:text-4xl text-gray-700 font-normal mt-2">
                  Marketing
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We create data-driven social media strategies that increase engagement, build brand awareness, and drive conversions across all major platforms.
              </p>
              <Button 
                className="group px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:shadow-2xl shadow-lg"
                onClick={() => router.push('/contact')}
              >
                Get Started
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
                  src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80" 
                  alt="Social Media Marketing" 
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Social Media Marketing Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">We offer a comprehensive range of social media services to help your business grow online.</p>
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
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center overflow-hidden mb-6 shadow-lg">
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
        
        {/* Platforms Section */}
        <motion.div 
          className="container mx-auto px-4 py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 0 : 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Platforms We Specialize In</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">We create tailored strategies for all major social media platforms.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 20 , y: 0 }}
                animate={{ opacity: isVisible ? 0 :1, y: isVisible ? 20 : 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              >
                <Card className="h-full p-8 rounded-3xl transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center overflow-hidden mb-6 shadow-lg">
                    <img 
                      src={platform.imageUrl} 
                      alt={platform.imageAlt} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{platform.name}</h3>
                  <p className="text-gray-600">{platform.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Results Section */}
        <motion.div 
          className="container mx-auto px-4 py-16 bg-gray-50/50 rounded-3xl my-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 0 : 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Results You Can Expect</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Our data-driven approach delivers measurable results for your business.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: isVisible ? 0 : 1, scale: isVisible ? 1 : 0.9 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full p-8 rounded-3xl text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="text-5xl font-bold text-purple-600 mb-2">+150%</div>
                <p className="text-gray-600">Average Engagement Increase</p>
              </Card>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: isVisible ? 0 : 1, scale: isVisible ? 1 : 0.9 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full p-8 rounded-3xl text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="text-5xl font-bold text-pink-600 mb-2">+200%</div>
                <p className="text-gray-600">Follower Growth</p>
              </Card>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: isVisible ? 0 : 1, scale: isVisible ? 1 : 0.9 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="h-full p-8 rounded-3xl text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="text-5xl font-bold text-purple-600 mb-2">+80%</div>
                <p className="text-gray-600">Website Traffic from Social</p>
              </Card>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: isVisible ? 0 : 1, scale: isVisible ? 1 : 0.9 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="h-full p-8 rounded-3xl text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="text-5xl font-bold text-pink-600 mb-2">+120%</div>
                <p className="text-gray-600">Conversion Rate Improvement</p>
              </Card>
            </motion.div>
          </div>
        </motion.div>
        
        {/* CTA Section */}
        <motion.div 
          className="container mx-auto px-4 py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 0 : 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Card className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-purple-50 to-pink-100/50 border border-purple-200/50 shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Ready to boost your social media presence?</h2>
                <p className="text-lg text-gray-600 mb-6">Let's create a social media strategy that increases engagement and drives results for your business.</p>
                <Button 
                  className="group px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:shadow-2xl shadow-lg"
                  onClick={() => router.push('/contact')}
                >
                  Get Started
                  <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
                </Button>
              </div>
              <div className="w-full md:w-1/3 flex-shrink-0">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-purple-400 to-pink-600 p-8 flex items-center justify-center shadow-lg">
                  <span className="text-8xl">📱</span>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </main>
      
      <Footer />
    </>
  );
              // View Social Media Projects
//             </Button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
};