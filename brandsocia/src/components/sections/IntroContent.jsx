import { Button } from '@/components/ui/Button';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function IntroContent() {
  const containerRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Add console.log to debug image paths
  const images = [
    '/background1.jpg',
    '/background2.jpg',
    '/background3.jpg',
    '/background4.jpg',
  ];

  useEffect(() => {
    console.log('Current image path:', images[currentImageIndex]);
  }, [currentImageIndex]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  const handleImageError = (e) => {
    console.error('Image failed to load:', images[currentImageIndex]);
  };

  const router = useRouter();
  const handleNavigation = (path) => {
    router.push(path);
  };
  return (
    <motion.div 
      ref={containerRef}
      className="relative min-h-screen"
      style={{ opacity, scale }}
    >
      {/* Background Images with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          key={currentImageIndex}
        >
          <Image
            src={images[currentImageIndex]}
            alt={`Background Image ${currentImageIndex + 1}`}
            layout="fill"
            objectFit="cover"
            className="opacity-50"
            onError={handleImageError}
            priority={true}
          />
        </motion.div>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-white">
          Empowering Brands with Innovative Solutions
        </h1>
        <p className="text-lg sm:text-xl text-center text-gray-300 mt-4 max-w-2xl">
          We help brands build their online presence, connect with their audience, and achieve their business goals.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center mt-8">
          <Button 
            onClick={() => handleNavigation('/services')} 
            variant="primary" 
            size="lg" 
            className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full"
          >
            Explore Services
          </Button>
          <Button 
            onClick={() => handleNavigation('/contact')} 
            variant="outline" 
            size="lg" 
            className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-white text-white hover:bg-white hover:text-primary-600"
          >
            Get in Touch
          </Button>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
