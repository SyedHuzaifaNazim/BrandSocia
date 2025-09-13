"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";

const CheckIcon = () => (
  <svg
    version="1.0"
    preserveAspectRatio="xMidYMid meet"
    height="16"
    width="16"
    viewBox="0 0 30 30.000001"
    xmlns="http://www.w3.org/2000/svg"
    style={{ color: "#FFFFFF" }}
  >
    <g>
      <path
        fillRule="nonzero"
        d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 
           L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 
           L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 
           L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 
           C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 
           L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 
           C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z"
        fill="#FFFFFF"
      />
    </g>
  </svg>
);

const PricingCard = () => {
  const router = useRouter();
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
    <motion.div 
      className="text-center mb-12"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2 
        className="text-4xl md:text-5xl font-extrabold text-[#05060f] mb-2"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Pricing Plans
      </motion.h2>
      <motion.p 
        className="text-gray-600 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Choose the perfect plan for your needs
      </motion.p>
    </motion.div>
    <div className="flex flex-wrap justify-center gap-8 p-4">
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.1 }}
        whileHover={{ scale: 1.05 }}
        className="w-[300px] bg-[#FFA500] p-4 rounded-2xl border-[0.5vmin] border-[#05060f] shadow-[0.4rem_0.4rem_#05060f] text-black overflow-hidden"
      >
        <div className="flex flex-col h-full gap-2">
          <p className="text-[#05060f] text-[1.3rem] font-bold leading-tight">
            Starter
          </p>
          <div className="flex text-[#05060f] text-[1.8rem] font-bold leading-tight items-baseline">
            <p className="flex items-center">
              $<span className="text-[1.8rem]">49.29</span>
            </p>
            <div className="ml-1 text-sm">/mo</div>
          </div>
          <div className="opacity-80 text-sm">features</div>
          <ul className="flex flex-col gap-2 mt-2">
            {["3-Page Website (Home, About, Contact)", "Free Basic Logo (1 Concept)", "Free Domain (1 Year)", "Shared Hosting (1 Year)", "Template-Based Design", "Mobile-Friendly Layout", "Basic SEO Setup"].map(
              (item, idx) => (
                <li key={idx} className="flex items-center gap-1 text-sm">
                  <CheckIcon />
                  {item}
                </li>
              )
            )}
          </ul>
          <div className="flex justify-center mt-4">
            <Button 
              onClick={() => router.push('/contact')} 
              className="px-8 py-3 text-base font-medium bg-[#05060f] text-white hover:bg-[#FFA500] hover:text-[#05060f] border-2 border-[#05060f] transition-all duration-300"
            >
              Get Started
            </Button>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.3 }}
        whileHover={{ scale: 1.05 }}
        className="w-[300px] bg-[#4CAF50] p-4 rounded-2xl border-[0.5vmin] border-[#05060f] shadow-[0.4rem_0.4rem_#05060f] text-white overflow-hidden"
      >
        <div className="flex flex-col h-full gap-2">
          <p className="text-[#05060f] text-[1.3rem] font-bold leading-tight">
            Professional
          </p>
          <div className="flex text-[#05060f] text-[1.8rem] font-bold leading-tight items-baseline">
            <p className="flex items-center">
              $<span className="text-[1.8rem]">99.99</span>
            </p>
            <div className="ml-1 text-sm">/mo</div>
          </div>
          <div className="opacity-80 text-sm">features</div>
          <ul className="flex flex-col gap-2 mt-2">
            {["5-Page Custom Website", "Professional Logo (3 Concepts)", "Free Domain (2 Years)", "Business Hosting (2 Years)", "Custom Design", "Advanced SEO Package", "Social Media Integration"].map(
              (item, idx) => (
                <li key={idx} className="flex items-center gap-1 text-sm">
                  <CheckIcon />
                  {item}
                </li>
              )
            )}
          </ul>
          <div className="flex justify-center mt-4">
            <Button 
              onClick={() => router.push('/contact')} 
              className="px-8 py-3 text-base font-medium bg-[#05060f] text-white hover:bg-[#4CAF50] hover:text-[#05060f] border-2 border-[#05060f] transition-all duration-300"
            >
              Get Started
            </Button>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.5 }}
        whileHover={{ scale: 1.05 }}
        className="w-[300px] bg-[#2196F3] p-4 rounded-2xl border-[0.5vmin] border-[#05060f] shadow-[0.4rem_0.4rem_#05060f] text-white overflow-hidden"
      >
        <div className="flex flex-col h-full gap-2">
          <p className="text-[#05060f] text-[1.3rem] font-bold leading-tight">
            Enterprise
          </p>
          <div className="flex text-[#05060f] text-[1.8rem] font-bold leading-tight items-baseline">
            <p className="flex items-center">
              $<span className="text-[1.8rem]">199.99</span>
            </p>
            <div className="ml-1 text-sm">/mo</div>
          </div>
          <div className="opacity-80 text-sm">features</div>
          <ul className="flex flex-col gap-2 mt-2">
            {["10-Page Custom Website", "Premium Logo Package", "Free Domain (3 Years)", "Premium Hosting (3 Years)", "Custom Design & Development", "Complete SEO Suite", "E-commerce Integration"].map(
              (item, idx) => (
                <li key={idx} className="flex items-center gap-1 text-sm">
                  <CheckIcon />
                  {item}
                </li>
              )
            )}
          </ul>
          <div className="flex justify-center mt-4">
            <Button 
              onClick={() => router.push('/contact')} 
              className="px-8 py-3 text-base font-medium bg-[#05060f] text-white hover:bg-[#2196F3] hover:text-[#05060f] border-2 border-[#05060f] transition-all duration-300"
            >
              Get Started
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
    </>
  );
};

export default PricingCard;
