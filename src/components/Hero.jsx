import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-4 sm:mb-6 break-words">
          <span className="block text-white mb-1">Hi, I'm</span>
          <span className="block bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent leading-tight">
            MUHAMMED SHAHID P
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-base sm:text-xl text-slate-400 mb-8 sm:mb-10 leading-relaxed px-2">
          Passionate Web & Full-Stack Developer with hands-on internship experiences, specializing in building fast, responsive, and user-friendly applications using React, Tailwind CSS, and Python.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-xs sm:max-w-none mx-auto">
          <a
            href="#projects"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white text-sm sm:text-base font-semibold transition-all hover:scale-105 shadow-lg shadow-purple-500/20 text-center"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-full border border-slate-700 hover:border-purple-500 text-slate-300 hover:text-white text-sm sm:text-base font-semibold transition-all hover:bg-purple-500/10 text-center"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
