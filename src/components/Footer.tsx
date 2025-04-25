import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-teal-400 mb-2">Saurabh.dev</h2>
            <p className="text-slate-400 max-w-md">
              Software Developer & Data Enthusiast specializing in Java Development and Data Analysis.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://github.com/saurabhchaudhary05" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-slate-800 hover:bg-teal-700 p-3 rounded-full transition-colors duration-300"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/saur12/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-slate-800 hover:bg-teal-700 p-3 rounded-full transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:saurabhchaudhary4384@gmail.com" 
                className="bg-slate-800 hover:bg-teal-700 p-3 rounded-full transition-colors duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="flex items-center bg-slate-800 hover:bg-teal-700 px-4 py-2 rounded-md transition-colors duration-300"
            >
              <span>Back to Top</span>
              <ArrowUp size={16} className="ml-2" />
            </button>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Saurabh Chaudhary. All rights reserved.
          </p>
          
          <nav className="flex flex-wrap justify-center gap-6">
            <a href="#about" className="text-slate-400 hover:text-teal-400 transition-colors duration-300">About</a>
            <a href="#skills" className="text-slate-400 hover:text-teal-400 transition-colors duration-300">Skills</a>
            <a href="#projects" className="text-slate-400 hover:text-teal-400 transition-colors duration-300">Projects</a>
            <a href="#contact" className="text-slate-400 hover:text-teal-400 transition-colors duration-300">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;