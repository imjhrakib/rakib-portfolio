import React from 'react'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      className="relative z-10 min-h-screen flex items-center pt-28 sm:pt-24 md:pt-20 px-6 max-w-7xl mx-auto"
      id="home"
    >
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20 w-full">
        <div className="flex-1 space-y-8 text-center lg:text-left z-20 animate-[fadeInUp_1s_ease-out_forwards]">
          <div className="space-y-4">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium tracking-wide animate-pulse-slow hover:scale-105 transition-transform cursor-pointer">
              👋 Welcome to my portfolio
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
              Hi, I'm <br className="hidden lg:block" />
              <span className="text-gradient hover:hue-rotate-15 hover:scale-105 transition-all duration-500 cursor-default inline-block">
                Rakib
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-400">
              Full-Stack MERN Developer
            </h2>
          </div>
          
          <p className="text-gray-400 max-w-xl mx-auto lg:mx-0 text-lg leading-relaxed">
            Transforming ideas into robust, scalable, and user-centric digital
            experiences. Specialized in building modern web applications using
            the MERN stack.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-4">
            <a
              href="/resume.pdf"
              download="Jaker_Hossain_Rakib_Resume.pdf"
              className="group relative px-8 py-3.5 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-bold shadow-lg hover:shadow-neon-hover transition-all transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
              <span className="absolute inset-0 rounded-full border border-white opacity-0 group-hover:opacity-100 group-hover:animate-ping"></span>
            </a>
            
            <button
              className="group px-8 py-3.5 border border-white/20 hover:border-primary/50 bg-white/5 hover:bg-white/10 text-white rounded-full font-bold backdrop-blur-sm transition-all transform hover:-translate-y-1 hover:shadow-neon hover:scale-105"
              onClick={() => scrollToSection('contact')}
            >
              Contact Me
            </button>
          </div>
          
          <div className="flex gap-6 justify-center lg:justify-start pt-8 items-center">
            <span className="text-sm text-gray-500 font-mono">Find me on:</span>
            <a
              className="text-gray-400 hover:text-primary transition-all hover:scale-125 hover:-rotate-12 transform duration-300 text-2xl"
              href="https://github.com/imjhrakib"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              className="text-gray-400 hover:text-secondary transition-all hover:scale-125 hover:rotate-12 transform duration-300 text-2xl"
              href="https://www.linkedin.com/in/imjhrakib/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              className="text-gray-400 hover:text-white transition-all hover:scale-125 hover:-rotate-12 transform duration-300 text-2xl"
              href="https://x.com/imjhrakib"
              target="_blank"
              rel="noopener noreferrer"
              title="Follow on X (Twitter)"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="flex-1 relative flex justify-center items-center w-full max-w-lg lg:max-w-none mt-16 md:mt-0">
          <div className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full border border-primary/20 animate-spin-slow"></div>
          <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full border border-dashed border-secondary/20 animate-spin-slow-reverse"></div>
          
          {/* MERN Stack + GitHub Icons - Very Close to Profile with Top Padding */}
          
          {/* React - Top (positioned above profile but below navbar on mobile) */}
          <div className="absolute -top-12 md:-top-6 left-1/2 transform -translate-x-1/2 bg-dark-card/90 backdrop-blur p-3 rounded-xl border border-white/10 shadow-lg animate-float z-20 hover:scale-105 hover:shadow-primary/50 transition-all duration-300 cursor-pointer group">
            <i className="fab fa-react text-cyan-400 text-2xl animate-spin-slow group-hover:text-cyan-300" title="React"></i>
          </div>
          
          {/* Node.js - Right (extra close) */}
          <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-dark-card/90 backdrop-blur p-3 rounded-xl border border-white/10 shadow-lg animate-float z-20 hover:scale-105 hover:shadow-green-500/50 transition-all duration-300 cursor-pointer group" style={{ animationDelay: '1s' }}>
            <i className="fab fa-node-js text-green-500 text-2xl group-hover:text-green-400" title="Node.js"></i>
          </div>
          
          {/* MongoDB - Bottom (very close) */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-dark-card/90 backdrop-blur p-3 rounded-xl border border-white/10 shadow-lg animate-float z-20 hover:scale-105 hover:shadow-green-500/50 transition-all duration-300 cursor-pointer group" style={{ animationDelay: '2s' }}>
            <i className="fas fa-leaf text-green-500 text-2xl group-hover:text-green-400" title="MongoDB"></i>
          </div>
          
          {/* Express.js - Left (extra close) */}
          <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-dark-card/90 backdrop-blur p-3 rounded-xl border border-white/10 shadow-lg animate-float z-20 hover:scale-105 hover:shadow-gray-400/50 transition-all duration-300 cursor-pointer group" style={{ animationDelay: '1.5s' }}>
            <i className="fas fa-server text-gray-300 text-2xl group-hover:text-white" title="Express.js"></i>
          </div>
          
          {/* GitHub - Top Right Corner (extra close) */}
          <div className="absolute -top-2 -right-2 bg-dark-card/90 backdrop-blur p-3 rounded-xl border border-white/10 shadow-lg animate-float z-20 hover:scale-105 hover:shadow-gray-400/50 transition-all duration-300 cursor-pointer group" style={{ animationDelay: '0.5s' }}>
            <i className="fab fa-github text-gray-300 text-2xl group-hover:text-white" title="GitHub"></i>
          </div>
          
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-2 border-2 border-primary/50 animate-pulse-slow hover:scale-105 transition-all duration-300">
            <div className="w-full h-full rounded-full overflow-hidden relative group border-4 border-dark">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
              <img
                alt="Jaker Hossain Rakib"
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgdJejt5hjY0qfvlaltBC4fSbtAJvZaQLglyOjZf2W11vsztQMPe6ALXt6HvVcltdt8-MvTBP6cPh-BuuCyanjXahj9er_n4kVp7giiuEn_lrAzt1BiEZNhm5KNHVOAqAkSuyBYnBHP76ndovCmzrjeJr0wRmvsVWcDB1-1sGLNUPO2xMmuIAuhiCRIFJmw1scPoyNrH4JVRkvFySjA-4nMP-ISihQDDpw3BhqXHU1Cnnkg9027oP9MboeKQQUMcP5AR_EiF-Bk8si"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero