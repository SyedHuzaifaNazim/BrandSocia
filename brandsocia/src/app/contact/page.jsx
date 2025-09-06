'use client'

import { useState, useEffect } from 'react'
import {Card} from '@/components/ui/Card'
import {Button} from '@/components/ui/Button'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ColorGradientBackground from '@/components/ColorGradientBackground'
import AnimatedGradientBackground from '@/components/AnimatedGradientBackground'
import { motion } from 'motion/react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '', 
    message: ''
  })
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({
      name: '',
      email: '',
      company: '',
      message: ''
    })
  }
  
  return (
    <>
    <ColorGradientBackground />
    <AnimatedGradientBackground />
    <Header/>
    <div className='h-20'></div>
    <div className="py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Have a project in mind? Want to learn more about our services? We'd love to hear from you.
            <br/> Let&apos;s start your project &minus; our team responds within 24 hours.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 border border-orange-200 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center">
                <span className="bg-orange-100 text-orange-600 p-2 rounded-full mr-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </span>
                Send us a message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200"
                    placeholder="Your company (optional)"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200"
                    placeholder="Tell us about your project or inquiry"
                  ></textarea>
                </div>
                
                <Button type="submit" variant="primary" className="w-full text-white py-3 rounded-lg">
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="p-8 border border-orange-200 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                  <span className="bg-orange-100 text-orange-600 p-2 rounded-full mr-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </span>
                  Contact Information
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Feel free to reach out to us through any of the following channels. We're here to help with your digital marketing and design needs.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start p-4 bg-orange-50 rounded-xl transition-transform hover:translate-x-1 duration-300">
                    <div className="text-orange-500 mr-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Address</h3>
                      <p className="text-gray-600">Office # 24, 2nd Floor, ICMAP Tower, ICMAP Head Office, ST-18/C, Block 6, Gulshan-e-Iqbal, Karachi 75300.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start p-4 bg-orange-50 rounded-xl transition-transform hover:translate-x-1 duration-300">
                    <div className="text-orange-500 mr-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Phone</h3>
                      <p className="text-gray-600">+92 328 3389247</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start p-4 bg-orange-50 rounded-xl transition-transform hover:translate-x-1 duration-300">
                    <div className="text-orange-500 mr-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Email</h3>
                      <p className="text-gray-600">contact@brandsocia.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                  <span className="bg-orange-100 text-orange-600 p-2 rounded-full mr-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"></path>
                    </svg>
                  </span>
                  Follow Us
                </h2>
                <div className="flex space-x-4 mt-4">
                  <a href="#" className="bg-gray-100 p-3 rounded-full text-gray-500 hover:text-orange-500 hover:bg-orange-100 transition-colors duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                  </a>
                  <a href="https://www.linkedin.com/company/brand-socia/" className="bg-gray-100 p-3 rounded-full text-gray-500 hover:text-orange-500 hover:bg-orange-100 transition-colors duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61577997013762" className="bg-gray-100 p-3 rounded-full text-gray-500 hover:text-orange-500 hover:bg-orange-100 transition-colors duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                  </a>
                  <a href="https://www.instagram.com/brandsocia/" className="bg-gray-100 p-3 rounded-full text-gray-500 hover:text-orange-500 hover:bg-orange-100 transition-colors duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
    
    {/* Map Section */}
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Visit Our Office</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">We're located in the heart of Karachi. Feel free to stop by during business hours!</p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="rounded-2xl overflow-hidden shadow-lg h-96"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.1736471540546!2d67.09015937452566!3d24.92702994346693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb338bf22becb0d%3A0xd5e50842c5e5d8b!2sICMAP%20Building%2C%20ST-18%2C%20Block%206%20Gulshan-e-Iqbal%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1689338868347!5m2!1sen!2s" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
    
    {/* FAQ Section */}
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <Card className="p-6 border border-orange-200 rounded-xl hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">What services does BrandSocia offer?</h3>
              <p className="text-gray-600">BrandSocia offers a comprehensive range of digital marketing services including social media marketing, content strategy, brand identity, graphic design, web development, SEO, and e-commerce solutions.</p>
            </Card>
            
            <Card className="p-6 border border-orange-200 rounded-xl hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">How quickly can you respond to inquiries?</h3>
              <p className="text-gray-600">We pride ourselves on quick response times. Typically, we respond to all inquiries within 24 hours during business days.</p>
            </Card>
            
            <Card className="p-6 border border-orange-200 rounded-xl hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Do you offer customized packages?</h3>
              <p className="text-gray-600">Yes, we understand that every business is unique. We offer tailored solutions based on your specific needs, goals, and budget.</p>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
    
    <Footer />
    </>
  )
}