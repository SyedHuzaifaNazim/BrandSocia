"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

export const HeroParallax = ({
  products
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig);

  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]">
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="">
        <div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard product={product} key={product.title} />
          ))}
        </div>
        <div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((product) => (
            <ProductCard product={product} key={product.title} />
          ))}
        </div>
        <div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard product={product} key={product.title} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div
      className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-black">
        The Ultimate <br /> development studio
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 text-dark:text-black">
        We build beautiful products with the latest technologies and frameworks.
        We are a team of passionate developers and designers that love to build
        amazing products.
      </p>
    </div>
  );
};

export const ProductCard = ({
  product
}) => {
  return (
    <>
    <motion.div
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative shrink-0">
      <a href={product.link} className="block group-hover/product:shadow-2xl">
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title} />
      </a>
      <div
        className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2
        className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-black">
        {product.title}
      </h2>
    </motion.div>
    <div className="h-50"></div>
<div className="absolute bottom-4 left-4 flex gap-4 opacity-0 group-hover/product:opacity-100">
  <button
    onClick={() => {
      // Create modal component with project info
      const modal = document.createElement('div');
      modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
      modal.innerHTML = `
        <div class="bg-white p-6 rounded-lg max-w-2xl">
          <h3 class="text-xl font-bold mb-4">${product.title}</h3>
          <p class="text-gray-600 mb-4">${product.description}</p>
          <div class="flex justify-between">
            <div>
              <h4 class="font-semibold">Technologies:</h4>
              <ul class="list-disc list-inside">
                ${product.technologies?.map(tech => `<li>${tech}</li>`).join('') || 'N/A'}
              </ul>
            </div>
            <div>
              <h4 class="font-semibold">Features:</h4>
              <ul class="list-disc list-inside">
                ${product.features?.map(feature => `<li>${feature}</li>`).join('') || 'N/A'}
              </ul>
            </div>
          </div>
          <button 
            class="mt-6 px-4 py-2 bg-gray-200 rounded-lg"
            onclick="this.parentElement.parentElement.remove()"
          >
            Close
          </button>
        </div>
      `;
      document.body.appendChild(modal);
    }}
    className="px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors"
  >
    Show More
  </button>
  
  <a
    href={product.link}
    target="_blank"
    rel="noopener noreferrer" 
    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
  >
    Visit Site
  </a>
</div>
    </>
  );
};
