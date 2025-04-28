import React from 'react';
import { Code, Database, BarChart2, Users, Layers } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming & Backend',
      icon: <Code size={26} />,
      skills: [
        'Java', 'C++', 'C', 'R', 'REST APIs', 'Multithreading', 'OOPS Concepts', 'API Integration'
      ]
    },
    {
      title: 'Databases & Data Analysis',
      icon: <Database size={26} />,
      skills: [
        'MySQL', 'MongoDB', 'R Programming', 'Tableau', 'Data Visualization', 'Database Design', 'Data Cleaning'
      ]
    },
    {
      title: 'Development Tools & Frameworks',
      icon: <Layers size={26} />,
      skills: [
        'Git & GitHub', 'Postman', 'VS Code',, 'Agile Methodologies'
      ]
    },
    {
      title: 'Problem Solving & Analytical Skills',
      icon: <BarChart2 size={26} />,
      skills: [
        'Algorithms', 'Data Structures', 'Critical Thinking', 'Debugging', 'Optimization Techniques'
      ]
    },
    {
      title: 'Soft Skills & Project Management',
      icon: <Users size={26} />,
      skills: [
        'Leadership', 'Team Collaboration', 'Effective Communication', 'Decision Making', 'Time Management', 'Project Management'
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4 tracking-tight">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            An evolving blend of technical mastery and creative problem-solving shaped through hands-on projects and collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white group rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out transform"
            >
              <div className="bg-gradient-to-r from-teal-400 to-cyan-400 text-white w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                {category.icon}
              </div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-5 group-hover:text-teal-500 transition-colors duration-300">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-slate-100 hover:bg-gradient-to-r from-teal-400 to-cyan-400 hover:text-white text-slate-700 px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
