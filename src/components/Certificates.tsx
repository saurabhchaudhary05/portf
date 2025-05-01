import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: "Mastering Data Structure and Algorithm Course",
      issuer: "GEEKSFORGEEKS",
      duration: "6 Months",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/dsa.pdf"
    },
    {
      title: "Supervised Machine Learning: Regression and Classification",
      issuer: "Standford",
      duration: "1 Month",
      image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/predictive_analysis_mooc.pdf"
    },
    {
      title: "Introduction to Machine Learning Course",
      issuer: "IIT Madras",
      duration: "12 Weeks",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/Nptel_mooc.pdf"
    },
    {
      title: "Data Analysis with R Programming",
      issuer: "Google",
      duration: "18 Weeks",
      image: "https://images.pexels.com/photos/590045/pexels-photo-590045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/Data analysis with r programming.pdf"
    },
    {
      title: "Data Visualization with Tableau",
      issuer: "Salesforce",
      duration: "12 Weeks",
      image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/tableau_coursera.pdf"
    },
    {
      title: "Excel Power Tools for Data Analysis",
      issuer: "Macquarie",
      duration: "3 Months",
      image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "/Z6CKU5R3FRDQ.pdf"
    }
  ];

  const workshops = [
    {
      title: "Electrical Communication Engineering (ECE)",
      description: "Understanding Arduino functionalities, circuit design, and microcontroller programming. Applied knowledge to develop a functional traffic light system.",
      date: "December 2024"
    },
    {
      title: "Data Science with Python: From Data Cleaning to Model Deployment",
      description: "This workshop covers key skills like data preprocessing (using Pandas), visualization (Matplotlib/Seaborn), machine learning (Scikit-learn), and deploying models using Flask or Streamlit.",
      date: "January 2025"
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Certifications & Workshops</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Professional certifications and workshops that have enhanced my knowledge and skills.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-slate-800 mb-8 flex items-center justify-center">
            <Award className="mr-3 text-teal-600" size={24} />
            Certifications
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-slate-100"
              >
                <div className="h-44 overflow-hidden">
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">{cert.title}</h4>
                  <p className="text-slate-600 mb-3">
                    <span className="font-medium">Issuer:</span> {cert.issuer}
                  </p>
                  <p className="text-slate-600 mb-4">
                    <span className="font-medium">Duration:</span> {cert.duration}
                  </p>
                  
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-teal-600 hover:text-teal-700 transition-colors duration-300"
                  >
                    <span>View Certificate</span>
                    <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-slate-800 mb-8 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="mr-3 text-teal-600" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="18" height="18" x="3" y="3" rx="2"></rect>
              <path d="M7 7h10"></path>
              <path d="M7 12h10"></path>
              <path d="M7 17h10"></path>
            </svg>
            Workshops
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workshops.map((workshop, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-slate-100 p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-teal-100 text-teal-600 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m9.5 9.5 5 5"></path>
                      <circle cx="9.5" cy="9.5" r="1"></circle>
                      <circle cx="14.5" cy="14.5" r="1"></circle>
                      <path d="M5 15v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2"></path>
                      <path d="M5 9V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800">{workshop.title}</h4>
                    <p className="text-teal-600">{workshop.date}</p>
                  </div>
                </div>
                
                <p className="text-slate-600">
                  {workshop.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
