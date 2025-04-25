// src/components/About.tsx
import React from 'react';
import { BookOpen, Briefcase, Award } from 'lucide-react';

// Option 1: If using files from the public folder (recommended)
// Make sure these files exist in your public folder
const profile = '/profile.jpg';
const Resume = '/saurabh.pdf.pdf';

// Option 2: If importing files from within your src folder
// Uncomment these and comment out the ones above if your files are in src/assets
// import profile from '../assets/profile.jpg';
// import Resume from '../assets/saurabh_cv.pdf';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2">
            <div className="aspect-square w-64 h-64 mx-auto md:ml-0 rounded-full overflow-hidden shadow-xl border-4 border-teal-100">
              <img
                src={profile}
                alt="Saurabh Chaudhary"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">Hello, I'm Saurabh!</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              I'm a skilled software developer specializing in Java programming, data analysis, and algorithm implementation.
              With a solid foundation in computer science, I'm passionate about creating efficient solutions to complex problems.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="bg-teal-100 p-3 rounded-full text-teal-600 mr-4">
                  <BookOpen size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Education</h4>
                  <p className="text-slate-600">B.Tech in Computer Science</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-teal-100 p-3 rounded-full text-teal-600 mr-4">
                  <Briefcase size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Focus Area</h4>
                  <p className="text-slate-600">Java, Database Management</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-teal-100 p-3 rounded-full text-teal-600 mr-4">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Achievement</h4>
                  <p className="text-slate-600">400+ Algorithm Problems Solved</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-teal-100 p-3 rounded-full text-teal-600 mr-4">
                  <BookOpen size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Academic Excellence</h4>
                  <p className="text-slate-600">Top 1% at University</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-6 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition-colors duration-300"
              >
                Get In Touch
              </a>
              <a
                href={Resume}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 border border-teal-500 text-teal-600 rounded-md hover:bg-teal-50 transition-colors duration-300"
                download="Saurabh_Chaudhary_CV.pdf"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;