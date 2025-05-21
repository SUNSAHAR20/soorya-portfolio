'use client'; // Good practice for components that might have client-side interactions, though this one is static for now.

import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-300"
    >
      <div className="max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Soorya Sahar: Software Engineer Crafting Digital Excellence
        </h1>
        <p className="text-lg sm:text-xl mb-10 text-gray-700 dark:text-gray-300">
          Passionate about building scalable, meaningful solutions that bridge the gap between ideas and impactful execution. Welcome to my digital space.
        </p>
        <Link 
          href="/#projects" 
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          View My Work
        </Link>
      </div>
    </section>
  );
}
