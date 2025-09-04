'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const projects = [
  {
    title: 'E-commerce Redesign',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
    description: 'Complete overhaul of online shopping experience with focus on conversion optimization'
  },
  {
    title: 'Brand Identity',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1567446537738-74804ee3a9bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
    description: 'Comprehensive brand system development including logo, color palette, and visual guidelines'
  },
  {
    title: 'Social Campaign',
    category: 'Social Media',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80',
    description: '360-degree social media campaign that increased engagement by 240%'
  }
];

export default function PortfolioPreview() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-20 bg-gradient-to-b relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-primary-500/5 to-secondary-400/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-primary-600/5 to-secondary-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary-600 bg-primary-50 px-4 py-2 rounded-full">
              Our Work
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Explore our portfolio of successful projects and see how we've helped businesses achieve 
            their goals through innovative design and strategic thinking.
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div 
              key={index}
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
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center">
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
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Button>
              <Button 
                href="/contact" 
                variant="outline" 
                size="lg"
                className="px-8 py-4 rounded-xl border-2"
              >
                Start a Project
              </Button>
            </div>
          </div>
        </div>
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