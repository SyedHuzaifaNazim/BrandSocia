// components/sections/ServiceGrid.jsx
'use client'

import { services } from '@/lib/constants/services'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export default function ServiceGrid() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of digital marketing and design services to help your business thrive.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 group border border-gray-100 h-full">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md text-white`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 mb-5">{service.description}</p>
              <Button href={`/services/${service.slug}`} variant="ghost" className="px-0 text-primary-600 hover:text-primary-700 group">
                Learn more <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Button>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button href="/services" variant="primary" size="lg">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  )
}