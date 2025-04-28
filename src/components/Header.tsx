import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ['home','about','skills','projects','education','certificates','contact'];
      const pos = window.scrollY + window.innerHeight / 3;
      for (let id of sections) {
        const el = document.getElementById(id);
        if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`
        fixed inset-x-0 top-0 z-50 transition-all duration-300
        ${scrolled
          ? 'backdrop-blur-md bg-gradient-to-r from-white/80 via-white/60 to-white/80 shadow-lg py-2'
          : 'bg-transparent py-4'}
      `}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-500 hover:from-teal-500 hover:to-cyan-600 transition"
        >
          Saurabh.dev
        </a>

        {/* Desktop Nav */}
        {/* Desktop Nav */}
<nav className="hidden lg:flex space-x-8">
  {links.map(l => (
    <a
      key={l.href}
      href={l.href}
      className={`
        relative font-medium transition-colors
        ${active === l.href.slice(1)
          ? 'bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-500 font-bold'
          : 'text-gray-900 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-teal-400 hover:to-cyan-500'}
      `}
    >
      {l.name}
      <span
        className={`
          absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-500
          transition-transform duration-300 origin-left
          ${active === l.href.slice(1) ? 'scale-x-100' : 'scale-x-0'}
        `}
      />
    </a>
  ))}
</nav>

{/* Mobile Nav */}
{open && (
  <div className="lg:hidden bg-white/95 backdrop-blur-md shadow-md">
    <div className="flex flex-col items-center space-y-4 py-6">
      {links.map(l => (
        <a
          key={l.href}
          href={l.href}
          onClick={() => setOpen(false)}
          className={`
            font-medium text-lg transition-colors
            ${active === l.href.slice(1)
              ? 'bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-500 font-bold'
              : 'text-gray-900 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-teal-400 hover:to-cyan-500'}
          `}
        >
          {l.name}
        </a>
      ))}
      {/* …social icons… */}
    </div>
  </div>
)}



        {/* Social + Mobile Toggle */}
        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex space-x-4">
            <a
              href="https://github.com/saurabhchaudhary05"
              target="_blank"
              rel="noopener"
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition"
            >
              <Github size={20} className="text-white" />
            </a>
            <a
              href="https://linkedin.com/in/saur12"
              target="_blank"
              rel="noopener"
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition"
            >
              <Linkedin size={20} className="text-white" />
            </a>
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-white hover:text-cyan-400 transition"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          lg:hidden absolute inset-x-0 top-full bg-white/95 backdrop-blur-md shadow-md
          transform origin-top transition-all duration-300
          ${open ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}
        `}
      >
        <div className="flex flex-col items-center space-y-4 py-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`
                font-medium text-lg transition-colors
                ${active === l.href.slice(1)
                  ? 'bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-500 font-bold'
                  : 'text-gray-900 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-teal-400 hover:to-cyan-500'}
              `}
            >
              {l.name}
            </a>
          ))}
          <div className="flex space-x-6 pt-4">
            <a
              href="https://github.com/saurabhchaudhary05"
              target="_blank"
              rel="noopener"
              className="p-2 rounded-full bg-slate-200 hover:bg-slate-300 transition"
            >
              <Github size={24} className="text-slate-800" />
            </a>
            <a
              href="https://linkedin.com/in/saur12"
              target="_blank"
              rel="noopener"
              className="p-2 rounded-full bg-slate-200 hover:bg-slate-300 transition"
            >
              <Linkedin size={24} className="text-slate-800" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
