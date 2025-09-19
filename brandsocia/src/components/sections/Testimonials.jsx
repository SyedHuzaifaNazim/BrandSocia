import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import ColorGradientBackground from '../ColorGradientBackground';
import AnimatedGradientBackground from '../AnimatedGradientBackground';

const testimonials = [
  {
    id: 1,
    name: "Sheikh Azmat Ali",
    role: "Director",
    company: "TaxFilerz & Co.",
    image: "https://brandsocia.com/wp-content/uploads/2025/07/IMG-20250322-WA0005-e1742638883520-1.jpg",
    content: "Working with this team has been transformative for our business. Their innovative approach and dedication to excellence have helped us achieve remarkable results."
  },
  {
    id: 2,
    name: "Subyyil Fahim",
    role: "Manager",
    company: "Apna Ghar Apni Zameen",
    image: "https://brandsocia.com/wp-content/uploads/2025/07/IMG-20250322-WA0004-e1742639040613.jpg",
    content: "The level of professionalism and creativity they bring to the table is unmatched. Our social media presence has grown exponentially since partnering with them."
  },
  {
    id: 3,
    name: "Muhammad Zeeshan",
    role: "High Court Advocate",
    company: "MZ Associates",
    image: "https://taxfilerz.com/wp-content/uploads/2025/03/memonm.jpeg",
    content: "Their strategic insights and attention to detail have been invaluable. They truly understand our brand vision and consistently deliver outstanding results."
  }
];

const TestimonialCard = ({ testimonial }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ 
      scale: 1.05,
      backgroundColor: "#FFA500",
      color: "white",
      transition: { duration: 0.3 }
    }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-xl shadow-lg p-8 relative cursor-pointer transform transition-all duration-300 hover:shadow-2xl"
  >
    <motion.div
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.5 }}
    >
      <FaQuoteLeft className="text-4xl text-orange-500 mb-4 group-hover:text-white" />
    </motion.div>
    <p className="italic mb-6 transition-colors duration-300 group-hover:text-white">{testimonial.content}</p>
    <div className="flex items-center">
      <motion.img
        whileHover={{ scale: 1.2 }}
        src={testimonial.image}
        alt={testimonial.name}
        className="w-12 h-12 rounded-full mr-4"
      />
      <div>
        <h4 className="font-semibold text-lg transition-colors duration-300">{testimonial.name}</h4>
        <p className="transition-colors duration-300">{testimonial.role}</p>
        <p className="text-orange-500 transition-colors duration-300 hover:text-white">{testimonial.company}</p>
      </div>
    </div>
  </motion.div>
);

const Testimonials = () => {
  return (
    <>
    <section className="py-20">
    <ColorGradientBackground />
    <AnimatedGradientBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it - hear from some of our satisfied clients
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default Testimonials;
