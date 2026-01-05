import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 top-0 bg-dark/80 backdrop-blur-lg border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-20">
          <div
            className="flex-shrink-0 flex items-center group cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => scrollToSection('home')}
          >
            <span className="text-2xl font-bold text-white tracking-tight group-hover:text-primary transition-colors duration-300">
              Rakib<span className="text-primary group-hover:text-secondary transition-colors duration-300">.dev</span>
            </span>
          </div>
          
          <div className="hidden md:flex space-x-10 items-center">
            <button
              className="relative text-sm font-medium text-white hover:text-primary transition-colors group py-2"
              onClick={() => scrollToSection('home')}
            >
              Home
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              className="relative text-sm font-medium text-gray-300 hover:text-primary transition-colors group py-2"
              onClick={() => scrollToSection('about')}
            >
              About
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              className="relative text-sm font-medium text-gray-300 hover:text-primary transition-colors group py-2"
              onClick={() => scrollToSection('projects')}
            >
              Projects
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              className="relative text-sm font-medium text-gray-300 hover:text-primary transition-colors group py-2"
              onClick={() => scrollToSection('skills')}
            >
              Skills
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium text-sm hover:shadow-neon-hover transition-all transform hover:scale-105 active:scale-95 border border-white/10 hover:border-white/30"
              onClick={() => scrollToSection('contact')}
            >
              Contact Me
            </button>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              className="text-white hover:text-primary transition-colors p-2 hover:bg-white/5 rounded-lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="material-symbols-outlined text-3xl">menu</span>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-dark-card/95 backdrop-blur-lg border-t border-white/10 py-4 z-40">
            <div className="flex flex-col space-y-4 px-4">
              <button
                className="text-left text-white hover:text-primary transition-colors py-2"
                onClick={() => scrollToSection('home')}
              >
                Home
              </button>
              <button
                className="text-left text-gray-300 hover:text-primary transition-colors py-2"
                onClick={() => scrollToSection('about')}
              >
                About
              </button>
              <button
                className="text-left text-gray-300 hover:text-primary transition-colors py-2"
                onClick={() => scrollToSection('projects')}
              >
                Projects
              </button>
              <button
                className="text-left text-gray-300 hover:text-primary transition-colors py-2"
                onClick={() => scrollToSection('skills')}
              >
                Skills
              </button>
              <button
                className="text-left px-6 py-2.5 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium text-sm w-fit"
                onClick={() => scrollToSection('contact')}
              >
                Contact Me
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;