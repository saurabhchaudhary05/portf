import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'certificates', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-teal-600">Saurabh.dev</a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-slate-700 hover:text-teal-600 transition-colors duration-300 relative group ${
                activeSection === link.href.substring(1) ? 'text-teal-600' : ''
              }`}
            >
              {link.name}
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-teal-600 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${
                activeSection === link.href.substring(1) ? 'scale-x-100' : ''
              }`}></span>
            </a>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <a 
            href="https://github.com/saurabhchaudhary05" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-700 hover:text-teal-600 transition-colors duration-300"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/in/saur12/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-700 hover:text-teal-600 transition-colors duration-300"
          >
            <Linkedin size={20} />
          </a>
        </div>
        
        {/* Mobile Navigation Button */}
        <button 
          className="md:hidden text-slate-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-slate-700 hover:text-teal-600 transition-colors duration-300 py-2 ${
                  activeSection === link.href.substring(1) ? 'text-teal-600' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex space-x-4 py-2">
              <a 
                href="https://github.com/saurabhchaudhary05" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-700 hover:text-teal-600 transition-colors duration-300"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/saur12/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-700 hover:text-teal-600 transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;