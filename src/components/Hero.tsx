import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center"></div>
      </div>
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeIn">
          <span className="text-teal-400">Saurabh</span> Chaudhary
        </h1>
        <h2 className="text-2xl md:text-3xl mb-8 text-slate-300 animate-fadeIn animation-delay-300">
          Software Developer & Data Enthusiast
        </h2>
        <p className="text-xl max-w-2xl mx-auto mb-10 text-slate-300 animate-fadeIn animation-delay-600">
          Specialized in Java Development, Data Analysis, and Algorithm Implementation
        </p>
        <div className="flex justify-center space-x-4 animate-fadeIn animation-delay-900">
          <a
            href="#contact"
            className="px-8 py-3 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition-colors duration-300"
          >
            Contact Me
          </a>
          <a
            href="#projects"
            className="px-8 py-3 border border-teal-500 text-teal-400 rounded-md hover:bg-teal-900 hover:bg-opacity-30 transition-colors duration-300"
          >
            View Projects
          </a>
        </div>
      </div>
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default Hero;