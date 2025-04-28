import React, { useState } from 'react';
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    if (expandedProject === index) {
      setExpandedProject(null);
    } else {
      setExpandedProject(index);
    }
  };

  const projects = [
    {
      title: "ATM Simulator System",
      shortDescription: "Secure and efficient ATM banking system backend to manage user authentication, transactions, and data integrity using Java and MySQL.",
      fullDescription: "Implemented JDBC-based database interactions for secure transactions, including deposits, withdrawals, balance inquiries, and PIN management. Integrated authentication & encryption techniques to enhance security and prevent unauthorized access. Applied OOP principles to build a modular, scalable, and maintainable architecture, integrating multithreading and exception handling for concurrent transaction processing and system stability.",
      image: "https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Java", "JDBC", "MySQL", "OOP", "Multithreading", "Exception Handling"],
      links: [
        { type: "github", url: "https://github.com/saurabhchaudhary05/ATM-simulator" },
        
      ]
    },
    {
      title: "IPL Auction Dashboard",
      shortDescription: "Interactive and insightful dashboard to analyze IPL auction statistics, focusing on team composition, financial trends, and player performance.",
      fullDescription: "Utilized R Programming to clean, transform, and structure auction data for analysis. Designed interactive Tableau dashboards to visualize auction trends, player statistics, and team spending. Enhanced understanding of auction dynamics and data-driven decision-making processes by focusing on bidding trends and team strategies.",
      image: "https://images.pexels.com/photos/4665064/pexels-photo-4665064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["R", "dplyr", "tidyr", "ggplot2", "MySQL", "RStudio", "Tableau Desktop"],
      links: [
        { type: "github", url: "https://github.com/saurabhchaudhary05/Tableau-Project" },
        
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in development and data analysis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-slate-100"
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{project.title}</h3>
                <p className="text-slate-600 mb-4">
                  {expandedProject === index ? project.fullDescription : project.shortDescription}
                </p>
                
                <button 
                  onClick={() => toggleExpand(index)}
                  className="flex items-center text-teal-600 mb-4 hover:text-teal-700 transition-colors duration-300"
                >
                  {expandedProject === index ? (
                    <>
                      <span>Show less</span>
                      <ChevronUp size={16} className="ml-1" />
                    </>
                  ) : (
                    <>
                      <span>Learn more</span>
                      <ChevronDown size={16} className="ml-1" />
                    </>
                  )}
                </button>
                
                <div className="mb-5">
                  <h4 className="text-sm font-semibold text-slate-700 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="bg-slate-100 text-slate-700 px-2 py-1 rounded-md text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  {project.links.map((link, linkIndex) => (
                    <a 
                      key={linkIndex} 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-teal-600 hover:text-teal-700 transition-colors duration-300"
                    >
                      {link.type === 'github' ? (
                        <>
                          <Github size={16} className="mr-1" />
                          <span>Code</span>
                        </>
                      ) : (
                        <>
                          <ExternalLink size={16} className="mr-1" />
                          <span>Demo</span>
                        </>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;