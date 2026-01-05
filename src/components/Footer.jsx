import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 bg-dark border-t border-white/5 relative z-10 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-4 left-10 w-1 h-1 bg-primary rounded-full animate-float"></div>
        <div
          className="absolute top-10 right-20 w-1 h-1 bg-secondary rounded-full animate-float"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-gray-500 text-sm">
            © 2026 <span className="text-primary font-bold">Rakib</span>. All rights
            reserved.
          </p>
        </div>
        <div className="flex space-x-6">
          <a
            className="group relative p-2 rounded-full transition-all duration-300 hover:bg-white/5"
            href="https://github.com/imjhrakib"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <i className="fab fa-github text-xl text-gray-400 group-hover:text-white group-hover:rotate-12 transition-all duration-300"></i>
          </a>
          <a
            className="group relative p-2 rounded-full transition-all duration-300 hover:bg-white/5"
            href="https://www.linkedin.com/in/imjhrakib/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <i className="fab fa-linkedin-in text-xl text-gray-400 group-hover:text-white group-hover:-rotate-12 transition-all duration-300"></i>
          </a>
          <a
            className="group relative p-2 rounded-full transition-all duration-300 hover:bg-white/5"
            href="mailto:jhrakib.dev@gmail.com"
          >
            <div className="absolute inset-0 bg-red-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <i className="far fa-envelope text-xl text-gray-400 group-hover:text-white group-hover:rotate-12 transition-all duration-300"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;