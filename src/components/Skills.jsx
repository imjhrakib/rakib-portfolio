import React from 'react';

const Skills = () => {
  const frontendSkills = [
    { name: "HTML5", percentage: 95, icon: "fab fa-html5", color: "from-orange-500 to-red-500" },
    { name: "CSS3", percentage: 90, icon: "fab fa-css3-alt", color: "from-blue-400 to-blue-600" },
    { name: "Tailwind CSS", percentage: 95, icon: "fas fa-wind", color: "from-sky-400 to-cyan-600" }
  ];

  const coreSkills = [
    { name: "JavaScript", percentage: 85, color: "#facc15", icon: "fab fa-js" },
    { name: "React", percentage: 90, color: "#22d3ee", icon: "fab fa-react" },
    { name: "Node.js", percentage: 80, color: "#22c55e", icon: "fab fa-node" }
  ];

  const backendSkills = [
    { name: "MongoDB", percentage: 80, icon: "fas fa-database", color: "bg-green-400" },
    { name: "Express.js", percentage: 85, icon: "fas fa-server", color: "bg-gray-400" }
  ];

  return (
    <section className="py-24 relative z-10" id="skills">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-secondary font-medium tracking-wide text-sm uppercase">
            Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-2">
            Technical <span className="text-gradient">Skills</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          <div className="space-y-8">
            <h3 className="text-xl font-semibold text-white border-b border-white/10 pb-4 mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">code</span>
              Frontend Development
            </h3>
            <div className="space-y-6">
              {frontendSkills.map((skill, index) => (
                <div key={index} className="space-y-2 group">
                  <div className="flex justify-between text-sm font-medium mb-1">
                    <span className="text-gray-300 flex items-center gap-2 group-hover:text-white transition-colors">
                      <i className={`${skill.icon} text-orange-500`}></i> {skill.name}
                    </span>
                    <span className="text-primary">{skill.percentage}%</span>
                  </div>
                  <div className="h-3 w-full bg-dark-card rounded-full overflow-hidden border border-white/5">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative transition-all duration-1000 ease-out transform origin-left hover:scale-x-105`}
                      style={{ width: `${skill.percentage}%` }}
                    >
                      <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/50 blur-[2px] animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-8">
            <h3 className="text-xl font-semibold text-white border-b border-white/10 pb-4 mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">layers</span>
              Core Stack
            </h3>
            <div className="flex flex-wrap justify-center gap-8 pt-4">
              {coreSkills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center gap-3 group">
                  <div
                    className="w-24 h-24 radial-progress relative flex items-center justify-center bg-dark-card rounded-full border border-white/5 shadow-lg group-hover:shadow-yellow-500/20 transition-all duration-300"
                    style={{ '--value': `${skill.percentage}%`, '--progress-color': skill.color }}
                  >
                    <div className="absolute inset-1 bg-dark rounded-full flex items-center justify-center z-10">
                      <span className="font-bold text-lg" style={{ color: skill.color }}>
                        {skill.percentage}%
                      </span>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-400 flex items-center gap-2">
                    <i className={`${skill.icon}`} style={{ color: skill.color }}></i> {skill.name}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-8 space-y-4 pt-4 border-t border-white/5">
              {backendSkills.map((skill, index) => (
                <div key={index} className="flex justify-between items-center group cursor-default">
                  <span className="text-gray-400 text-sm flex items-center gap-2">
                    <i className={`${skill.icon} text-green-400 group-hover:scale-110 transition-transform`}></i>
                    {skill.name}
                  </span>
                  <div className="h-1.5 w-32 bg-dark-card rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${skill.color}`}
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;