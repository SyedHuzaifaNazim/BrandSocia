"use client";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ColorGradientBackground from '@/components/ColorGradientBackground'
import AnimatedGradientBackground from '@/components/AnimatedGradientBackground'

export function HeroParallaxDemo() {
  return (
  <>
    <div className="h-30"></div>
    <ColorGradientBackground />
    <AnimatedGradientBackground />
    <Header />
<div className="w-full min-h-screen py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
      <p className="text-xl text-gray-600">Discover our successful projects and creative solutions</p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
      {products.map((product, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
        >
          <div className="relative h-[400px] w-full overflow-hidden">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={product.logo}
                    alt={`${product.title} logo`}
                    className="h-12 w-12 object-contain bg-white rounded-full"
                  />
                  <h3 className="text-xl font-bold text-white">{product.title}</h3>
                </div>
                
                <button
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 transform hover:scale-105 transition-all duration-300 animate-pulse hover:animate-none"
                >
                  Visit Website
                  <svg
                    className="ml-2 -mr-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
<button
  onClick={() => {/* Add modal open logic here */}}
  className="mt-4 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 transform hover:scale-105 transition-all duration-300 animate-pulse hover:animate-none"
>
  Show More
  <svg
    className="ml-2 -mr-1 h-4 w-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
    <div className='h-20'></div>
    <div className='h-20'></div>
    <Footer />
  </>
  );
}
export const products = [
  {
    title: "TaxFilerz & Co",
    link: "https://taxfilerz.com/",
    thumbnail:
      "https://brandsocia.com/wp-content/uploads/2025/09/Screenshot-2025-07-08-124012.png",
    logo: "https://brandsocia.com/wp-content/uploads/2025/07/cropped-cropped-cropped-logo-with-blue-and-white-1-2-300x287-removebg-preview.png"
  },
  {
    title: "Apna Ghar Apni Zameen",
    link: "https://apnagharapnizameen.com/",
    thumbnail:
      "https://brandsocia.com/wp-content/uploads/2025/07/Screenshot-2025-07-07-171639-e1752051698151.png",
    logo: "https://brandsocia.com/wp-content/uploads/2025/07/main-logo.webp"
  },
  {
    title: "MZ Associates",
    link: "https://mzassociatee.com/",
    thumbnail:
      "https://brandsocia.com/wp-content/uploads/2025/07/Screenshot-2025-07-29-161220.png",
    logo: "https://brandsocia.com/wp-content/uploads/2025/07/Lettermark_Logo_with_Interlinked_Circles-removebg-preview-1.png"
  },

  {
    title: "Brands4You",
    link: "https://editorially.org",
    thumbnail:
      "https://brandsocia.com/wp-content/uploads/2025/07/Screenshot-2025-07-08-171105.png",
      logo: "https://brandsocia.com/wp-content/uploads/2025/07/second_concept_blue-01_3.webp"
  },
  {
    title: "Sasti Shopping",
    link: "https://sastishopping.shop/",
    thumbnail:
    "https://brandsocia.com/wp-content/uploads/2025/09/Screenshot-2025-07-08-124132.png",
    logo: "https://brandsocia.com/wp-content/uploads/2025/07/Sasti-Shopping-Final-Logo-scaled.png"
  }
];
export default HeroParallaxDemo;