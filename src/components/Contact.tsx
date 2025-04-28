import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      console.log('Form data submitted:', formData);
      setSuccessMessage('Thank you! Your message has been sent.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Feel free to reach out to me for collaborations, job opportunities, or just to say hello!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-slate-800 mb-8">Contact Information</h3>
              
              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-start">
                  <div className="bg-teal-100 p-4 rounded-full text-teal-600 mr-5">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Email</h4>
                    <a 
                      href="mailto:saurabhchaudhary4384@gmail.com" 
                      className="text-slate-600 hover:text-teal-600 transition-colors duration-300 underline"
                    >
                      saurabhchaudhary4384@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <div className="bg-teal-100 p-4 rounded-full text-teal-600 mr-5">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Phone</h4>
                    <a 
                      href="tel:+917009086959" 
                      className="text-slate-600 hover:text-teal-600 transition-colors duration-300 underline"
                    >
                      +91 7009086959
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start">
                  <div className="bg-teal-100 p-4 rounded-full text-teal-600 mr-5">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Location</h4>
                    <p className="text-slate-600">
                      Jalandhar, Punjab, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-10">
                <h4 className="font-semibold text-slate-800 mb-4">Connect With Me</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/saurabhchaudhary05" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-slate-100 hover:bg-teal-100 text-slate-700 hover:text-teal-600 p-4 rounded-full transition-all duration-300 transform hover:scale-110"
                  >
                    <Github size={24} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/saur12/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-slate-100 hover:bg-teal-100 text-slate-700 hover:text-teal-600 p-4 rounded-full transition-all duration-300 transform hover:scale-110"
                  >
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-slate-800 mb-8">Send Me a Message</h3>

              {successMessage && (
                <div className="bg-green-100 text-green-800 p-4 rounded-md mb-6 text-center font-medium transition-all duration-300">
                  {successMessage}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-slate-700 mb-2 font-medium">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-slate-700 mb-2 font-medium">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-slate-700 mb-2 font-medium">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-slate-700 mb-2 font-medium">Your Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="flex items-center justify-center bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg transition-all duration-300 font-semibold w-full disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} className="ml-3" />
                    </>
                  )}
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
