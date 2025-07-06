import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

interface ExperienceProps {
  darkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  const experiences = [
    {
      title: 'Full Stack Web Development',
      company: 'Pantech AI Warriors Way',
      location: 'Remote',
      duration: 'May 2024 - Aug 2024',
      type: 'Internship',
      logo: '🧠',
      description: [
        'Gained hands-on experience with Full Stack Web Development',
        'Worked on Chatgpt and Canva integration for AI-driven applications',
        'Collaborated with a team to develop and deploy web applications',
        'Learned best practices in web development and AI integration'
      ],
      skills: ['AI', 'Full Stack Web Development', 'Chatgpt', 'Canva', 'Website Building']
    },
    {
      title: 'Web Development Internship',
      company: 'Octanet Services',
      location: 'Remote',
      duration: 'Oct 2024 - Nov2024',
      type: 'Internship',
      logo: '💻',
      description: [
        'Developed responsive web applications using modern frontend technologies',
        'Implemented user-friendly interfaces with focus on UX/UI principles',
        'Collaborated with design team to create pixel-perfect implementations',
        'Optimized website performance and ensured cross-browser compatibility'
      ],
      skills: ['HTML/CSS', 'JavaScript', 'React', 'Responsive Design', 'Git']
    }
  ];

  return (
    <section id="experience" className={`py-20 ${
      darkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Experience
          </h2>
          <p className={`text-xl max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            My professional journey and internship experiences in technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-full bg-indigo-200 dark:bg-indigo-800"></div>
              )}
              
              <div className={`relative flex items-start gap-6 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}>
                {/* Logo */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    {exp.logo}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
                    <div>
                      <h3 className={`text-xl font-bold ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {exp.title}
                      </h3>
                      <p className="text-indigo-600 font-semibold text-lg">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col lg:items-end mt-2 lg:mt-0">
                      <div className={`flex items-center gap-2 text-sm ${
                        darkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        <Calendar size={16} />
                        <span>{exp.duration}</span>
                      </div>
                      <div className={`flex items-center gap-2 text-sm ${
                        darkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="inline-block bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-3 py-1 rounded-full text-sm font-medium">
                      {exp.type}
                    </span>
                  </div>

                  <ul className={`mb-4 space-y-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-indigo-500 mt-1.5 flex-shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <span key={idx} className={`px-3 py-1 rounded-full text-sm font-medium ${
                        darkMode 
                          ? 'bg-gray-700 text-gray-300' 
                          : 'bg-gray-100 text-gray-700'
                      }`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className={`inline-block p-6 rounded-lg ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          } shadow-lg`}>
            <h3 className={`text-xl font-bold mb-2 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Looking for Opportunities
            </h3>
            <p className={`mb-4 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              I'm actively seeking internships and entry-level positions in software development
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center gap-2 mx-auto"
            >
              Get In Touch
              <ExternalLink size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;