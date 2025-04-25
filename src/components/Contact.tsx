import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // In a real application, you would send this data to a server
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Feel free to reach out to me for collaborations, job opportunities, or just to say hello!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold text-slate-800 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-teal-100 p-3 rounded-full text-teal-600 mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Email</h4>
                    <a 
                      href="mailto:saurabhchaudhary4384@gmail.com" 
                      className="text-slate-600 hover:text-teal-600 transition-colors duration-300"
                    >
                      saurabhchaudhary4384@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-teal-100 p-3 rounded-full text-teal-600 mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Phone</h4>
                    <a 
                      href="tel:+917009086959" 
                      className="text-slate-600 hover:text-teal-600 transition-colors duration-300"
                    >
                      +91 7009086959
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-teal-100 p-3 rounded-full text-teal-600 mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Location</h4>
                    <p className="text-slate-600">
                      Jalandhar, Punjab, India
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="font-semibold text-slate-800 mb-4">Connect With Me</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/saurabhchaudhary05" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-slate-100 hover:bg-teal-100 text-slate-700 hover:text-teal-600 p-3 rounded-full transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/saur12/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-slate-100 hover:bg-teal-100 text-slate-700 hover:text-teal-600 p-3 rounded-full transition-colors duration-300"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold text-slate-800 mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-slate-700 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-slate-700 mb-2">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-slate-700 mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-slate-700 mb-2">Your Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="flex items-center bg-teal-500 text-white px-6 py-3 rounded-md hover:bg-teal-600 transition-colors duration-300"
                >
                  <span>Send Message</span>
                  <Send size={16} className="ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;