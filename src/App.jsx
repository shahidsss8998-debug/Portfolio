import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 selection:bg-purple-500/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Resume />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;