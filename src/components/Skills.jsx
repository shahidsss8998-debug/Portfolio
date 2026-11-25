import React from 'react';

const Skills = () => {
  const skills = [
    // Row 1 (Frontend & Core Languages)
    {
      name: 'React.js',
      tag: 'Frontend Library',
      color: '#61dafb',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 9.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm0-2a4.5 4.5 0 110 9 4.5 4.5 0 010-9z" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" opacity="0.3" />
        </svg>
      ),
    },
    {
      name: 'JavaScript',
      tag: 'ES6+ Language',
      color: '#f7df1e',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 3h18v18H3V3zm13.7 13.9c-.8 0-1.4-.4-1.7-1l1.3-.8c.2.4.5.6.8.6.4 0 .7-.2.7-.6 0-.4-.3-.6-.9-.8l-.5-.2c-1.1-.4-1.6-1-1.6-1.9 0-1.1.9-1.9 2.2-1.9.9 0 1.6.3 2 1l-1.2.8c-.2-.3-.5-.5-.8-.5-.4 0-.6.2-.6.5 0 .3.2.5.8.7l.5.2c1.3.5 1.8 1.1 1.8 2 0 1.3-.9 1.9-2.3 1.9zm-5.7-.1c-.4.5-.9.8-1.6.8-1.2 0-1.8-.7-1.8-1.8V9.3h1.6v4.6c0 .5.2.7.6.7.3 0 .6-.1.8-.4v-4.9h1.6v7.3h-1.2v-.9z" />
        </svg>
      ),
    },
    {
      name: 'Tailwind CSS',
      tag: 'Utility Styling',
      color: '#38bdf8',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
        </svg>
      ),
    },
    {
      name: 'HTML5 & CSS3',
      tag: 'Semantic & Layout',
      color: '#e34f26',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.5 0h21l-1.9 21.2-8.6 2.8-8.6-2.8zm17.6 5.3H4.9l.4 4.5h12.9l-.5 5.6-4.7 1.4-4.7-1.4-.3-3.1H5.7l.5 5.3 5.8 1.7 5.8-1.7z" />
        </svg>
      ),
    },
    {
      name: 'Bootstrap',
      tag: 'Responsive Grid',
      color: '#a855f7',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.8 4H5.2C4.5 4 4 4.5 4 5.2v13.6c0 .7.5 1.2 1.2 1.2h13.6c.7 0 1.2-.5 1.2-1.2V5.2c0-.7-.5-1.2-1.2-1.2zM14 16.5h-4.3v-9H14c1.7 0 2.7.9 2.7 2.2 0 1-.6 1.7-1.5 2 1.1.2 1.8 1 1.8 2.2 0 1.5-1.1 2.6-3 2.6zm-2.7-5.5h2.3c.7 0 1.2-.4 1.2-1.1 0-.6-.4-1-1.2-1h-2.3v2.1zm0 3.7h2.5c.8 0 1.4-.4 1.4-1.2 0-.7-.5-1.2-1.4-1.2h-2.5v2.4z" />
        </svg>
      ),
    },
    {
      name: 'Python',
      tag: 'Backend Logic',
      color: '#38bdf8',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.9 2c-3.5 0-3.3 1.5-3.3 1.5l.04 1.6h3.3v.5H5.2S2 5.2 2 9.7c0 4.6 2.8 4.4 2.8 4.4h1.7v-2.4c0-2.8 2.4-2.7 2.4-2.7h4.8v-.7c0-2-1.8-3.3-3.8-3.3zm-1.8 1.1a.7.7 0 11.001 1.4.7.7 0 01-.001-1.4zm1.9 16.9c3.5 0 3.3-1.5 3.3-1.5l-.04-1.6H12v-.5h6.7s3.2.4 3.2-4.1c0-4.6-2.8-4.4-2.8-4.4h-1.7v2.4c0 2.8-2.4 2.7-2.4 2.7h-4.8v.7c0 2 1.8 3.3 3.8 3.3zm1.8-1.1a.7.7 0 11-.001-1.4.7.7 0 01.001 1.4z" />
        </svg>
      ),
    },

    // Row 2 (Backend, Database, Tools & Cloud)
    {
      name: 'Node & Express',
      tag: 'REST APIs & Server',
      color: '#4ade80',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l9 5.2v10.4L12 22.8 3 17.6V7.2L12 2zm0 2.3L5 8.3v7.4l7 4 7-4V8.3l-7-4z" />
        </svg>
      ),
    },
    {
      name: 'MongoDB',
      tag: 'NoSQL Database',
      color: '#22c55e',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-.3 0-.6.2-.7.4C10.6 2 4 8.7 4 14.8 4 19.3 7.6 23 12 23s8-3.7 8-8.2c0-6.1-6.6-12.8-7.3-14.4-.1-.2-.4-.4-.7-.4zm0 2.5c1.4 2.2 6 8.5 6 12.3 0 3.3-2.7 6-6 6s-6-2.7-6-6c0-3.8 4.6-10.1 6-12.3z" />
        </svg>
      ),
    },
    {
      name: 'Firebase',
      tag: 'Auth & Realtime',
      color: '#fbbf24',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3.89 15.67L6.82 2.45a.77.77 0 011.45-.19l2.87 5.41zm16.22 0l-1.92-12a.77.77 0 00-1.34-.38L3.89 15.67zm-9.06-6.16L8.83 4.88a.77.77 0 00-1.38 0L2.1 15.67l8.95 5.06a1.53 1.53 0 001.5 0l8.35-4.72z" />
        </svg>
      ),
    },
    {
      name: 'Git & GitHub',
      tag: 'Version Control',
      color: '#f43f5e',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
        </svg>
      ),
    },
    {
      name: 'Vite & Tooling',
      tag: 'Build & Bundler',
      color: '#a855f7',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.5 3.3L12.7 21a.8.8 0 01-1.4 0L2.5 3.3a.8.8 0 011-1.1l8.5 4.3 8.5-4.3a.8.8 0 011 1.1z" />
        </svg>
      ),
    },
    {
      name: 'Netlify & Render',
      tag: 'Cloud Deployment',
      color: '#06b6d4',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 relative bg-[#050814] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full dev-card text-xs font-mono text-cyan-400 border border-white/10 mb-2 shadow-sm">
              <span>02</span>
              <span className="w-1 h-1 rounded-full bg-purple-400" />
              <span>TECHNICAL STACK</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-white leading-tight">
              Tools, Languages &{' '}
              <span className="italic bg-linear-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">Frameworks.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed font-sans">
            A verified 12-technology stack powering full-stack web applications, REST APIs, and responsive user interfaces.
          </p>
        </div>

        {/* Compact 6x2 Skills Grid (Ends in 2 Lines) */}
        <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="dev-card-interactive p-4 sm:p-5 rounded-2xl flex flex-col items-center text-center justify-center gap-2.5 border border-white/10 group transition-all"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center p-2 dev-card border border-white/10 group-hover:scale-110 transition-transform shadow-sm"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </div>
              <div>
                <h3 className="font-sans text-xs sm:text-sm font-bold text-white group-hover:text-purple-300 transition-colors line-clamp-1">
                  {skill.name}
                </h3>
                <span className="text-[10px] font-mono text-slate-400 block mt-0.5">
                  {skill.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
