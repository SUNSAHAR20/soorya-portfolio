'use client'; // Good practice for components

import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projectData = [
  {
    title: "Personal Portfolio Website",
    description: "Developed and deployed this personal portfolio website to showcase skills and projects. The challenge was to create a fast, accessible, and visually appealing personal brand statement. This involved choosing a modern stack (Next.js, Tailwind CSS), designing reusable components, and ensuring a great user experience across devices.",
    technologies: ["Next.js", "React", "Tailwind CSS", "JavaScript", "HTML", "CSS", "Lucide React"],
    githubLink: "#", // Placeholder
    liveLink: "#" // Placeholder
  },
  {
    title: "Automated Cloud Deployment Pipeline",
    description: "Designed and implemented a CI/CD pipeline for automating the deployment of a web application to AWS. This project aimed to streamline development workflows and improve deployment reliability for a critical web service. I was responsible for designing the pipeline architecture, selecting appropriate tools (Jenkins, Docker, Terraform), and scripting the automation logic, resulting in a significant reduction in manual deployment effort and errors.",
    technologies: ["AWS", "Jenkins", "Docker", "Terraform", "Python"],
    githubLink: "#", // Placeholder
    liveLink: null // No live demo for this type of project
  }
];

export default function Projects() {
  return (
    <section 
      id="projects" 
      className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-16">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {projectData.map((project, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-900 rounded-lg shadow-xl overflow-hidden flex flex-col hover:scale-105 transition-transform duration-300"
            >
              {/* Optional Placeholder for project image/thumbnail */}
              <div className="w-full h-48 bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">Project Thumbnail</span>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-auto flex justify-start space-x-3">
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label={`GitHub repository for ${project.title}`}
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label={`Live demo of ${project.title}`}
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
