import React from 'react';
import { Globe, Brain, BookOpen, Code, Users, Zap } from 'lucide-react';

interface ServicesProps {
  darkMode: boolean;
}

const Services: React.FC<ServicesProps> = ({ darkMode }) => {
  const services = [
    {
      title: 'Web Development',
      icon: Globe,
      color: 'bg-blue-500',
      description: 'Modern, responsive websites and web applications built with cutting-edge technologies.',
      features: [
        'Responsive design for all devices',
        'Modern frameworks (React, Node.js)',
        'SEO optimization',
        'Performance optimization',
        'Database integration',
        'API development'
      ],
      pricing: 'Starting from ₹15,000'
    },
    {
      title: 'Machine Learning Projects',
      icon: Brain,
      color: 'bg-purple-500',
      description: 'AI/ML solutions for data analysis, prediction models, and intelligent automation.',
      features: [
        'Data preprocessing and analysis',
        'Custom ML model development',
        'Predictive analytics',
        'Computer vision projects',
        'Natural language processing',
        'Model deployment and optimization'
      ],
      pricing: 'Starting from ₹20,000'
    },
    {
      title: 'Technical Tutoring',
      icon: BookOpen,
      color: 'bg-green-500',
      description: 'One-on-one tutoring sessions for programming languages and computer science concepts.',
      features: [
        'Java, Python, C/C++ programming',
        'Data Structures & Algorithms',
        'Operating Systems concepts',
        'Database Management Systems',
        'Computer Networks',
        'Personalized learning approach'
      ],
      pricing: '₹500/hour'
    },
    {
      title: 'Project Assistance',
      icon: Code,
      color: 'bg-indigo-500',
      description: 'Academic project guidance and mentorship for students and professionals.',
      features: [
        'Project planning and architecture',
        'Code review and optimization',
        'GitHub repository setup',
        'Documentation assistance',
        'Technical problem solving',
        'Career guidance'
      ],
      pricing: '₹1,000/session'
    }
  ];

  const additionalServices = [
    {
      title: 'Code Review',
      icon: Zap,
      description: 'Professional code review and optimization suggestions'
    },
    {
      title: 'Technical Consultation',
      icon: Users,
      description: 'Expert advice on technology choices and project architecture'
    }
  ];

  return (
    <section id="services" className={`py-20 ${
      darkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Services I Offer
          </h2>
          <p className={`text-xl max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Professional services to help you achieve your technical goals
          </p>
        </div>

        {/* Main Services */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {services.map((service, index) => (
            <div key={index} className={`p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-full ${service.color} text-white`}>
                  <service.icon size={32} />
                </div>
                <div>
                  <h3 className={`text-2xl font-bold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {service.title}
                  </h3>
                  <p className="text-indigo-600 font-semibold">
                    {service.pricing}
                  </p>
                </div>
              </div>
              
              <p className={`text-lg mb-6 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {service.description}
              </p>

              <div className="mb-6">
                <h4 className={`text-sm font-semibold mb-3 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  What's Included:
                </h4>
                <ul className={`space-y-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-green-500 mt-1 flex-shrink-0">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`w-full py-3 rounded-lg font-medium transition-colors ${service.color} text-white hover:opacity-90`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="max-w-4xl mx-auto">
          <h3 className={`text-2xl font-bold text-center mb-8 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Additional Services
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className={`p-6 rounded-lg border-2 border-dashed transition-colors ${
                darkMode 
                  ? 'border-gray-600 hover:border-gray-500 bg-gray-800' 
                  : 'border-gray-300 hover:border-gray-400 bg-white'
              }`}>
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                    <service.icon className="text-indigo-600 dark:text-indigo-400" size={24} />
                  </div>
                  <h4 className={`text-lg font-semibold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {service.title}
                  </h4>
                </div>
                <p className={`${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className={`inline-block p-8 rounded-xl ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          } shadow-lg`}>
            <h3 className={`text-2xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Ready to Get Started?
            </h3>
            <p className={`text-lg mb-6 max-w-md mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Let's discuss your project requirements and create something amazing together!
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-indigo-700 transition-colors text-lg"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;