import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (submitError) setSubmitError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // EmailJS configuration
      const serviceId = 'service_tih0eda';
      const templateId = 'template_xv42ofa';
      const publicKey = 'SAYnBpI48WURpKQCx';

      // Template parameters that match your EmailJS template
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Dameruppula Nandini', // Your name
      };

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      // Success state
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);

    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitError('Failed to send message. Please try again or contact me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'nandinidameruppula16@gmail.com',
      link: 'mailto:nandinidameruppula16@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9290866016',
      link: 'tel:+919290866016'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Hyderabad, Telangana, India',
      link: 'https://maps.app.goo.gl/ViREf7vVU8aoEm4NA'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/dameruppula-nandini-75a108291/',
      color: 'bg-blue-600'
    },
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/dameruppula-nandini',
      color: 'bg-gray-800'
    }
  ];

  return (
    <section id="contact" className={`py-20 ${
      darkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Get In Touch
          </h2>
          <p className={`text-xl max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Have a project in mind? Let's collaborate and create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className={`p-8 rounded-xl shadow-lg ${
            darkMode ? 'bg-gray-700' : 'bg-gray-50'
          }`}>
            <h3 className={`text-2xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Send Message
            </h3>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="mx-auto text-green-500 mb-4" size={48} />
                <h4 className={`text-xl font-semibold mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Message Sent Successfully!
                </h4>
                <p className={`${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Thank you for your message. I'll get back to you within 24 hours!
                </p>
              </div>
            ) : (
              <>
                {submitError && (
                  <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded-lg flex items-center gap-3">
                    <AlertCircle className="text-red-500 flex-shrink-0" size={20} />
                    <p className="text-red-700 dark:text-red-300 text-sm">{submitError}</p>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        className={`w-full px-4 py-3 rounded-lg border transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                          darkMode 
                            ? 'bg-gray-600 border-gray-500 text-white placeholder-gray-400 focus:border-indigo-400' 
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-indigo-500'
                        } focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50`}
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        className={`w-full px-4 py-3 rounded-lg border transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                          darkMode 
                            ? 'bg-gray-600 border-gray-500 text-white placeholder-gray-400 focus:border-indigo-400' 
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-indigo-500'
                        } focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50`}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 rounded-lg border transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                        darkMode 
                          ? 'bg-gray-600 border-gray-500 text-white placeholder-gray-400 focus:border-indigo-400' 
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-indigo-500'
                      } focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50`}
                      placeholder="Project Subject"
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      rows={6}
                      className={`w-full px-4 py-3 rounded-lg border transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed ${
                        darkMode 
                          ? 'bg-gray-600 border-gray-500 text-white placeholder-gray-400 focus:border-indigo-400' 
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-indigo-500'
                      } focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50`}
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={20} />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className={`text-2xl font-bold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 rounded-lg transition-colors ${
                      darkMode 
                        ? 'bg-gray-700 hover:bg-gray-600' 
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <div className="p-3 bg-indigo-600 text-white rounded-lg">
                      <info.icon size={24} />
                    </div>
                    <div>
                      <h4 className={`font-semibold ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {info.title}
                      </h4>
                      <p className={`${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className={`text-2xl font-bold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Connect With Me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 px-6 py-3 rounded-lg text-white ${social.color} hover:opacity-90 transition-opacity`}
                  >
                    <social.icon size={24} />
                    <span className="font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className={`p-6 rounded-lg border-2 border-dashed ${
              darkMode 
                ? 'border-gray-600 bg-gray-700' 
                : 'border-gray-300 bg-gray-50'
            }`}>
              <h4 className={`text-lg font-semibold mb-2 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Response Time
              </h4>
              <p className={`${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                I'm currently available for new projects and collaborations. 
                I typically respond within 24 hours and provide project quotes within 48 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;