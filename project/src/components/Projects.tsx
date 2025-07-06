import React from 'react';
import { ExternalLink, Github, Smartphone, Globe, Brain } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const projects = [
    {
      title: 'AgriGrow',
      description: 'A web app that recommends crops and soil practices based on location, season, and pH to boost farm productivity.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      features: [
        'Real-time Weather & Alerts',
        'Location & Season-Based Crop Recommendations',
        'Educational Resources for Farmers',
        'Data-Driven Insights for Productivity',
        'Continuous Improvement from Feedback'
      ],
      icon: Globe,
      color: 'bg-blue-500',
      image: 'https://dcassetcdn.com/design_img/2793971/667568/667568_15436906_2793971_3b419466_image.png'
    },
    {
      title: 'Crop Monitoring Using Machine Learning',
      description: 'A smart agriculture system that uses machine learning and IoT to monitor crop health and predict yield using climate and soil data.',
      tech: ['Python', 'Pandas', 'Random Forest', 'Matplotlib', 'Scikit-learn', 'Seaborn'],
      features: [
        'Crop Health Monitoring using climate and sensor data',
        'Yield Prediction with machine learning models',
        'Real-Time Alerts for pests, diseases, or soil issues',
        'Resource Optimization for water, fertilizer, and pesticide usage',
        'Sustainable Farming through data-driven decisions'
      ],
      icon: Brain,
      color: 'bg-purple-500',
      image: 'https://eos.com/wp-content/uploads/2021/06/interface-tablet.jpg'
    },
    {
      title: 'Innate Moisture Level Analysis for Crop Cultivation Matching Using Machine Learning',
      description: 'A web app that uses machine learning to suggest the best crop based on soil moisture, pH, temperature, and nutrients.',
      tech: ['Python', 'Streamlit', 'Scikit-learn', 'Pandas', 'NumPy'],
      features: [
        'Analyzes innate soil moisture for optimized water usage',
        'User-friendly Streamlit interface for farmers to input soil values',
        ' Auto-fills missing inputs with mean values for smooth predictions',
        'Promotes sustainable farming by reducing fertilizer and water waste',
        'Predicts best-suited crop using Decision Tree based on soil & climate data'
      ],
      icon: Smartphone,
      color: 'bg-green-500',
      image: 'https://img.freepik.com/premium-photo/concept-growing-crops-using-ai-farming-system-uses-artificial-intelligence-optimize-work_1006821-4087.jpg?w=1380'
    }
  ];

  return (
    <section id="projects" className={`py-20 ${
      darkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Featured Projects
          </h2>
          <p className={`text-xl max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            A showcase of my recent work in web development, mobile applications, and AI/ML
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className={`group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ${
              darkMode ? 'bg-gray-700' : 'bg-white'
            }`}>
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className={`absolute top-4 right-4 p-3 rounded-full ${project.color} text-white`}>
                  <project.icon size={24} />
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-3 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.title}
                </h3>
                <p className={`text-sm mb-4 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className={`px-2 py-1 rounded-md text-xs font-medium ${
                      darkMode 
                        ? 'bg-gray-600 text-gray-300' 
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className={`text-sm font-semibold mb-2 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Key Features:
                  </h4>
                  <ul className={`text-sm space-y-1 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-indigo-500 mt-1 flex-shrink-0">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2">
                    <ExternalLink size={16} />
                    View Live
                  </button>
                  <button className={`p-2 rounded-lg transition-colors ${
                    darkMode 
                      ? 'bg-gray-600 text-gray-300 hover:bg-gray-500' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}>
                    <Github size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Call to Action */}
        <div className="text-center mt-16">
          <div className={`inline-block p-6 rounded-lg ${
            darkMode ? 'bg-gray-700' : 'bg-gray-50'
          }`}>
            <h3 className={`text-xl font-bold mb-2 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              More Projects on GitHub
            </h3>
            <p className={`mb-4 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Check out my GitHub for more projects and contributions
            </p>
            <a
              href="https://github.com/dameruppula-nandini"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors inline-flex items-center gap-2"
            >
              <Github size={20} />
              Visit GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;