import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'Graphic', href: '#graphic-projects' },
    { label: 'Video', href: '#video-projects' },
    { label: 'Tools', href: '#tools' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <a href="#home" className="text-xl font-heading font-semibold uppercase tracking-wider">
          Portfolio
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium uppercase tracking-wider hover:text-black transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800 focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-white z-40 pt-20 px-4 transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <nav className="flex flex-col space-y-6">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xl font-medium uppercase tracking-wider hover:text-black transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;