import React from 'react';
import { GraduationCap, Award, Code, Users, Clock, MessageCircle } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const education = [
    {
      degree: 'B.Tech Computer Science & Engineering',
      institution: 'Malla Reddy College of Engineering & Technology',
      year: '2022 - 2026',
      cgpa: '9.34',
      status: 'Pursuing'
    },
    {
      degree: 'Board of Intermediate Education',
      institution: 'Narayana Junior College',
      year: '2020 - 2022',
      cgpa: '9.63',
      status: 'Completed'
    },
    {
      degree: 'Board of Secondary Education',
      institution: 'Aum Sai Saraswathi Vidyalaya',
      year: '2020',
      cgpa: '10.0',
      status: 'Completed'
    }
  ];

  const technicalSkills = [
    { name: 'Java', icon: '☕', level: 90 },
    { name: 'Python', icon: '🐍', level: 85 },
    { name: 'C/C++', icon: '⚡', level: 80 },
    { name: 'HTML/CSS', icon: '🌐', level: 95 },
    { name: 'JavaScript', icon: '💛', level: 88 },
    { name: 'React', icon: '⚛️', level: 85 },
    { name: 'Node.js', icon: '🟢', level: 80 },
    { name: 'Git/GitHub', icon: '🐱', level: 90 }
  ];

  const concepts = [
    'Data Structures & Algorithms',
    'Object-Oriented Programming',
    'Operating Systems',
    'Database Management',
    'Computer Networks',
    'Machine Learning',
    'Artificial Intelligence'
  ];

  const softSkills = [
    { name: 'Time Management', icon: Clock },
    { name: 'Communication', icon: MessageCircle },
    { name: 'Collaboration', icon: Users },
    { name: 'Self-Learning', icon: GraduationCap }
  ];

  return (
    <section id="about" className={`py-20 ${
      darkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            About Me
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            I'm a passionate Computer Science student with a strong foundation in software development,
            AI/ML, and a dedication to continuous learning and innovation.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="mb-16">
          <h3 className={`text-2xl font-bold mb-8 text-center ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            <GraduationCap className="inline mr-2" />
            Education
          </h3>
          <div className="max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <div key={index} className="relative mb-8 last:mb-0">
                <div className={`p-6 rounded-lg border-l-4 border-indigo-500 ${
                  darkMode ? 'bg-gray-700' : 'bg-gray-50'
                }`}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <h4 className={`text-lg font-semibold ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {edu.degree}
                      </h4>
                      <p className={`text-indigo-600 font-medium`}>
                        {edu.institution}
                      </p>
                      <p className={`text-sm ${
                        darkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {edu.year} • {edu.status}
                      </p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <div className="flex items-center gap-2">
                        <Award className="text-yellow-500" size={20} />
                        <span className={`font-semibold ${
                          darkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          {edu.cgpa} CGPA
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className={`text-2xl font-bold mb-8 text-center ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            <Code className="inline mr-2" />
            Technical Skills
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {technicalSkills.map((skill, index) => (
              <div key={index} className={`p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow ${
                darkMode ? 'bg-gray-700' : 'bg-white'
              }`}>
                <div className="text-3xl mb-3">{skill.icon}</div>
                <h4 className={`font-semibold mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {skill.name}
                </h4>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <p className={`text-sm mt-1 ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {skill.level}%
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Concepts & Soft Skills */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Concepts */}
          <div>
            <h3 className={`text-2xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Core Concepts
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {concepts.map((concept, index) => (
                <div key={index} className={`p-4 rounded-lg border ${
                  darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'
                }`}>
                  <p className={`font-medium ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {concept}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className={`text-2xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Soft Skills
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {softSkills.map((skill, index) => (
                <div key={index} className={`p-4 rounded-lg border flex items-center gap-3 ${
                  darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'
                }`}>
                  <skill.icon className="text-indigo-600" size={24} />
                  <p className={`font-medium ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;