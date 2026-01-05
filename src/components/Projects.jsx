import React from 'react'

const Projects = () => {
  const projects = [
    {
      title: "Trust Bill",
      description: "A secure utility bill management system for instant electricity bill payments. Fast, secure, and convenient payment solution that allows users to pay their bills anytime, anywhere with real-time bill tracking.",
      image: "https://i.ibb.co/N6RTbhd3/trustbill-Home.png",
      technologies: ["React", "Node.js", "Firebase"],
      githubUrl: "https://github.com/imjhrakib/utility-bill-client",
      liveUrl: "https://utility-bill-management.firebaseapp.com/"
    },
    {
      title: "Scholar Stream",
      description: "A comprehensive scholarship management platform that helps students find the perfect scholarship for their future. Access thousands of verified scholarships tailored to academic achievements and financial needs.",
      image: "https://i.ibb.co/Cr5P0ff/scholarstream-Home.png",
      technologies: ["React", "MongoDB", "Express.js"],
      githubUrl: "https://github.com/imjhrakib/scholar-stream-client",
      liveUrl: "https://scholarship-stream.web.app/"
    },
    {
      title: "Zap Shift",
      description: "A modern parcel delivery service platform that ensures your parcels arrive on time with no fuss. Features real-time tracking, secure delivery management, and user-friendly interface for both senders and riders.",
      image: "https://i.ibb.co/yBQLw533/zap-Shift.png",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      githubUrl: "https://github.com/imjhrakib/zapShift",
      liveUrl: "https://zap-shift-51f3f.web.app/"
    }
  ]

  const getTechColor = (tech) => {
    const colors = {
      "React": "bg-primary/10 text-primary border-primary/20",
      "Tailwind CSS": "bg-blue-500/10 text-blue-400 border-blue-500/20",
      "Node.js": "bg-green-500/10 text-green-400 border-green-500/20",
      "MongoDB": "bg-green-600/10 text-green-500 border-green-600/20",
      "Express.js": "bg-gray-500/10 text-gray-400 border-gray-500/20",
      "Firebase": "bg-orange-500/10 text-orange-400 border-orange-500/20"
    }
    return colors[tech] || "bg-gray-500/10 text-gray-400 border-gray-500/20"
  }

  return (
    <section className="py-24 bg-dark-card/30 relative z-10 overflow-hidden" id="projects">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-[fadeInUp_0.6s_ease-out_forwards]">
          <span className="text-primary font-medium tracking-wide text-sm uppercase">
            My Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Recent <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400">
            A selection of my recent work, featuring full-stack applications and
            modern web solutions built with the MERN stack.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-dark-card border border-white/5 hover:border-primary/50 transition-all duration-500 hover:shadow-neon-hover h-full overflow-hidden rounded-2xl hover:-translate-y-2 hover:scale-[1.02] transform"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  alt={project.title}
                  className="w-full h-full object-cover filter brightness-90 group-hover:brightness-100 transition-all duration-700 group-hover:scale-110"
                  src={project.image}
                  onError={(e) => {
                    console.error(`Failed to load image for ${project.title}:`, project.image);
                    e.target.style.display = 'none';
                  }}
                  onLoad={() => {
                    console.log(`Successfully loaded image for ${project.title}`);
                  }}
                />
                <div className="absolute inset-0 bg-dark/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-8 gap-4 translate-y-4 group-hover:translate-y-0">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white/90 text-dark rounded-full hover:bg-primary hover:text-white transition-all transform hover:scale-110 shadow-lg font-medium text-sm flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full hover:shadow-neon-hover transition-all transform hover:scale-110 shadow-lg font-medium text-sm flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`text-xs font-medium px-2.5 py-1 rounded border ${getTechColor(tech)} hover:scale-105 transition-transform cursor-default`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects