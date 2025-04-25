import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology - Computer Science and Engineering",
      institution: "Lovely Professional University",
      location: "Jalandhar, Punjab",
      period: "August 2022 - May 2024",
      grade: "CGPA: 9.09"
    },
    {
      degree: "Intermediate",
      institution: "LASEA",
      location: "Jhalawar, Rajasthan",
      period: "April 2019 - March 2020",
      grade: "Percentage: 87%"
    }
  ];

  const achievements = [
    "Solved 400+ algorithmic problems among various practice platforms",
    "Actively solving DSA problems on LeetCode and GeeksForGeeks to enhance problem-solving and algorithmic skills",
    "One among Dean's top 1% students at university",
    "Recognized for academic excellence and active participation in extracurricular activities at university"
  ];

  const extracurricular = [
    "Active Member of Apna Ghar NGO: Contributed to social initiatives and community development programs",
    "State Level Sports participant: Represented at state and district levels",
    "Hostel Amenities Committee Coordinator: Managed hostel infrastructure and addressed resident concerns"
  ];

  return (
    <section id="education" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Education & Achievements</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            My academic journey and notable accomplishments that have shaped my career path.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center">
              <GraduationCap className="mr-3 text-teal-600" size={24} />
              Education
            </h3>
            
            <div className="relative pl-8 border-l-2 border-teal-200">
              {education.map((edu, index) => (
                <div 
                  key={index} 
                  className={`mb-10 relative ${index === education.length - 1 ? '' : ''}`}
                >
                  <div className="absolute -left-[41px] w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center border-4 border-white">
                    <span className="text-teal-600 font-bold">{2024 - (index * 4)}</span>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md ml-6">
                    <h4 className="text-lg font-semibold text-slate-800 mb-1">{edu.degree}</h4>
                    <p className="text-slate-600 mb-2">{edu.institution}, {edu.location}</p>
                    <div className="flex items-center text-slate-500 text-sm mb-2">
                      <Calendar size={14} className="mr-1" />
                      <span>{edu.period}</span>
                    </div>
                    <p className="text-teal-600 font-medium">{edu.grade}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-3 text-teal-600" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
                  <path d="M12 2v2"></path>
                  <path d="M12 20v2"></path>
                  <path d="m4.93 4.93 1.41 1.41"></path>
                  <path d="m17.66 17.66 1.41 1.41"></path>
                  <path d="M2 12h2"></path>
                  <path d="M20 12h2"></path>
                  <path d="m6.34 17.66-1.41 1.41"></path>
                  <path d="m19.07 4.93-1.41 1.41"></path>
                </svg>
                Achievements
              </h3>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <ul className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-teal-100 text-teal-600 rounded-full p-1 mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </div>
                      <span className="text-slate-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-3 text-teal-600" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 8v8"></path>
                  <path d="M8 12h8"></path>
                </svg>
                Extracurricular Activities
              </h3>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <ul className="space-y-3">
                  {extracurricular.map((activity, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-teal-100 text-teal-600 rounded-full p-1 mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </div>
                      <span className="text-slate-700">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;