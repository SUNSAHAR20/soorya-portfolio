'use client'; // Good practice for components

import React from 'react';

const experienceData = [
  {
    title: "Technical Support Specialist",
    company: "Xplore Inc.",
    // dates: "Year - Year", // Placeholder if dates were available
    responsibilities: [
      "Provided advanced technical troubleshooting for 4G, 5G, and Fibre optic technologies, ensuring high levels of customer satisfaction.",
      "Supported a diverse range of business and residential clients, resolving complex technical issues efficiently.",
      "Authored and maintained comprehensive documentation on best practices and troubleshooting procedures for internal technical teams."
    ]
  },
  {
    title: "Junior SDET",
    company: "Sonrai Security",
    // dates: "Year - Year", // Placeholder if dates were available
    responsibilities: [
      "Engineered and implemented automated test suites within CI/CD pipelines, significantly improving software quality and deployment speed.",
      "Championed and maintained rigorous testing standards in fast-paced Agile development environments."
    ]
  }
];

export default function Experience() {
  return (
    <section 
      id="experience" 
      className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12">
          Experience
        </h2>
        <div className="max-w-3xl mx-auto space-y-8 sm:space-y-12">
          {experienceData.map((job, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-1">
                {job.title}
              </h3>
              <p className="text-lg sm:text-xl font-medium text-gray-700 dark:text-gray-300 mb-3">
                {job.company}
              </p>
              {/* {job.dates && (
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  {job.dates}
                </p>
              )} */}
              <ul className="list-disc list-outside ml-5 space-y-2 text-gray-600 dark:text-gray-400">
                {job.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
