import React from "react";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology - Computer Science and Engineering",
      institution: "Lovely Professional University",
      location: "Jalandhar, Punjab",
      period: "August 2022 - May 2024",
      grade: "CGPA: 9.09",
    },
    {
      degree: "Intermediate",
      institution: "LASEA",
      location: "Jhalawar, Rajasthan",
      period: "April 2019 - March 2020",
      grade: "Percentage: 87%",
    },
    {
      degree: "Matriculation",
      institution: "GIS",
      location: "Bharatpur, Rajasthan",
      period: "April 2017 - March 2018",
      grade: "Percentage: 90.5%",
    },
  ];

  const achievements = [
    "Solved 700+ algorithmic problems on various platforms",
    "Active problem-solving on LeetCode and GeeksForGeeks",
    "Among top 1% Dean's students at university",
    "Recognized for academic excellence and extracurricular participation",
  ];

  const extracurricular = [
    "Active Member of Apna Ghar NGO",
    "State Level Sports Participant",
    "Hostel Amenities Committee Coordinator",
    "Secured All India Rank 1017 in UPSEE (Uttar Pradesh State Entrance Exam)",
  ];

  return (
    <section id="education" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Education & Achievements</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            My academic journey and notable accomplishments that have shaped my career path.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center">
              <GraduationCap className="mr-3 text-teal-600" size={24} />
              Education
            </h3>

            <div className="relative pl-8 border-l-2 border-teal-200">
              {education.map((edu, index) => (
                <div key={index} className="mb-10 relative">
                  <div className="absolute -left-8 top-1 w-6 h-6 bg-teal-500 rounded-full"></div>
                  <div className="bg-white p-6 rounded-lg shadow-md ml-6">
                    <h4 className="text-lg font-semibold text-slate-800">{edu.degree}</h4>
                    <p className="text-slate-600">{edu.institution}, {edu.location}</p>
                    <div className="flex items-center text-slate-500 text-sm my-2">
                      <Calendar size={14} className="mr-1" />
                      <span>{edu.period}</span>
                    </div>
                    <p className="text-teal-600 font-medium">{edu.grade}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements and Extracurricular Section */}
          <div>
            {/* Achievements */}
            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center">
                🌟 Achievements
              </h3>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <ul className="space-y-3 list-disc list-inside text-slate-700">
                  {achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Extracurricular */}
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center">
                🏆 Extracurricular Activities
              </h3>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <ul className="space-y-3 list-disc list-inside text-slate-700">
                  {extracurricular.map((activity, index) => (
                    <li key={index}>{activity}</li>
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
