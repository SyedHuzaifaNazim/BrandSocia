'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';

// Blog posts data
const posts = [
  {
    id: 1,
    title: 'Emerging Social Media Trends for 2023',
    excerpt: 'Discover the latest social media trends that will transform your marketing strategy and drive engagement this year.',
    date: 'April 15, 2023',
    author: 'Sarah Johnson',
    category: 'Social Media',
    image: {
      src: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg',
      alt: 'Team collaboration meeting',
      aspectRatio: '16/9'
    },
    readTime: '5 min read',
    link: '/blog/social-media-trends-2023'
  },
  {
    id: 2,
    title: 'Building a Memorable Brand Identity',
    excerpt: 'Learn the key elements of a compelling brand identity that creates lasting connections with your target audience.',
    date: 'March 28, 2023',
    author: 'Michael Chen',
    category: 'Branding',
    image: {
      src: 'https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg',
      alt: 'Creative branding and design elements',
      aspectRatio: '4/3'
    },
    readTime: '7 min read',
    link: '/blog/building-brand-identity'
  },
  {
    id: 3,
    title: 'The Mobile-First Approach to Design',
    excerpt: 'Why mobile optimization should be the foundation of your digital strategy in an increasingly smartphone-centric world.',
    date: 'March 10, 2023',
    author: 'Alex Rivera',
    category: 'Design',
    image: {
      src: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg',
      alt: 'Mobile phone interface design',
      aspectRatio: '16/9'
    },
    readTime: '4 min read',
    link: '/blog/mobile-first-design'
  }
];

// Fallback images
const fallbackImages = {
  1: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
  2: 'https://burst.shopifycdn.com/photos/working-on-brand-design.jpg',
  3: 'https://cdn.pixabay.com/photo/2020/05/18/16/17/social-media-5187243_1280.png'
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 12 } },
  hover: { y: -10, transition: { type: 'spring', stiffness: 400, damping: 10 } },
};

export default function BlogPreview() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [imageErrors, setImageErrors] = useState({});
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
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  const handleImageError = (postId) => {
    setImageErrors((prev) => ({ ...prev, [postId]: true }));
  };

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute right-[10%] top-[20%] h-64 w-64 rounded-full bg-primary-100/20 blur-xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute left-[15%] bottom-[10%] h-48 w-48 rounded-full bg-secondary-100/20 blur-xl"
        />
      </div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="inline-block rounded-full bg-gradient-to-r from-primary-50 to-primary-100 px-4 py-1.5 text-sm font-medium text-primary-700 mb-4 shadow-sm"
          >
            Latest Insights
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Our Thoughts
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Stay updated with the latest insights and trends in digital marketing, design, and brand strategy.
          </p>
        </motion.div>

        {/* Blog posts grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              variants={cardVariants}
              whileHover="hover"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Link href={post.link}>
                <Card
                  className={`overflow-hidden h-full flex flex-col bg-white border-0 shadow-md hover:shadow-xl rounded-xl transition-all duration-300 ${
                    hoveredIndex === index ? 'ring-2 ring-primary-300' : ''
                  }`}
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden rounded-t-xl">
                    <Image
                      src={imageErrors[post.id] ? fallbackImages[post.id] : post.image.src}
                      alt={post.image.alt}
                      fill
                      className={`object-cover transition-transform duration-700 ease-out ${
                        hoveredIndex === index ? 'scale-105' : 'scale-100'
                      }`}
                      onError={() => handleImageError(post.id)}
                      priority={index === 0}
                    />

                    {/* Category badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="inline-block rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-800 shadow-sm">
                        {post.category}
                      </span>
                    </div>

                    {/* Read time badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <span className="inline-block rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white shadow-sm">
                        {post.readTime}
                      </span>
                    </div>
                  </div>

                  {/* Post content */}
                  <div className="flex flex-col flex-grow p-6">
                    <div className="flex items-center mb-3">
                      <p className="text-sm text-primary-600 font-medium">{post.date}</p>
                      <span className="mx-2 text-gray-300">•</span>
                      <p className="text-sm text-gray-600">{post.author}</p>
                    </div>

                    <h3 className="text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-primary-600 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 mb-4 flex-grow line-clamp-3">{post.excerpt}</p>

                    <Button
                      variant="ghost"
                      className="px-0 text-primary-600 hover:text-primary-700 font-medium mt-auto"
                    >
                      Read more →
                    </Button>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Link href="/blog">
            <Button
              variant="primary"
              className="px-8 py-3 text-base font-medium shadow-md hover:shadow-lg transition-all duration-300 justify-center"
            >
              View All Posts
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
