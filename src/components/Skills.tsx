import React from 'react';
import { Code, Database, BarChart2, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming & Backend',
      icon: <Code size={24} />,
      skills: ['Java', 'C++', 'C', 'R', 'JDBC', 'REST APIs', 'Multithreading', 'OOPS']
    },
    {
      title: 'Databases & Data Analysis',
      icon: <Database size={24} />,
      skills: ['MySQL', 'R Programming', 'Tableau', 'Data Visualization']
    },
    {
      title: 'Problem Solving',
      icon: <BarChart2 size={24} />,
      skills: ['Algorithms', 'Data Structures', 'Analytical Thinking', 'Debugging']
    },
    {
      title: 'Soft Skills',
      icon: <Users size={24} />,
      skills: ['Leadership', 'Problem Solving', 'Team Collaboration', 'Decision Making']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            I have developed a diverse set of technical and soft skills through academic work, projects, and continuous learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-teal-100 text-teal-600 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-slate-800 mb-8 text-center">Technical Proficiency</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-slate-700 font-medium">Java</span>
                <span className="text-teal-600">90%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2.5">
                <div className="bg-teal-500 h-2.5 rounded-full" style={{ width: "90%" }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-slate-700 font-medium">C++</span>
                <span className="text-teal-600">85%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2.5">
                <div className="bg-teal-500 h-2.5 rounded-full" style={{ width: "85%" }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-slate-700 font-medium">MySQL</span>
                <span className="text-teal-600">80%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2.5">
                <div className="bg-teal-500 h-2.5 rounded-full" style={{ width: "80%" }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-slate-700 font-medium">R Programming</span>
                <span className="text-teal-600">75%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2.5">
                <div className="bg-teal-500 h-2.5 rounded-full" style={{ width: "75%" }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-slate-700 font-medium">Data Structures</span>
                <span className="text-teal-600">85%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2.5">
                <div className="bg-teal-500 h-2.5 rounded-full" style={{ width: "85%" }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-slate-700 font-medium">Algorithms</span>
                <span className="text-teal-600">80%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2.5">
                <div className="bg-teal-500 h-2.5 rounded-full" style={{ width: "80%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;