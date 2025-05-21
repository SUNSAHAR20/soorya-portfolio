'use client'; // Mark as a Client Component for potential future state (e.g. dark mode toggle)

import React, { useState, useEffect } from 'react';
import Link from 'next/link'; // Use Next.js Link for client-side navigation
import { Moon, Sun, Download, Menu, X } from 'lucide-react';

export default function Navbar() {
  // Basic state for mobile menu toggle - actual dark mode state will be managed globally
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Placeholder for dark mode state - this would typically come from a global context/state manager
  const [darkMode, setDarkMode] = useState(false); 

  // Effect to set initial dark mode based on system preference (optional, can be expanded)
  useEffect(() => {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark); // Set initial state
    // In a real app, you'd also apply this to the HTML element's class list
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // In a real app, you'd also update a global state and persist the preference
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const navLinks = [
    { href: "/#about", label: "About" },
    { href: "/#experience", label: "Experience" },
    { href: "/#projects", label: "Projects" },
    { href: "/#skills", label: "Skills" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <nav 
      role="navigation" 
      aria-label="Main navigation"
      className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md text-gray-900 dark:text-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold">
              Soorya Sahar
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                {link.label}
              </Link>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-3 py-2 rounded-md text-sm font-medium border border-transparent hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center"
            >
              <Download className="h-4 w-4 mr-2" />
              Resume
            </a>
            <button
              onClick={toggleDarkMode}
              aria-label={darkMode ? "Activate light mode" : "Activate dark mode"}
              className="ml-4 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleDarkMode}
              aria-label={darkMode ? "Activate light mode" : "Activate dark mode"}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors mr-2"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              aria-label="Open main menu"
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center"
            >
              <Download className="h-4 w-4 mr-2" />
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
