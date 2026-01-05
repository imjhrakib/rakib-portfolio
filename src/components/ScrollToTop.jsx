import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          className="fixed bottom-8 right-8 z-50 p-3 bg-dark-card border border-primary text-primary rounded-full shadow-neon hover:bg-primary hover:text-white transition-all duration-300 transform hover:-translate-y-2 group backdrop-blur-sm"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <span className="material-symbols-outlined group-hover:animate-bounce">
            arrow_upward
          </span>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;