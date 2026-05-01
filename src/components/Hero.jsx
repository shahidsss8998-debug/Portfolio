import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          <span className="block text-white">Hi, I'm</span>
          <span className="block bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            MUHAMMED SHAHID P
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-slate-400 mb-10 leading-relaxed">
          A passionate Frontend Developer, I specialize in building fast, responsive, and user-friendly web interfaces using modern technologies like React and Tailwind CSS.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-semibold transition-all hover:scale-105 shadow-lg shadow-purple-500/20"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3 rounded-full border border-slate-700 hover:border-purple-500 text-slate-300 hover:text-white font-semibold transition-all hover:bg-purple-500/10"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
