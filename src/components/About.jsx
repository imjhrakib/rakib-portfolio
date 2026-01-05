import React from 'react';

const About = () => {
  return (
    <section className="py-24 relative z-10" id="about">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative group perspective-1000">
            <div className="absolute -inset-2 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition duration-500 animate-tilt"></div>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-dark-card transform transition-transform duration-500 group-hover:rotate-y-6 group-hover:rotate-x-6 shadow-2xl">
              <img
                alt="Coding Setup"
                className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdL_oIXMjZ4roR2poeD-7Mj9xG3ns3Hda__7LKLGtc2xJ6PKy4IUY1lMiuO6-Npr3y2s-iKP41meO1zycSV3TAkElBvHcvGhr-_t2A2Pg85_87fT6KBfHkRB1YoBawdvy6Jgq-Y2CNcBZboKQWP_bHv95BuQW5_HOVfBy7tbkVFEDBkyx1-WPdHivwIevzPq-WTCpyMsm2eVXge_EJSwr9VPd_Zyr1v-pybLvEwk8mEk-bAubOSuSc6casjwpp_NEp6zvc-yI3ARp0"
              />
            </div>
          </div>
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit">
              <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
              <span className="text-xs font-medium text-primary uppercase tracking-wider">
                About Me
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Passionate MERN Stack <span className="text-gradient">Architect</span>
            </h2>
            <p className="text-gray-400 leading-relaxed text-lg transform translate-x-0 opacity-100 transition-all duration-700 delay-100">
              I am Jaker Hossain Rakib, a dedicated developer with a knack for
              building high-performance web applications. My journey involves
              mastering the art of the MERN stack to deliver seamless user
              experiences and robust backend solutions.
            </p>
            <p className="text-gray-400 leading-relaxed transform translate-x-0 opacity-100 transition-all duration-700 delay-200">
              Currently focused on creating scalable full-stack applications and
              exploring new technologies in the JavaScript ecosystem.
            </p>
            <div className="pt-6">
              <h4 className="text-sm font-semibold text-gray-300 mb-4 uppercase tracking-wider">
                Tech Essentials
              </h4>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-dark-card border border-white/10 rounded-lg text-cyan-400 font-medium text-sm flex items-center gap-2 hover:border-cyan-400 hover:shadow-[0_0_10px_rgba(34,211,238,0.3)] hover:-translate-y-1 transition-all duration-300 cursor-default">
                  <i className="fab fa-react"></i> React
                </span>
                <span className="px-4 py-2 bg-dark-card border border-white/10 rounded-lg text-green-500 font-medium text-sm flex items-center gap-2 hover:border-green-500 hover:shadow-[0_0_10px_rgba(34,197,94,0.3)] hover:-translate-y-1 transition-all duration-300 cursor-default">
                  <i className="fab fa-node-js"></i> Node.js
                </span>
                <span className="px-4 py-2 bg-dark-card border border-white/10 rounded-lg text-white font-medium text-sm flex items-center gap-2 hover:border-white hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:-translate-y-1 transition-all duration-300 cursor-default">
                  <i className="fas fa-server"></i> Express
                </span>
                <span className="px-4 py-2 bg-dark-card border border-white/10 rounded-lg text-green-400 font-medium text-sm flex items-center gap-2 hover:border-green-400 hover:shadow-[0_0_10px_rgba(74,222,128,0.3)] hover:-translate-y-1 transition-all duration-300 cursor-default">
                  <i className="fas fa-database"></i> MongoDB
                </span>
                <span className="px-4 py-2 bg-dark-card border border-white/10 rounded-lg text-sky-400 font-medium text-sm flex items-center gap-2 hover:border-sky-400 hover:shadow-[0_0_10px_rgba(56,189,248,0.3)] hover:-translate-y-1 transition-all duration-300 cursor-default">
                  <i className="fab fa-css3"></i> Tailwind
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;