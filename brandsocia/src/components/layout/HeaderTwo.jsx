'use client';
import React, { useState, useEffect } from "react";
import { NAV_LINKS, COMPANY_INFO } from "@/lib/constants"; // Import your constants
import Contact from "@/app/contact/page";

// Your custom logo component with black and white versions
const Logo = ({ color }) => (
  <img
    src={color === "black" ? "/WhatsApp_Image_2025-07-01_at_17.12.44_ca3aba3a-removebg-preview.png" : "/WhatsApp_Image_2025-07-01_at_17.12.44_ca3aba3a-removebg-preview.png"}
    alt="Logo"
    width="80"
    height="80"
    className="transition-all duration-300" 
    href="/"
  />
);

// The main Navbar component
export function NavbarDemoTwo() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Use the NAV_LINKS from constants
  const navItems = NAV_LINKS;

  // Effect to add and remove the scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled more than 50 pixels
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Base classes for the header, applying conditional styling
  const headerClasses = `
    fixed top-0 left-0 w-full z-50 transition-all duration-300 
    rounded-b-2xl shadow-md 
    ${isScrolled ? "bg-white text-black" : "bg-transparent text-white"}
  `;

  const logoColor = isScrolled ? "black" : "white";
  const navItemColor = isScrolled ? "text-black" : "text-white";

  return (
    <div className="relative">
      <header className={headerClasses}>
        <div
          className={`
            relative p-4 flex justify-between items-center max-w-7xl mx-auto
            ${!isScrolled ? "shine-effect" : ""}
          `}>
          {/* Logo and Nav Items */}
          <div className="flex items-center gap-8">
            <Logo color={logoColor} />
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`
                    font-medium relative transition-all duration-300
                    hover:text-opacity-80
                    ${navItemColor}
                  `}>
                  {item.label}
                  <span className={`absolute left-0 bottom-0 h-[2px] bg-current transform scale-x-0 transition-all duration-300 origin-left group-hover:scale-x-100`}></span>
                </a>
              ))}
            </nav>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className={`px-4 py-2 font-medium rounded-full transition-all duration-300 ${isScrolled ? "border border-gray-300 hover:bg-gray-100" : "bg-white text-black hover:bg-gray-200"}`}>
              Login
            </button>
            <button onClick={Contact} className={`px-4 py-2 font-medium rounded-full transition-all duration-300 ${isScrolled ? "bg-black text-white hover:bg-gray-800" : "bg-orange-500 text-white hover:bg-orange-600"}`}>
              Book a call
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <svg className={`h-6 w-6 transition-all duration-300 ${logoColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            md:hidden fixed top-16 left-0 w-full bg-white text-black transition-transform duration-300 ease-in-out transform
            ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
          `}>
          <div className="flex flex-col p-4 space-y-4">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-lg font-medium">
                {item.label}
              </a>
            ))}
            <button className="w-full px-4 py-2 font-medium rounded-full border border-gray-300 hover:bg-gray-100">
              Login
            </button>
            <button className="w-full px-4 py-2 font-medium rounded-full bg-black text-white hover:bg-gray-800">
              Book a call
            </button>
          </div>
        </div>
      </header>
      {/* Spacer for fixed header */}


      <style jsx>{`
        .shine-effect {
          position: relative;
          overflow: hidden;
        }

        .shine-effect::after {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            45deg,
            rgba(255, 255, 255, 0) 40%,
            rgba(255, 255, 255, 0.4) 50%,
            rgba(255, 255, 255, 0) 60%
          );
          animation: shine 2s linear infinite;
          animation-play-state: running;
          pointer-events: none;
        }
        
        @keyframes shine {
          0% {
            transform: translate(-100%, -100%) rotate(45deg);
          }
          100% {
            transform: translate(100%, 100%) rotate(45deg);
          }
        }
      `}</style>
    </div>
  );
}
export default NavbarDemoTwo;