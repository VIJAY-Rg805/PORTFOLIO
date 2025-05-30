import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-black">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-sm text-gray-400">
              © {currentYear} VIJAY RG. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-8">
            <a href="#home" className="text-sm text-gray-400 hover:text-white transition-colors">
              Back to Top
            </a>
            <a href="#about" className="text-sm text-gray-400 hover:text-white transition-colors">
              About
            </a>
            <a href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;