'use client'; // Good practice for components

import React from 'react';

export default function About() {
  return (
    <section 
      id="about" 
      className="py-16 sm:py-20 text-gray-900 dark:text-white transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto space-y-6 text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed sm:leading-loose">
          <p>
            A results-oriented Software Engineer with a passion for developing scalable and innovative solutions. 
          </p>
          <p>
            With proven expertise in software development, automation testing, and DevOps practices, I excel at bridging the gap between conceptualization and high-impact execution.
          </p>
          <p>
            I am eager to contribute to challenging projects and leverage technology to solve real-world problems, continuously seeking opportunities to learn and grow.
          </p>
        </div>
      </div>
    </section>
  );
}
