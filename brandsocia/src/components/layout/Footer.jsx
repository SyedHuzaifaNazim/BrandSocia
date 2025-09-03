'use client';
import { useState } from 'react';
import Link from 'next/link';
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { NAV_LINKS, SERVICES, SOCIAL_LINKS, COMPANY_INFO } from "@/lib/constants";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const newsletterSenderEmail = "brandsocia7@gmail.com";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setMessage("Please enter a valid email address.");
      setIsSubmitting(false);
      return;
    }

    try {
      // In a real implementation, you would send this to your backend
      console.log("Subscribing with email:", email);
      console.log("Newsletters will be sent from:", newsletterSenderEmail);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setMessage("Thank you for subscribing! 🎉 You'll receive our newsletter from " + newsletterSenderEmail);
      setEmail("");
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
      // Clear message after 5 seconds
      setTimeout(() => setMessage(""), 5000);
    }
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Gradient background with potential noise texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900 via-black to-orange-800 opacity-95 z-0"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Brand section */}
          <div className="space-y-6">
            <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-300">
              {COMPANY_INFO.name}
            </h3>
            <p className="text-orange-100 max-w-md text-lg">
              We help brands grow with innovative digital strategies and stunning design that converts visitors into customers.
            </p>
            
            {/* Contact information */}
            <div className="space-y-2 mt-6">
              <p className="text-orange-200 flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {COMPANY_INFO.email}
              </p>
              <p className="text-orange-200 flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {COMPANY_INFO.phone}
              </p>
              <p className="text-orange-200 flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {COMPANY_INFO.address}
              </p>
            </div>
          </div>
          
          {/* Links grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-orange-300 relative inline-block">
                Navigation
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600"></span>
              </h4>
              <ul className="space-y-3">
                {NAV_LINKS.map((item) => (
                  <li key={item.label}>
                    <Link 
                      href={item.href} 
                      className="text-orange-100 hover:text-white transition-colors duration-300 hover:pl-2 block"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-orange-300 relative inline-block">
                Services
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600"></span>
              </h4>
              <ul className="space-y-3">
                {SERVICES.map((service) => (
                  <li key={service.label}>
                    <Link 
                      href={service.href} 
                      className="text-orange-100 hover:text-white transition-colors duration-300 hover:pl-2 block"
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-orange-300 relative inline-block">
                Connect
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600"></span>
              </h4>
              <div className="flex space-x-4 mb-6">
                {SOCIAL_LINKS.map((social) => (
                  <a 
                    key={social.name}
                    href={social.href} 
                    className="w-10 h-10 rounded-full bg-orange-900/30 flex items-center justify-center text-orange-200 hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                    aria-label={social.name}
                  >
                    {/* Icon would be dynamically rendered based on social.icon */}
                    <div className="w-5 h-5 bg-current rounded-sm"></div>
                  </a>
                ))}
              </div>
              
              {/* Newsletter subscription */}
              <div className="mt-6">
                <h5 className="text-md font-medium mb-3 text-orange-200">Join our newsletter</h5>
                <p className="text-sm text-orange-300/80 mb-4">
                  Stay updated with our latest news and offers. We'll send our newsletters from {newsletterSenderEmail}
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-md">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      className="flex-1 px-4 py-3 rounded-lg bg-orange-900/20 border border-orange-800/50 text-white placeholder-orange-300/70 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300"
                      required
                      disabled={isSubmitting}
                    />
                    <button 
                      type="submit" 
                      className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center min-w-[120px]"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </>
                      ) : "Subscribe"}
                    </button>
                  </div>
                  <p className="text-xs text-orange-300/60">
                    By subscribing, you agree to receive our newsletter and marketing emails. 
                    You can unsubscribe at any time. We respect your privacy.
                  </p>
                </form>
                {message && (
                  <div className={`mt-4 p-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    message.includes("Thank you") 
                      ? "bg-green-900/30 text-green-300 border border-green-800/50" 
                      : "bg-red-900/30 text-red-300 border border-red-800/50"
                  }`}>
                    {message}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* TextHoverEffect section */}
        <div className="h-[20rem] flex items-center justify-center">
          <TextHoverEffect text="BRANDSOCIA" />
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-orange-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-orange-300 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-orange-300 hover:text-white transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-orange-300 hover:text-white transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-orange-300 hover:text-white transition-colors text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}