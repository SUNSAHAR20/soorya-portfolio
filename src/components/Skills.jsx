'use client'; // Good practice for components

import React from 'react';

const skillsData = {
  "Languages": ["Python", "JavaScript", "Java"],
  "DevOps & Cloud": ["DevOps & CI/CD", "Cloud Platforms (AWS, Azure, GCP)", "Terraform", "Kubernetes"],
  "Tools & Technologies": ["Automation Testing", "API Integration"],
  "Other Skills": ["Problem-Solving", "Effective Communication"]
};

export default function Skills() {
  return (
    <section 
      id="skills" 
      className="py-16 sm:py-20 text-gray-900 dark:text-white transition-colors duration-300" // Default background, alternating with Experience section
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-16">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12">
          {Object.entries(skillsData).map(([category, skillsList]) => (
            <div key={category} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-6">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillsList.map((skill, index) => (
                  <span 
                    key={index} 
                    className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full text-sm sm:text-base font-medium shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
