import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`py-8 ${
      darkMode ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-200'
    } border-t`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className={`flex items-center gap-2 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Made with <Heart className="text-red-500" size={16} /> by Dameruppula Nandini
            </p>
            <p className={`text-sm ${
              darkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              © 2024 All rights reserved
            </p>
          </div>
          
          <button
            onClick={scrollToTop}
            className={`p-3 rounded-full transition-colors ${
              darkMode 
                ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;