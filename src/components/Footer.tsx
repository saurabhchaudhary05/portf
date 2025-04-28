import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-t from-black via-slate-900 to-slate-800 text-white pt-20 pb-12 overflow-hidden">
      {/* Wave Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg
          className="relative block w-full h-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#0f172a"
            d="M0,160L48,149.3C96,139,192,117,288,106.7C384,96,480,96,576,112C672,128,768,160,864,176C960,192,1056,192,1152,170.7C1248,149,1344,107,1392,85.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 space-y-8 md:space-y-0">
          {/* Branding */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-extrabold text-teal-400 mb-2">Saurabh.dev</h2>
            <p className="text-slate-400 max-w-sm">
              Software Developer & Data Enthusiast specializing in Java Development and Data Analysis.
            </p>
          </div>

          {/* Social & Back To Top */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <div className="flex space-x-4">
              {[{
                icon: <Github size={20} />,
                href: 'https://github.com/saurabhchaudhary05'
              },{
                icon: <Linkedin size={20} />,
                href: 'https://www.linkedin.com/in/saur12/'
              },{
                icon: <Mail size={20} />,
                href: 'mailto:saurabhchaudhary4384@gmail.com'
              }].map((btn, idx) => (
                <a
                  key={idx}
                  href={btn.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800 hover:bg-teal-600 p-3 rounded-full transform hover:scale-110 transition"
                >
                  {btn.icon}
                </a>
              ))}
            </div>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center bg-teal-600 hover:bg-teal-500 text-white px-5 py-2 rounded-full font-medium shadow-lg transform hover:scale-105 transition"
            >
              Back to Top
              <ArrowUp size={16} className="ml-2" />
            </button>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Saurabh Chaudhary. All rights reserved.
          </p>
          <nav className="flex flex-wrap justify-center gap-6">
            {['about','skills','projects','contact'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="text-slate-400 hover:text-teal-400 transition-colors"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
