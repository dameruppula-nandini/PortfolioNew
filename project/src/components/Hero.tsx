import React from 'react';
import profileImg from '../assets/profile.jpeg';

import { Download, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
      darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-indigo-50 via-white to-teal-50'
    }`}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className={`text-4xl md:text-6xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Hello, I'm{' '}
              <span className="text-indigo-600">Dameruppula Nandini</span>
            </h1>
            <p className={`text-xl md:text-2xl mb-6 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Aspiring Software Developer | AI/ML Enthusiast | Problem Solver
            </p>
            <p className={`text-lg mb-8 max-w-lg mx-auto lg:mx-0 ${
              darkMode ? 'text-gray-400' : 'text-gray-700'
            }`}>
              Computer Science student passionate about building innovative solutions. 
              Experienced in web development, AI/ML projects, and technical mentoring.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
              >
                View Projects
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`px-8 py-3 rounded-lg font-medium transition-colors border-2 flex items-center justify-center gap-2 ${
                  darkMode 
                    ? 'border-gray-600 text-gray-300 hover:bg-gray-800' 
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                Get In Touch
                <Mail size={20} />
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6">
              <a
                href="https://www.linkedin.com/in/dameruppula-nandini-75a108291/"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-colors ${
                  darkMode 
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/dameruppula-nandini"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-colors ${
                  darkMode 
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Github size={24} />
              </a>
              <button
                onClick={() => scrollToSection('contact')}
                className={`p-3 rounded-full transition-colors ${
                  darkMode 
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Mail size={24} />
              </button>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-indigo-400 to-teal-400 p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center">
                  <img
                    src={profileImg}
                    alt="Dameruppula Nandini"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-indigo-600 text-white p-4 rounded-full shadow-lg">
                <Download size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;