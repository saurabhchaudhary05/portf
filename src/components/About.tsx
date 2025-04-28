// src/components/About.tsx
import React from 'react';
import { BookOpen, Briefcase, Award } from 'lucide-react';

const profile = '/profile.jpg';
const Resume = '/saurabh.pdf.pdf';
const Certificate = '/dsa.pdf';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-teal-50 animate-fadeIn">
      <div className="container mx-auto px-8 md:px-20">
        <div className="text-center mb-16">
          {/* Small Intro Badge */}
          <p className="text-teal-500 font-semibold tracking-wider uppercase mb-2">Get to Know Me</p>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4 tracking-tight">
            About Me
          </h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          {/* Profile Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative group">
              <div className="aspect-square w-72 h-72 rounded-full overflow-hidden shadow-2xl border-4 border-teal-100 group-hover:scale-105 transform transition duration-300">
                <img
                  src={profile}
                  alt="Saurabh Chaudhary"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="w-full md:w-1/2">
            <h3 className="text-3xl font-bold text-slate-800 mb-6 leading-tight">
              Hello, I'm <span className="text-teal-500">Saurabh!</span>
            </h3>
            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
              A passionate Software Developer skilled in Java, Database Management, and Algorithm problem-solving.
              I thrive on building efficient solutions to complex challenges and bringing innovative ideas to life.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              {[
                { Icon: BookOpen, title: "Education", desc: "B.Tech in Computer Science" },
                { Icon: Briefcase, title: "Focus Area", desc: "Data Analytics, ,Machine learning, Spring boot, Algorithms" },
                { Icon: Award, title: "Achievements", desc: "400+ Problems Solved" },
                { Icon: BookOpen, title: "Academic Excellence", desc: "Top 1% at University" },
              ].map(({ Icon, title, desc }, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="bg-teal-100 p-3 rounded-full text-teal-600 group-hover:bg-teal-200 transition">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 group-hover:text-teal-600 transition">{title}</h4>
                    <p className="text-slate-600 text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Counters */}
            <div className="grid grid-cols-3 text-center mb-10">
              <div>
                <h4 className="text-2xl font-bold text-teal-600">1</h4>
                <p className="text-slate-600 text-sm">Years Experience</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-teal-600">10+</h4>
                <p className="text-slate-600 text-sm">Projects Completed</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-teal-600">600+</h4>
                <p className="text-slate-600 text-sm">Coding Problems</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-6 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition-transform transform hover:scale-105 duration-300 shadow-md"
              >
                Get In Touch
              </a>

              <a
                href={Resume}
                target="_blank"
                rel="noopener noreferrer"
                download="Saurabh_Chaudhary_CV.pdf"
                className="px-6 py-2 border-2 border-teal-500 text-teal-600 rounded-md hover:bg-teal-500 hover:text-white transition-transform transform hover:scale-105 duration-300 shadow-md"
              >
                Download CV
              </a>

              {/* View Certificate Button */}
              <a
                href={'#certificates'}
                
                className="px-6 py-2 border-2 border-amber-400 text-amber-500 rounded-md hover:bg-amber-400 hover:text-white transition-transform transform hover:scale-105 duration-300 shadow-md"
              >
                View Certificate
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
