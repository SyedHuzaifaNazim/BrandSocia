'use client';
import React, { useState, useEffect } from "react";
import { NAV_LINKS } from "@/lib/constants"; 
import Link from "next/link";
import LoginModal from "@/components/ui/Modal";

// Fixed Logo component with proper props handling
const Logo = ({ color = "white" }) => (
  <img
    src={color === "white" 
      ? "/WhatsApp_Image_2025-07-01_at_17.12.43_38099a7e-removebg-preview.png" 
      : "/WhatsApp_Image_2025-07-01_at_17.12.44_ca3aba3a-removebg-preview.png"}
    alt="Company Logo"
    width="80"
    height="80"
    className="transition-all duration-300 cursor-pointer"
  />
);

export function NavbarDemo() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when a link is clicked
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

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
          className={`relative p-4 flex justify-between items-center max-w-7xl mx-auto`}
        >
          {/* Logo + Nav */}
          <div className="flex items-center gap-8">
            <Link href="/">
              <Logo color={logoColor} />
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`font-medium relative transition-all duration-300 hover:text-opacity-80 ${navItemColor}`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={() => setIsLoginOpen(true)}
              className={`px-4 py-2 font-medium rounded-full transition-all duration-300 
                ${isScrolled 
                  ? "border border-gray-300 hover:bg-gray-100" 
                  : "bg-white text-black hover:bg-gray-200"}`}
            >
              Login
            </button>
            <Link 
              href="/contact"
              className={`px-4 py-2 font-medium rounded-full transition-all duration-300 
                ${isScrolled 
                  ? "bg-black text-white hover:bg-gray-800" 
                  : "bg-orange-500 text-white hover:bg-orange-600"}`}
            >
              Book a call
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <svg 
                className={`h-6 w-6 transition-all duration-300 ${navItemColor}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
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
        {isMobileMenuOpen && (
          <div
            className="md:hidden fixed top-full left-0 w-full bg-white text-black shadow-lg"
            onClick={handleNavClick}
          >
            <div className="flex flex-col p-4 space-y-4">
              {NAV_LINKS.map((item) => (
                <Link 
                  key={item.label} 
                  href={item.href} 
                  className="text-lg font-medium py-2"
                >
                  {item.label}
                </Link>
              ))}
              <button 
                onClick={() => setIsLoginOpen(true)}
                className="w-full px-4 py-2 font-medium rounded-full border border-gray-300 hover:bg-gray-100 text-left"
              >
                Login
              </button>
              <Link 
                href="/contact"
                className="w-full px-4 py-2 font-medium rounded-full bg-black text-white hover:bg-gray-800 text-center"
              >
                Book a call
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Login Modal */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />

      {/* Remove spacer div since header is fixed and uses transparent background */}
    </div>
  );
}

export default NavbarDemo;