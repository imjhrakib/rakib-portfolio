import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import BackgroundElements from './components/BackgroundElements.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

function App() {
  return (
    <div className="bg-dark text-gray-300 font-sans selection:bg-primary selection:text-white overflow-x-hidden">
      <BackgroundElements />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App